/* eslint-disable react/prop-types */
import { IoMdClose } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"
import { HIDE_OVERLAY } from "../../store/action"
import { useContext } from "react"
import { StoreContext } from "../../store/store-context"
import { motion } from "framer-motion"

export default function Overlay({ data }) {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(StoreContext)

    const closeHandler = () => {
        dispatch({ type: HIDE_OVERLAY })
    }

    const navigateHandler = (route) => {
        dispatch({ type: HIDE_OVERLAY })
        route === "/sign-in" ? navigate(`sign-in`) : navigate(`${data.btnLink}`)
    }

    return <>
        <motion.div
            animate={{ x: [-200, 0] }}
            className="overlayContainer">
            {
                data.type === "hamburger" ? <div className="hamburgerLinkContainer">
                    <Link to="/" onClick={closeHandler}>HOME</Link>
                    <Link to="/event-booking" onClick={closeHandler}>EVENT BOOKING</Link>
                    <Link to="/bartending" onClick={closeHandler}>COURSES</Link>
                    <Link to="/about-us" onClick={closeHandler}>ABOUT US</Link>
                    <Link to="/contact-us" onClick={closeHandler}>CONTACT US</Link>
                </div> :
                    <div className="otherLinksContainer">
                        <h1>{data.title}</h1>
                        <p>{data.info}</p>
                        {data.type === "signIn" ?
                            <div>
                                <div>
                                    <button onClick={navigateHandler}>{data.btnText}</button>
                                    <button onClick={() => navigateHandler("/sign-in")}>REGISTER NOW</button>
                                </div>
                            </div> : <button onClick={navigateHandler}>{data.btnText}</button>}
                    </div>
            }

        </motion.div>
        <IoMdClose className="closeIcon" onClick={closeHandler} />
    </>
}