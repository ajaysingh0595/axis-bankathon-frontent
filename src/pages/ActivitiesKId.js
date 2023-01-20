import styles from "./ActivitiesKId.module.css";
import Footer from "../components/Footer";
import { useNavigate } from 'react-router-dom';
const ActivitiesKId = () => {
  const navigate = useNavigate();
  const redirectAddFundPage = () => {
       navigate("/add-funds", { replace: true });
  }  
  const goBack = () => {
    navigate("/", { replace: true });
}  
  return (
    <div className={styles.activitiesKid}>
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
      <div className={styles.frameParent}>
        <div className={styles.airForceSneakersParent}>
          <b className={styles.airForceSneakers}>Air force Sneakers</b>
          <div className={styles.textButton}>
            <a className={styles.buttonText1} onClick={redirectAddFundPage}>add funds</a>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.parent}>
              <div className={styles.div}>₹8,000</div>
              <div className={styles.goalAchieved}>0% goal achieved</div>
            </div>
            <img
              className={styles.frameChild}
              alt=""
              src="../group-39201.svg"
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
          <div className={styles.remixIconslinesystemtimeLParent}>
            <img
              className={styles.remixIconslinesystemtimeL}
              alt=""
              src="../remixiconslinesystemtimeline.svg"
            />
            <div className={styles.sAgo}>1s ago</div>
          </div>
        </div>
        <div className={styles.suggestionsParent}>
          <div className={styles.suggestions}>Suggestions</div>
          <div className={styles.cardclickablecustomnudgeParent}>
            <div className={styles.cardclickablecustomnudge}>
              <div className={styles.chip7}>
                <div className={styles.bodyText8}>Shopping</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.cardThumbnailIcons}>
                  <img
                    className={styles.remixIconslineothershandba}
                    alt=""
                    src="../remixiconslineothershandbagline.svg"
                  />
                </div>
                <div className={styles.subContentFrame}>
                  <b className={styles.heading3}>Limit shopping expenses</b>
                  <div className={styles.bodyFrame}>
                    <div className={styles.bodyText11}>
                      You can save upto ₹500 if you shop less this month
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.cardclickablecustomnudge}>
              <div className={styles.chip7}>
                <div className={styles.bodyText8}>Learn</div>
              </div>
              <div className={styles.frameContainer}>
                <div className={styles.cardThumbnailIcons}>
                  <img
                    className={styles.remixIconslineothershandba}
                    alt=""
                    src="../remixiconslinedocumentbookopenline.svg"
                  />
                </div>
                <div className={styles.subContentFrame}>
                  <b className={styles.heading3}>Earn points</b>
                  <div className={styles.bodyFrame}>
                    <div className={styles.bodyText11}>
                      You can learn 2 modules this month to earn points and save
                      up on your expenses
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.textButton1}>
          <b className={styles.buttonText1}>break Goal</b>
        </div>
      </div>
      <div className={styles.appBar}>
        <img
          className={styles.iconfeatherarrowLeft}
          alt=""
          src="../iconfeatherarrowleft.svg"
        />
        <b className={styles.headerText}>Easy Access- Savings A/c</b>
        <b className={styles.headerText1}>Goal Details</b>
      </div>
      {/* <div className={styles.bottomNavigationbase}>
        <div className={styles.bottomNavigation}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../remixiconsfillsystemstarfill4.svg"
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
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../remixiconsfillsystemstarfill5.svg"
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
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../remixiconsfillsystemstarfill6.svg"
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
              className={styles.iconfeatherarrowLeft}
              alt=""
              src="../remixiconsfillsystemstarfill7.svg"
            />
            <div className={styles.bodyText}>Explore</div>
          </div>
        </div>
      </div> */}
       <div>
        <Footer></Footer>
      </div>
      {/* <div className={styles.nativeandroidstatusBar}>
        <div className={styles.statusBardark}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="../background.svg"
          />
          <div className={styles.div1}>11:11</div>
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
    </div>
  );
};

export default ActivitiesKId;
