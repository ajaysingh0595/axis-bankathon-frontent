import styles from "./Activities.module.css";
import Footer from "../components/Footer";
const Activities = () => {
  return (
    <div className={styles.activitiesParent}>
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
      <div className={styles.tabs}>
        <div className={styles.tabsBase}>
          <div className={styles.wrapper}>
            <div className={styles.tabText}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="../leading-icon.svg"
              />
              <div className={styles.tabName}>Budget</div>
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
              <div className={styles.tabName}>Spends</div>
            </div>
          </div>
          <div className={styles.selectionIndicatorContainer1}>
            <div className={styles.selectionIndicator1} />
          </div>
        </div>
        <div className={styles.tabsBase}>
          <div className={styles.wrapper}>
            <div className={styles.tabText}>
              <img
                className={styles.leadingIcon}
                alt=""
                src="../leading-icon2.svg"
              />
              <div className={styles.tabName}>Learnings</div>
            </div>
          </div>
          <div className={styles.selectionIndicatorContainer}>
            <div className={styles.selectionIndicator} />
          </div>
        </div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.frameDiv}>
              <div className={styles.headingWrapper}>
                <b className={styles.heading3}>{`March `}</b>
              </div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowupsline.svg"
              />
            </div>
            <b className={styles.heading4}>₹30,000</b>
          </div>
          <div className={styles.divider1}>
            <div className={styles.dividerStroke1} />
          </div>
        </div>
        <div className={styles.frameParent1}>
          <div className={styles.investmentValueCardParent}>
            <div className={styles.investmentValueCard}>
              <div className={styles.cardThumbnailIcons}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinefinancepricetag3line.svg"
                />
              </div>
              <div className={styles.heading5}>Department Store</div>
              <div className={styles.headingParent1}>
                <div className={styles.payments}>₹327.76</div>
                <div className={styles.chip5}>
                  <div className={styles.bodyText}>High spends</div>
                </div>
              </div>
              <div className={styles.chevronFrame}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightsline1.svg"
                />
              </div>
            </div>
            <div className={styles.paymentsParent}>
              <div className={styles.payments}>Payments</div>
              <div className={styles.parent}>
                <div className={styles.payments}>₹327.76</div>
                <img
                  className={styles.remixIconsfillsystemstarF}
                  alt=""
                  src="../remixiconslinesystemarrowdownsline.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.listItemtransactionParent}>
            <div className={styles.listItemtransaction}>
              <div className={styles.textFrameWrapper}>
                <div className={styles.textFrame}>
                  <div className={styles.text}>Logistics</div>
                </div>
              </div>
              <div className={styles.remixIconslinesystemarrowParent}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightupline.svg"
                />
                <div className={styles.text}>₹3,000</div>
              </div>
            </div>
            <div className={styles.listItemtransaction}>
              <div className={styles.textFrameContainer}>
                <div className={styles.textFrame}>
                  <div className={styles.text}>Mobile Bill Payments</div>
                </div>
              </div>
              <div className={styles.remixIconslinesystemarrowParent}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightupline1.svg"
                />
                <div className={styles.text}>₹2,000</div>
              </div>
            </div>
            <div className={styles.listItemtransaction}>
              <div className={styles.textFrameWrapper}>
                <div className={styles.textFrame}>
                  <div className={styles.text}>Bill/Utility Payments</div>
                </div>
              </div>
              <div className={styles.remixIconslinesystemarrowParent}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightupline2.svg"
                />
                <div className={styles.text}>₹3,000</div>
              </div>
            </div>
            <div className={styles.listItemtransaction}>
              <div className={styles.textFrameWrapper}>
                <div className={styles.textFrame}>
                  <div className={styles.text}>Fuel</div>
                </div>
              </div>
              <div className={styles.remixIconslinesystemarrowParent}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightupline3.svg"
                />
                <div className={styles.text}>₹1,000</div>
              </div>
            </div>
            <div className={styles.listItemtransaction}>
              <div className={styles.textFrameWrapper}>
                <div className={styles.textFrame}>
                  <div className={styles.text}>Wallet Payments</div>
                </div>
              </div>
              <div className={styles.remixIconslinesystemarrowParent}>
                <img
                  className={styles.remixIconslinefinanceprice}
                  alt=""
                  src="../remixiconslinesystemarrowrightupline4.svg"
                />
                <div className={styles.text}>₹1,000</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons1}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinefinanceticket2line.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline2.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Entertainment</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹327.76</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline1.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons2}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinemapplaneline.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline3.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Travel</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹5000</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline2.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons3}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslineotherscake3line.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline4.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Food</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹445.10</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline3.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons4}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinefinanceshoppingbagline.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline5.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Shopping</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹445.10</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline4.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons5}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinedocumentbookopenline.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline6.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Stationery</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹445.10</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline5.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons6}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinefinancefundsline.svg"
              />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img
                className={styles.remixIconslinefinanceprice}
                alt=""
                src="../remixiconslinesystemarrowrightsline7.svg"
              />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Fund Transfer</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹445.10</div>
              <img
                className={styles.remixIconsfillsystemstarF}
                alt=""
                src="../remixiconslinesystemarrowdownsline6.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.investmentValueCardParent}>
          <div className={styles.investmentValueCard}>
            <div className={styles.cardThumbnailIcons7}>
              <img className={styles.remixIconslinefinanceprice} alt="" />
            </div>
            <div className={styles.heading5}>Department Store</div>
            <div className={styles.headingParent1}>
              <div className={styles.payments}>₹327.76</div>
              <div className={styles.chip5}>
                <div className={styles.bodyText}>High spends</div>
              </div>
            </div>
            <div className={styles.chevronFrame}>
              <img className={styles.remixIconslinefinanceprice} alt="" />
            </div>
          </div>
          <div className={styles.paymentsParent}>
            <div className={styles.payments}>Others</div>
            <div className={styles.parent}>
              <div className={styles.payments}>₹445.10</div>
              <img className={styles.remixIconsfillsystemstarF} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.activitiesParentInner}>
        <div className={styles.frameWrapper}>
          <div className={styles.frameWrapper}>
            <div className={styles.frameParent2}>
              <div className={styles.rohansCurrentMonthlySpendParent}>
                <div className={styles.rohansCurrentMonthly}>
                  Rohan’s CURrent monthly spend
                </div>
                <div className={styles.frame}>
                  <b className={styles.b}>₹1,000</b>
                </div>
              </div>
              <div className={styles.chip13}>
                <div className={styles.bodyText}>
                  Avg. monthly spend is ₹1,200
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className={styles.bottomNavigationbase}>
        <div className={styles.bottomNavigation}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator3} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../remixiconsfillsystemstarfill4.svg"
            />
            <div className={styles.bodyText}>Dashboard</div>
          </div>
        </div>
        <div className={styles.bottomNavigation1}>
          <div className={styles.indicatorFrame1}>
            <div className={styles.selectionIndicator3} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../remixiconsfillsystemstarfill5.svg"
            />
            <div className={styles.bodyText}>Activity</div>
          </div>
        </div>
        <div className={styles.bottomNavigation2}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator3} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../remixiconsfillsystemstarfill6.svg"
            />
            <div className={styles.bodyText}>Funds</div>
          </div>
        </div>
        <div className={styles.bottomNavigation2}>
          <div className={styles.indicatorFrame}>
            <div className={styles.selectionIndicator3} />
          </div>
          <div className={styles.labelFrame}>
            <img
              className={styles.remixIconsfillsystemstarF}
              alt=""
              src="../remixiconsfillsystemstarfill7.svg"
            />
            <div className={styles.bodyText}>More</div>
          </div>
        </div>
      </div> */}
       <div>
        <Footer></Footer>
      </div>
      <div className={styles.appBar}>
        <img
          className={styles.iconfeathermenu}
          alt=""
          src="../iconfeathermenu.svg"
        />
        <div className={styles.avatar}>
          <img
            className={styles.avatarFrameIcon}
            alt=""
            src="../avatar-frame1.svg"
          />
        </div>
        {/* <div className={styles.search}>
          <div className={styles.mainComponentSearch}>
            <img
              className={styles.remixIconslinesystemsearch}
              alt=""
              src="../remixiconslinesystemsearchline.svg"
            />
            <div className={styles.searchText}>Search...</div>
            <img
              className={styles.iconfeathermenu}
              alt=""
              src="../remixiconsfillsystemclosefill.svg"
            />
            <div className={styles.avatar1}>
              <img
                className={styles.avatarFrameIcon1}
                alt=""
                src="../avatarframe.svg"
              />
            </div>
          </div>
        </div> */}
        <img
          className={styles.iconfeathermenu}
          alt=""
          src="../iconfeatherbell.svg"
        />
        <img
          className={styles.iconfeathermenu}
          alt=""
          src="../iconfeathermessagesquare.svg"
        />
      </div>
      {/* <div className={styles.nativeandroidstatusBar}>
        <div className={styles.statusBardark}>
          <img
            className={styles.backgroundIcon}
            alt=""
            src="../background.svg"
          />
          <div className={styles.div13}>11:11</div>
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

export default Activities;
