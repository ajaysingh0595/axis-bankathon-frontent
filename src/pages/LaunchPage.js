import styles from "./LaunchPage.module.css";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';

const LaunchPage = () => {
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(()=>{
      navigate("/login", { replace: true });
    },3000)
  },[])
  return (
    <div><img src="launchpagenew.svg"></img></div>
    // <div className={styles.launchPage}>
    //   <img src="launchpage.svg"></img>
    //   {/* <img className={styles.image20Icon} alt="" src="../image-20@2x.png" />
    //   <div className={styles.nativeandroidstatusBar}>
    //     <div className={styles.statusBardark}>
    //       <img
    //         className={styles.backgroundIcon}
    //         alt=""
    //         src="../background3.svg"
    //       />
    //       <div className={styles.div}>11:11</div>
    //       <img className={styles.pxIcon} alt="" src="../24px.svg" />
    //       <img className={styles.pxIcon1} alt="" src="../24px.svg" />
    //       <img className={styles.pxIcon2} alt="" src="../24px.svg" />
    //       <img className={styles.pxIcon3} alt="" src="../24px.svg" />
    //       <img className={styles.pxIcon4} alt="" src="../24px.svg" />
    //       <img className={styles.pxIcon5} alt="" src="../24px.svg" />
    //       <div className={styles.carrierName}>FIGMA</div>
    //       <img
    //         className={styles.signalWifi4BarIcon}
    //         alt=""
    //         src="../signal-wifi-4-bar.svg"
    //       />
    //       <img
    //         className={styles.signalCellular4BarIcon}
    //         alt=""
    //         src="../signal-cellular-4-bar.svg"
    //       />
    //       <img
    //         className={styles.batteryStdIcon}
    //         alt=""
    //         src="../battery-std.svg"
    //       />
    //     </div>
    //   </div> */}
    //   {/* <b className={styles.kidsWallet}>
    //     <p className={styles.kids}>COSMOS</p>
    //     <p className={styles.wallet}></p>
    //   </b>
    //   <img className={styles.image22Icon} alt="" src="../image-22@2x.png" />
    //   <img className={styles.image23Icon} alt="" src="../image-23@2x.png" />
    //   <img className={styles.image21Icon} alt="" src="../image-21@2x.png" /> */}
    // </div>
  );
};

export default LaunchPage;
