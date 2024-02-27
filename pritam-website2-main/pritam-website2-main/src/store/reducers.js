import {
  HIDE_MOBILE_SIDEBAR,
  HIDE_MODAL,
  HIDE_OVERLAY,
  HIDE_SIGN_UP_MODAL,
  SHOW_MOBILE_SIDEBAR,
  SHOW_MODAL,
  SHOW_OVERLAY,
  SHOW_SIGN_UP_MODAL,
} from "./action";

export default function reducer(state, { type, payload }) {
  switch (type) {
    case SHOW_OVERLAY:
      return {
        ...state,
        showOverlay: {
          show: true,
          title: payload.title,
          type: payload.type,
          info: payload.info,
          btnLink: payload.btnLink,
          btnText: payload.btnText,
        },
      };

    case HIDE_OVERLAY:
      return {
        ...state,
        showOverlay: {
          show: false,
          title: "",
          type: "",
          info: "",
          btnLink: "",
          btnText: "",
        },
      };

    case SHOW_MODAL:
      return {
        ...state,
        showModal: {
          show: true,
          title: payload.title,
          info: payload.info,
          points: payload.points,
          image: payload.image,
        },
      };

    case HIDE_MODAL:
      return {
        ...state,
        showModal: {
          show: false,
          title: "",
          info: "",
          points: "",
          image: "",
        },
      };

    case SHOW_MOBILE_SIDEBAR:
      return {
        ...state,
        showMobileSideBar: true,
      };

    case HIDE_MOBILE_SIDEBAR:
      return {
        ...state,
        showMobileSideBar: false,
      };

    case SHOW_SIGN_UP_MODAL:
      return {
        ...state,
        showSignUpModal: true,
      };

    case HIDE_SIGN_UP_MODAL:
      return {
        ...state,
        showSignUpModal: false,
      };
    default:
      return state;
  }
}
