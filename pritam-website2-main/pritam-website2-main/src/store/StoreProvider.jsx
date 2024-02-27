import { useReducer } from "react";
import { StoreContext } from "./store-context";
import reducer from "./reducers";

export default function StoreProvider({ children }) {

    const initialState = {
        showOverlay: {
            show: false,
            title: "",
            info: "",
            btnText: "",
            btnLink: "",
            type: "",
        },
        showModal: {
            show: false,
            title: "",
            info: "",
            points: [],
            image: ""
        },
        showMobileSideBar: false,
        showSignUpModal: false,
    }

    return (
        <StoreContext.Provider value={useReducer(reducer, initialState)}>
            {children}
        </StoreContext.Provider>
    )
}