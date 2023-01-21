import styles from "./GoalDashboard.module.css";
import Footer from "../components/Footer";
import FrameComponent from "./FrameComponent";
import { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
const GoalDashboard = () => {
  const navigate = useNavigate();
  const [isShowAdd, setIsShowAdd] = useState(false)
  
  const isShow =()=>{
    setIsShowAdd(!isShowAdd)
  }
  const redirectGoalDetailsPage =()=>{
    navigate("/goal-details", { replace: true });
  }
  return (
    <div className={styles.goalDashboard}>
      <div className={styles.carddisplaycustompaymentSuWrapper}>
        <div className={styles.carddisplaycustompaymentSu}>
          <div className={styles.listFrame}>
            <div className={styles.labelTextWrapper}>
              <div className={styles.labelText}>SenT To</div>
            </div>
            <div className={styles.listItemrecent}>
              <img className={styles.bankThumbnailIcon} alt="" />
              <div className={styles.labelParent}>
                <b className={styles.label}>Ledger Balance</b>
                <div className={styles.label1}>****121211</div>
              </div>
              <div className={styles.labelTextParent}>
                <div className={styles.labelText1}>Amount</div>
                <b className={styles.label2}>₹ 23,49,422</b>
              </div>
              <img className={styles.remixIconslinesystemarrow} alt="" />
            </div>
            <div className={styles.labelTextGroup}>
              <div className={styles.labelText2}>Payment Details</div>
              <div className={styles.chip}>
                <div className={styles.bodyText}>
                  Remarks and Tags site here
                </div>
              </div>
            </div>
            <div className={styles.listLabel01}>
              <div className={styles.labelText3}>Equity:</div>
              <div className={styles.chip1}>
                <div className={styles.bodyText1}>Success</div>
              </div>
              <div className={styles.labelText4}>Amount</div>
              <div className={styles.headingParent}>
                <div className={styles.heading}>₹11,40,000</div>
                <div className={styles.bodyText2}>IMPS | Charges: ₹5</div>
              </div>
            </div>
            <div className={styles.listLabel01}>
              <div className={styles.labelText3}>commodity:</div>
              <div className={styles.chip1}>
                <div className={styles.bodyText1}>Success</div>
              </div>
              <div className={styles.labelText4}>Amount</div>
              <div className={styles.headingParent}>
                <div className={styles.heading}> ₹12,09,422</div>
                <div className={styles.bodyText2}>IMPS | Charges: ₹5</div>
              </div>
            </div>
            <div className={styles.listLabel03}>
              <div className={styles.labelText7}>Label 3:</div>
              <div className={styles.chip3}>
                <div className={styles.bodyText1}>Success</div>
              </div>
              <div className={styles.labelText8}>Amount</div>
              <div className={styles.headingContainer}>
                <div className={styles.heading2}>
                  Inward Remitance- Allowed FCY
                </div>
                <div className={styles.bodyText2}>IMPS | Charges: ₹5</div>
              </div>
            </div>
            <div className={styles.listLabel04}>
              <div className={styles.labelText9}>Label 4:</div>
              <div className={styles.chip4}>
                <div className={styles.bodyText}>Remarks</div>
              </div>
            </div>
          </div>
          <div className={styles.divider}>
            <div className={styles.dividerStroke} />
          </div>
          <div className={styles.textbuttonFrame}>
            <b className={styles.buttonText}>Text Button</b>
          </div>
        </div>
      </div>
      <div className={styles.fab}>
        <img
          className={styles.remixIconsfillsystemaddFi}
          alt=""
          src="../img/remixiconsfillsystemaddfill.svg"
        />
        <a onClick={isShow} className={styles.buttonText1}>Add Goals  </a>
      </div>
      {/* <div className={styles.bottomNavigationbase}>
        <div className={styles.bottomNavigation}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../img/remixiconsfillsystemstarfill4.svg"
            />
            <div className={styles.bodyText}>Dashboard</div>
          </div>
        </div>
        <div className={styles.bottomNavigation}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../img/remixiconsfillsystemstarfill5.svg"
            />
            <div className={styles.bodyText}>Activity</div>
          </div>
        </div>
        <div className={styles.bottomNavigation2}>
          <div className={styles.indicatorFrame2}>
            <div className={styles.selectionIndicator} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../img/remixiconsfillsystemstarfill6.svg"
            />
            <div className={styles.bodyText}>Goals</div>
          </div>
        </div>
        <div className={styles.bottomNavigation3}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../img/remixiconsfillsystemstarfill7.svg"
            />
            <div className={styles.bodyText}>Explore</div>
          </div>
        </div>
      </div> */}
      <div><Footer></Footer></div>
      <div className={styles.greetingTextParent}>
        <div className={styles.greetingText}>
          <div className={styles.ongoingGoals}>Ongoing Goals</div>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.frameParent}>
            <div className={styles.frameGroup}>
              <div className={styles.airForceSneakersWrapper}>
                <div className={styles.airForceSneakers}>
                  Air force Sneakers
                </div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.frameDiv}>
                  <div className={styles.parent}>
                    <div className={styles.div}>₹8,000</div>
                    <div className={styles.goalAchieved}>0% goal achieved</div>
                  </div>
                  <img
                    className={styles.frameChild}
                    alt=""
                    src="../img/group-39201.svg"
                  />
                </div>
                <div className={styles.chipParent}>
                  <div className={styles.chip5}>
                    <div className={styles.bodyText8}>₹0 achieved</div>
                  </div>
                  <div className={styles.chip6}>
                    <div className={styles.bodyText8}>₹8,000 pending</div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.textButton}>
              <a onClick={redirectGoalDetailsPage} className={styles.buttonText2}>View details</a>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.goalDashboardChild} />
      <img className={styles.maskGroupIcon} alt="" src="../img/mask-group.svg" />
      <div className={styles.button}>
        <b className={styles.bodyText}>How it works?</b>
        <img
          className={styles.slideshowBlack24dp1Icon}
          alt=""
          src="../img/slideshow-black-24dp-1.svg"
        />
      </div>
      <div className={styles.appBar}>
        <img
          className={styles.iconfeathermenu}
          alt=""
          src="../img/iconfeathermenu.svg"
        />
        <div className={styles.greetingTextGroup}>
          <b className={styles.greetingText1}>Goals</b>
          <div className={styles.avatar}>
            <img
              className={styles.avatarFrameIcon}
              alt=""
              src="../img/avatar-frame1.svg"
            />
          </div>
        </div>
        <img
          className={styles.iconfeatherbell}
          alt=""
          src="../img/iconfeatherbell1.svg"
        />
        <img
          className={styles.iconfeathermessageSquare}
          alt=""
          src="../img/iconfeathermessagesquare.svg"
        />
      </div>
      {/* <div className={styles.nativeandroidstatusBar}>
        <div className={styles.statusBardark}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="../img/background.svg"
          />
          <div className={styles.div1}>11:11</div>
          <img className={styles.pxIcon} alt="" src="../img/24px.svg" />
          <img className={styles.pxIcon1} alt="" src="../img/24px.svg" />
          <img className={styles.pxIcon2} alt="" src="../img/24px.svg" />
          <img className={styles.pxIcon3} alt="" src="../img/24px.svg" />
          <img className={styles.pxIcon4} alt="" src="../img/24px.svg" />
          <img className={styles.pxIcon5} alt="" src="../img/24px.svg" />
          <div className={styles.carrierName}>FIGMA</div>
          <img
            className={styles.signalWifi4BarIcon}
            alt=""
            src="../img/signal-wifi-4-bar.svg"
          />
          <img
            className={styles.signalCellular4BarIcon}
            alt=""
            src="../img/signal-cellular-4-bar.svg"
          />
          <img
            className={styles.batteryStdIcon}
            alt=""
            src="../img/battery-std.svg"
          />
        </div>
      </div> */}
      <div >
        {
            isShowAdd===true ? <FrameComponent isShowAdd={isShowAdd}></FrameComponent> : <p></p>
        } 
      </div>
    </div>
  );
};

export default GoalDashboard;
