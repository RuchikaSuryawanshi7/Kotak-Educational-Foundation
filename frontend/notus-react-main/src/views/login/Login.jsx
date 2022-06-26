import React from "react";
import "./login.css";
import { NavLink } from "react-router-dom";

import { roles } from "../../data/dummy";

const Login = () => {
  return (
    <div className="login_wrapper">
      <div className="login_inner">
        <div className="login_right">
          <div className="login-right_bg"></div>
          <div className="login-right_top"></div>
        </div>
        <div className="login_left">
          <div className="login_left-inner">
            {roles.map((item) => (
              <div key={item.title} className="login_profiles">
                <NavLink to={`/${item.link}`} key={item.title}>
                  <img src={item.image} alt="" className="login-profile_img" />
                  <div className="login_title">
                    <h3>{item.title}</h3>
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
