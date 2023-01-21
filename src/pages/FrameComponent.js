import styles from "./FrameComponent.module.css";

const FrameComponent = ({isShowAdd}) => {
  return (
    
    <div className={styles.closeButtonParent}>
      <div className={styles.closeButton}>
        <img
          className={styles.remixIconsfillsystemclose}
          alt=""
          src="../remixiconsfillsystemclosefill.svg"
        />
      </div>
      <div className={styles.bottomSheet}>
        <div className={styles.frameHeadingToggleParent}>
          <div className={styles.frameHeadingToggle}>
            <div className={styles.frameHeadingWrapper}>
              <div className={styles.frameHeading}>
                <b className={styles.addGoal}>Add Goal</b>
                <div className={styles.onceCreatedGoals}>
                  Once created, goals cannot be edited
                </div>
              </div>
            </div>
          </div>
          <div className={styles.frameSpendLimit}>
            <div className={styles.textField}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>
                  <div className={styles.labelTextContainer}>
                    <div className={styles.labelText}>Title</div>
                  </div>
                  <div className={styles.tooltipIconContainer}>
                    <img
                      className={styles.tooltipIcon}
                      alt=""
                      src="../tooltip-icon.svg"
                    />
                  </div>
                </div>
                <div className={styles.helperTextContainer}>
                  <div
                    className={styles.helperText}
                  >{`Label support text `}</div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.inputTextContainer}>
                  <div className={styles.inputText}>
                    Enter a name for your goal
                  </div>
                </div>
                <div className={styles.trailingIconContainer}>
                  <img
                    className={styles.remixIconsfillsystemclose}
                    alt=""
                    src="../trailing-icon.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textField}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>
                  <div className={styles.labelTextContainer}>
                    <div className={styles.labelText}>Description</div>
                  </div>
                  <div className={styles.tooltipIconContainer}>
                    <img
                      className={styles.tooltipIcon}
                      alt=""
                      src="../tooltip-icon1.svg"
                    />
                  </div>
                </div>
                <div className={styles.helperTextContainer}>
                  <div
                    className={styles.helperText}
                  >{`Label support text `}</div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.inputTextContainer}>
                  <div className={styles.inputText}>Describe your goal</div>
                </div>
                <div className={styles.trailingIconContainer}>
                  <img
                    className={styles.remixIconsfillsystemclose}
                    alt=""
                    src="../trailing-icon1.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.textField}>
              <div className={styles.labelWrapper}>
                <div className={styles.label}>
                  <div className={styles.labelTextContainer}>
                    <div className={styles.labelText}>Amount</div>
                  </div>
                  <div className={styles.tooltipIconContainer}>
                    <img
                      className={styles.tooltipIcon}
                      alt=""
                      src="../tooltip-icon2.svg"
                    />
                  </div>
                </div>
                <div className={styles.helperTextContainer}>
                  <div
                    className={styles.helperText}
                  >{`Label support text `}</div>
                </div>
              </div>
              <div className={styles.input}>
                <div className={styles.inputTextContainer}>
                  <div className={styles.inputText}>₹0</div>
                </div>
                <div className={styles.trailingIconContainer}>
                  <img
                    className={styles.remixIconsfillsystemclose}
                    alt=""
                    src="../trailing-icon2.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.addNominee}>
          <div className={styles.textButtonParent}>
            <div className={styles.textButton}>
              <div className={styles.textButton1}>
                <img
                  className={styles.remixIconsfillsystemaddCi}
                  alt=""
                  src="../remixiconsfillsystemaddcirclefill.svg"
                />
                <b className={styles.buttonText}>Add images</b>
              </div>
            </div>
            <div className={styles.instruction}>
              {" "}
              You can add images to motivate yourself to achieve your goals
            </div>
          </div>
        </div>
        <div className={styles.buttonGroup}>
          <div className={styles.button}>
            <b className={styles.buttonText1}>Cancel</b>
          </div>
          <div className={styles.button1}>
            <b className={styles.buttonText2}>Add</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
