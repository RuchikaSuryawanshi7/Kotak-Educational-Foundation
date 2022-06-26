import React ,{useRef,useContext} from "react";
import "./Admin_login.css";
import { useParams } from "react-router-dom";
import {loginCall} from "../apiCalls"
import ADMIN from "../../assets/admin-avatar.jpg";
import STUDENT from "../../assets/student-avatar.png";
import MENTOR from "../../assets/mentor-avatar.png";

// import { Button } from '../../components/Button';
import { useStateContext } from '../../context/ContextProvider';

const Admin_login = () => {
  const params = useParams().role;
  const firstname = useRef();
  const password = useRef();
  const { user, isFetching, error, dispatch } = useStateContext();

  const handleSubmit= (e) => {
    // e.preventDefault();
    loginCall(
      { firstname: firstname.current.value, password: password.current.value },
      dispatch
    );

    // console.log(firstname.current.value);
  };
  console.log(user);

  return (
    <div className="login_wrapper">
      <div className="login_inner">
        <div className="login_right">
          <div className="login-right_bg"></div>
          <div className="login-right_top"></div>
        </div>
        <div className="login_left">
          <div className="login_left-top">
            <img src={params === 'admin_login' ? ADMIN : (params === 'mentor_login' ? MENTOR : STUDENT)} alt="" className="login-profile_img" />
          </div>
          <div className="login_left-bottom">
              {
                params === 'admin_login' ? (<h2>ADMIN LOGIN</h2>) 
                : 
                (params === 'mentor_login' ? (<h2>MENTOR LOGIN</h2>) 
                : 
                (<h2>STUDENT LOGIN</h2>))
              }
            <div className="input">
              <input type="text" placeholder=" Username" ref={firstname}/>
            </div>
            <div className="input">
              <input type="password" placeholder="*********" ref={password} minLength="6"/>
            </div>
            {/* <Button
              color="black"
              bgColor="#a4a4d4"
              text="Login"
              borderRadius="0.6rem"
              width="full"
              customFunc={handleSubmit}
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin_login;