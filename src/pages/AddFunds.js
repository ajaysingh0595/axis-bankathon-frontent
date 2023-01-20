import styles from "./AddFunds.module.css";
import { useNavigate } from 'react-router-dom';

 
const AddFunds = () => {
  const navigate = useNavigate();
  const goBack = () => {
    navigate("/goal", { replace: true });
   }  
  return (
    <div className={styles.addFunds}>
      <div className={styles.nativeandroidstatusBar}>
        <div className={styles.statusBardark}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="../background.svg"
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
      </div>
      <div className={styles.textField}>
        <div className={styles.labelWrapper}>
          <div className={styles.label}>
            <div className={styles.labelTextContainer}>
              <div className={styles.labelText}>Enter Amount</div>
            </div>
            <div className={styles.tooltipIconContainer}>
              <img
                className={styles.tooltipIcon}
                alt=""
                src="../tooltip-icon3.svg"
              />
            </div>
          </div>
          <div className={styles.helperTextContainer}>
            <div className={styles.helperText}>
              Create your own or use suggested username
            </div>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.inputTextContainer}>
            <div className={styles.inputText}>
              <span>|</span>
              <span className={styles.span}>₹0</span>
            </div>
          </div>
          <div className={styles.trailingIconContainer}>
            <img
              className={styles.remixIconslinesystemeyeLi}
              alt=""
              src="../remixiconslinesystemeyeline.svg"
            />
          </div>
        </div>
      </div>
      <div className={styles.cardexpandableinteractive}>
        <div className={styles.cardexpandableinteractiveInner}>
          <div className={styles.labelTextParent}>
            <div className={styles.labelText1}>Available pocket money</div>
            <div className={styles.scripLtp}>
              <b className={styles.b}>₹5,000.00</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.appBar} onClick={goBack}>
        <img
          className={styles.remixIconslinesystemeyeLi}
          alt=""
          src="../iconfeatherarrowleft.svg"
        />
        <b className={styles.headerText}>Easy Access- Savings A/c</b>
        <a className={styles.headerText1}>Add Funds</a>
      </div>
      <div className={styles.inputHelperGroup}>
        <div className={styles.wrapper}>
          <b className={styles.b1}>+ ₹ 500</b>
        </div>
        <div className={styles.wrapper}>
          <b className={styles.b1}>+ ₹ 1,000</b>
        </div>
        <div className={styles.wrapper}>
          <b className={styles.b1}>+ ₹ 3,000</b>
        </div>
      </div>
      <div className={styles.buttonGroup}>
        <div className={styles.button}>
          <b className={styles.buttonText}>Add</b>
        </div>
      </div>
    </div>
  );
};

export default AddFunds;
