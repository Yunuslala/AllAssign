/** @format */

import axios from "axios";
import { Store } from "react-notifications-component";

const Baseurl = `https://pritam-backend.vercel.app/`;


export const getSocialLinks = async (setResponse) => {
  try{
    const response = await axios.get(`https://pritam-backend.vercel.app/api/v1/admin/viewContactDetails`)    
    const data = response.data.data
    setResponse(data)
  }catch{}
}

export const getBannerType = async (query , setResponse) => {
  try{
    const response  = await axios.get(`https://pritam-backend.vercel.app/api/v1/admin/BannerbyType/${query}`)
    const data = response.data.data?.[0]
    setResponse(data)
  }catch{}
}

export const getFooterAds = async (setResponse) => {
  try {
    const response = await axios.get(
      "https://pritam-backend.vercel.app/api/v1/admin/getAds"
    );
    setResponse(response.data.data);
  } catch {}
};

const getWhoWeAre = async (loading, setResponse) => {
  loading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/admin/getWhoWeare`);
    const data = response.data.data;
    setResponse(data);
    loading(false);
  } catch {
    loading(false);
  }
};

export const getWhoWeAreId = async (payload, setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/getWhoWeareById/${payload}`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const getPopularJob = async (setLoading, setResponse) => {
  setLoading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/admin/getPopularJob`);
    const data = response.data.data;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

const getTrendingServices = async (setLoading, setResponse) => {
  setLoading(true);
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/getTrendingService`
    );
    const data = response.data.data;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

const getClientReviews = async (setLoading, setResponse) => {
  setLoading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/user/clientRating`);
    const data = response.data.data;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

const getSatffReviews = async (setLoading, setResponse) => {
  setLoading(true);
  try {
    const response = await axios.get(`${Baseurl}api/v1/user/staffRating`);
    const data = response.data.data;
    setResponse(data);
    setLoading(false);
  } catch {
    setLoading(false);
  }
};

const get_event = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/admin/getEvent`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const get_sub_event = async (query, setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/getSubEvent/${query}`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const get_faq = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/faq/All`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const get_contact_detail = async (setResponse) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/admin/viewContactDetailsOffice`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

const register_staff = async (payload, setLoading) => {
  setLoading(true);
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/registration`,
      payload
    );
    const msg = response.data.message;
    setLoading(false);
    Store.addNotification({
      title: "Success !",
      message: msg,
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  } catch (e) {
    setLoading(false);
    const msg = e.response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }
};

const login_staff = async (payload) => {
  try {
    const response = await axios.post(`${Baseurl}api/v1/user/login`, payload);
    Store.addNotification({
      title: "Success !",
      message: "Logged In Successfully",
      type: "success",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }
};

export const eventEnquiry = async (payload) => {
  try {
    const res = await axios.post(`${Baseurl}api/v1/user/sendInquire`, payload);
    const msg = res.data.message;
    Store.addNotification({
      title: "Success !",
      message: msg,
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }
};

export const getCourse = async (setResponse, tillDate) => {
  try {
    const response = await axios.get(
      `${Baseurl}api/v1/user/all?date=${tillDate}`
    );
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const get_about_us = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getAboutUs`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const send_newsletter = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/sendNewLetter`,
      payload
    );
    Store.addNotification({
      title: "Success !",
      message: "Subscribes Successfully",
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "top",
      container: "top-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }
};

export const get_freelance = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/admin/getFreelancing`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const get_terms = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getTerms`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const get_privacy = async (setResponse) => {
  try {
    const response = await axios.get(`${Baseurl}api/v1/static/getPrivacy`);
    const data = response.data.data;
    setResponse(data);
  } catch {}
};

export const reg_user_form = async (payload) => {
  try {
    const response = await axios.post(
      `${Baseurl}api/v1/user/Registerform`,
      payload
    );
    Store.addNotification({
      title: "Success !",
      message: "",
      type: "success",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  } catch (e) {
    const msg = e.response.data.message;
    Store.addNotification({
      title: "Invalid !",
      message: msg,
      type: "danger",
      insert: "bottom",
      container: "bottom-center",
      animationIn: ["animate__animated", "animate__fadeIn"],
      animationOut: ["animate__animated", "animate__fadeOut"],
      dismiss: {
        duration: 1500,
        onScreen: true,
      },
    });
  }
};


export const getDreamData = async (setResponse) => {
  try{
    const response = await axios.get(`${Baseurl}api/v1/admin/dream/getAllYourDreamsQuickly`)
    
    const data = response.data.data
    console.log(data)
    setResponse(data)
  }catch{}
}


export const getBuisness = async (setResponse) => {
  try{

  }catch{
    
  }
}


export {
  getWhoWeAre,
  getPopularJob,
  getTrendingServices,
  getClientReviews,
  getSatffReviews,
  get_event,
  get_sub_event,
  get_faq,
  get_contact_detail,
  register_staff,
  login_staff,
};



