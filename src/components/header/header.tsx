import React, { useEffect, useState } from 'react'
import { BsToggleOff, BsToggleOn } from "react-icons/bs"
import { BiArrowBack } from 'react-icons/bi';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { googleLogout } from "@react-oauth/google";
import userAction from "../../redux/actions/user";

function Header(props) {
  const dispatch = useDispatch();

  function handleChange() {
    props.func(!props.code);
  }

  const history = useHistory();

  const logoutUser = () => {
    googleLogout();
    dispatch(userAction.loginFromGoogle(null));
    dispatch(userAction.setCurrentUser(null));
    history.push("/")
  }

  return (
    <header className="w3-bar w3-top w3-light-green w3-text-black" style={{ height: "40px" }}>
      <div className="w3-bar-item w3-padding">
        <BiArrowBack onClick={logoutUser} />
      </div>
      <div className="w3-bar-item w3-right w3-medium" style={{ alignItems: "center", display: "flex" }} onClick={handleChange}>
        {props.code ? <BsToggleOn /> : <BsToggleOff />}
        <div style={{ whiteSpace: 'pre-wrap', cursor: "default" }}> Enable Code View </div>
      </div>
    </header>
  )
}
export default Header