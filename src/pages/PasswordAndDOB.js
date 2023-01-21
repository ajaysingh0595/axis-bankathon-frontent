import styles from "./PasswordAndDOB.module.css";
import { useState,useEffect } from "react";
import auth from "../service/auth"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { authCheck } from "../helper/auth"
const PasswordAndDOB = () => {
  const navigate = useNavigate();
  
  const redirectPage = () => {
    navigate('/home', { replace: true });
  }

  useEffect(()=>{
    // authCheck();
  },[])
 
  const [username, setUsername] = useState("")
  const [password, setpassword] = useState("")
  const tost_config={
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light",
    }
  const loginFun=(evn)=>{
    if(!username){
      toast('Please enter username', tost_config);
    }else if(!password){
      toast('Please enter password', tost_config);
    }else{
      redirectPage();
      // auth.loginService({username,password}).then(response => {
      //   console.log(response)
      //   const token  =  response.data.token;
      //   localStorage.setItem("token", token);
      //   localStorage.setItem("userdata", JSON.stringify(response.data));
      //   redirectPage();
      // }).catch((e)=>{
      //   toast('invalid username & password ', tost_config);
      // })
  }
  }
 
  const setPasswordFun=(pass)=>{
    setpassword(pass)
  }

  const setUsernameFun=(user)=>{
    setUsername(user)
  }
  return (
    <div className={styles.passwordAndDob}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        />
{/* Same as */}
    <ToastContainer />  
      {/* <div className={styles.nativeandroidstatusBar}>
        <div className={styles.statusBardark}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="../background3.svg"
          />
          <div className={styles.div}>11:11</div>
          <img className={styles.pxIcon} alt="" src="../24px.svg" />
          <img className={styles.pxIcon1} alt="" src="../24px.svg" />
          <img className={styles.pxIcon2} alt="" src="../24px.svg" />
          <img className={styles.pxIcon3} alt="" src="../24px.svg" />
          <img className={styles.pxIcon4} alt="" src="../24px.svg" />
          <img className={styles.pxIcon5} alt="" src="../24px.svg" />
          <div className={styles.carrierName}>FIGMA</div>
          <img
            className={styles.signalWifi4BarIcon}
            alt=""
            src="../signal-wifi-4-bar.svg"
          />
          <img
            className={styles.signalCellular4BarIcon}
            alt=""
            src="../signal-cellular-4-bar.svg"
          />
          <img
            className={styles.batteryStdIcon}
            alt=""
            src="../battery-std.svg"
          />
        </div>
      </div> */}
      <div className={styles.appBar}>
        <img
          className={styles.iconfeatherarrowLeft}
          alt=""
          src="../iconfeatherarrowleft.svg"
        />
        <b className={styles.headerText}>Easy Access- Savings A/c</b>
      </div>
      <b className={styles.verifyYourDetails}>Verify your details</b>
      <div className={styles.weAskThe}>
        We ask the below information to keep your account safe and secure
      </div>
      
      {/* <div className={styles.button}>
    
        <b className={styles.buttonText}>Login
       
        </b>
      </div> */}
      <div>  <button onClick={loginFun} className="login-button">Login</button></div>
      <div className={styles.textButton}>
        <b className={styles.buttonText1}>Forgot password?</b>
      </div>
      <div className={styles.inputField}>
        <div className={styles.boxInputStyleBoxInac}>
          <div className={styles.inputMasterBox}>
            <div className={styles.inputMasterBox}>
              <div className={styles.labelFrame}>
                <div className={styles.labelIcon}>
                  <b className={styles.label}>Date of Birth</b>
                  <img
                    className={styles.remixIconslinesystemerror}
                    alt=""
                    src="../remixiconslinesystemerrorwarningline.svg"
                  />
                </div>
                <div className={styles.frameHelperText}>
                  <div className={styles.helperText}>Secondary text</div>
                </div>
              </div>
              <div className={styles.inputFrame}>
                <div className={styles.leftContent}>
                  <div className={styles.textCursor}>
                    <div className={styles.cursor}>
                      <div className={styles.rectangle} />
                    </div>
                    <div className={styles.buttonText}>DD/MM/YYYY</div>
                  </div>
                </div>
                <img
                  className={styles.remixIconslinesystemarrow}
                  alt=""
                  src="../remixiconslinesystemarrowdownsline.svg"
                />
              </div>
            </div>
            <div className={styles.iconHelperText}>
              <img
                className={styles.iconserror24px}
                alt=""
                src="../iconserror-24px.svg"
              />
              <div className={styles.frameHelperText1}>
                <div className={styles.helperText}>Helper text</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.textField}>
        <div className={styles.boxInputStyleBoxInac}>
          <div className={styles.labelIcon}>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelText}>Account Password</div>
            </div>
            
            <div className={styles.tooltipIconContainer}>
              <img
                className={styles.tooltipIcon}
                alt=""
                src="../tooltip-icon4.svg"
              />
            </div>
          </div>
          <div> <input type="password" onChange={event => setPasswordFun(event.target.value)} placeholder="Enter Password"></input> </div>
          {/* <div className={styles.helperTextContainer}>
            <div className={styles.helperText2}>{`Label support text `}</div>
          </div> */}
        </div>
        {/* <div className={styles.input}>
          <div className={styles.inputTextContainer}>
            <div className={styles.buttonText}>Enter Password</div>
          </div>
          
          <div className={styles.trailingIconContainer}>
            <img
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../trailing-icon3.svg"
            />
          </div>
        </div> */}
      </div>
      {/* <img
        className={styles.galleryImg51Icon}
        alt=""
        src="../gallery-img5-1@2x.png"
      /> */}
      <div className={styles.tabs}>
        <div className={styles.tabsBase}>
          <div className={styles.wrapper}>
            <div className={styles.tabText}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="../leading-icon.svg"
              />
              <div className={styles.tabName}>Guardian</div>
            </div>
          </div>
          <div className={styles.selectionIndicatorContainer}>
            <div className={styles.selectionIndicator} />
          </div>
        </div>
        <div className={styles.tabsBase1}>
          <div className={styles.wrapper1}>
            <div className={styles.tabText}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="../leading-icon1.svg"
              />
              <div className={styles.tabName}>Child</div>
            </div>
          </div>
          <div className={styles.selectionIndicatorContainer1}>
            <div className={styles.selectionIndicator1} />
          </div>
        </div>
      </div>
      <div className={styles.textField1}>
        <div className={styles.boxInputStyleBoxInac}>
          <div className={styles.labelIcon}>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelText}>Email ID or Mobile Number</div>
            </div>
            <div className={styles.tooltipIconContainer}>
              <img
                className={styles.tooltipIcon}
                alt=""
                src="../tooltip-icon5.svg"
              />
            </div>
          </div>
          <div className={styles.helperTextContainer}>
            <div className={styles.helperText2}>{`Label support text `}</div>
          </div>
        </div>
        <div> <input type="text" onChange={event => setUsernameFun(event.target.value)} placeholder="Enter Email ID / Mobile Number"></input> </div>
        {/* <div className={styles.input}>
          <div className={styles.inputTextContainer}>
            <div className={styles.buttonText}>
             
              Enter Email ID / Mobile Number
            </div>
          </div>
          <div className={styles.trailingIconContainer1}>
            <img
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../trailing-icon4.svg"
            />
          </div>
        </div> */}
      </div>
      <div className={styles.textButton1}>
        <b className={styles.buttonText1}>Open Account</b>
      </div>
      <div className={styles.dontHaveAn}>Dont have an account?</div>
    </div>
  );
};

export default PasswordAndDOB;
