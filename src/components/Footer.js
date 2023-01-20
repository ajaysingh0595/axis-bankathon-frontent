import styles from "./Footer.module.css";
import { useNavigate } from 'react-router-dom';
import { useState,useEffect } from "react";
const Footer = () => {
    // useEffect(()=>{
    //     // authCheck();
    //   },[])
    const navigate = useNavigate();
    const redirectActivityPage = () => {
         navigate("/activities", { replace: true });
    }  
    const redirectDashPage = () => {
        navigate("/home", { replace: true });
   } 
    const redirectGoalPage =()=>{
        navigate("/goal", { replace: true });
    }
    
  return (
    <div className={styles.bottomNavigationbase}>
    <div className={styles.bottomNavigation}>
      <div className={styles.indicatorFrame}>
        <div className={styles.selectionIndicator} />
      </div>
      <div className={styles.labelFrame} onClick={redirectDashPage}>
        <img
          className={styles.remixIconsfillsystemstarF}
          alt=""
          src="../remixiconsfillsystemstarfill.svg"
        />
        <div className={styles.bodyText}>Dashboard</div>
      </div>
    </div>
    <div className={styles.bottomNavigation1}>
      <div className={styles.indicatorFrame1}>
        <div className={styles.selectionIndicator} />
      </div>
      <div className={styles.labelFrame} onClick={redirectActivityPage}>
        <img
          className={styles.remixIconsfillsystemstarF}
          alt=""
          src="../remixiconsfillsystemstarfill1.svg"
        />
        <div className={styles.bodyText} >Activity</div>
      </div>
    </div>
    <div className={styles.bottomNavigation1}>
      <div className={styles.indicatorFrame1}>
        <div className={styles.selectionIndicator} />
      </div>
      <div className={styles.labelFrame} onClick={redirectGoalPage}>
     
        <img
          className={styles.remixIconsfillsystemstarF}
          alt=""
          src="../remixiconsfillsystemstarfill2.svg"
        />
        <div className={styles.bodyText}>Goals</div>
        
      </div>
    </div>
    <div className={styles.bottomNavigation1}>
      <div className={styles.indicatorFrame1}>
        <div className={styles.selectionIndicator} />
      </div>
      <div className={styles.labelFrame}>
        <img
          className={styles.remixIconsfillsystemstarF}
          alt=""
          src="../remixiconsfillsystemstarfill3.svg"
        />
        <div className={styles.bodyText}>Explore</div>
      </div>
    </div>
  </div>
  );
};

export default Footer;
