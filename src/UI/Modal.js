import React, { useState } from "react";
import { useGlobalContext } from "../context/CrowdContext";
import Card from "./Card";

const Modal = () => {
  const [success, setSuccess] = useState(false);

  const crowdContext = useGlobalContext();
  const [error, setError] = useState(false);
  const onInputRadioHandler = (e) => {
    crowdContext.setSelectedPledge(e.target.value);
  };

  const onAmountHandler = (e) => {
    if (crowdContext.selectedPledge === "bamboo" && e.target.value < 25) {
      setError(true);
    }
    if (crowdContext.selectedPledge === "black" && e.target.value < 75) {
      setError(true);
    }
    setError(false);
    crowdContext.setPledgeAmount(Number(e.target.value));
  };
  const onContinueHandler = (pledgeValue) => {
    if (
      crowdContext.pledgeAmount === null ||
      crowdContext.pledgeAmount === NaN
    ) {
      setError(true);
      return;
    }
    if (
      crowdContext.selectedPledge === "bamboo" &&
      crowdContext.pledgeAmount < 25
    ) {
      setError(true);
      return;
    }
    if (
      crowdContext.selectedPledge === "black" &&
      crowdContext.pledgeAmount < 75
    ) {
      setError(true);
      return;
    }
    if (pledgeValue === "bamboo") {
      crowdContext.setBamboo(crowdContext.bamboo - 1);
    }
    if (pledgeValue === "black") {
      crowdContext.setBlack(crowdContext.black - 1);
    }
    if (crowdContext.pledgeAmount !== "") {
      setSuccess(true);
    }
    crowdContext.setBacked(
      crowdContext.backed + Number(crowdContext.pledgeAmount)
    );
    crowdContext.setTotalBackers(crowdContext.totalBackers + 1);
    crowdContext.setRange(
      Math.ceil(
        (Number(
          Number(crowdContext.backed) + Number(crowdContext.pledgeAmount)
        ) /
          100000) *
          100
      )
    );
  };

  const onSuccessClick = () => {
    setSuccess(false);
    crowdContext.setModal(false);
    crowdContext.setPledgeAmount(null);
  };
  const onModalClose = () => {
    setSuccess(false);
    crowdContext.setModal(false);
  };
  const onBackdropClick = (e) => {
    if (e.target.classList.contains("backdrop")) {
      crowdContext.setModal(false);
    }
  };
  return (
    <div className="backdrop" onClick={onBackdropClick}>
      {!success && (
        <div className="modal">
          <h1>Back this project</h1>
          <img
            className="icon-close"
            src="./images/icon-close-modal.svg"
            alt="icon close"
            onClick={onModalClose}
          />
          <p>
            Want to support us in bringing Mastercraft Bamboo Monitor Riser out
            in the world?
          </p>
          <Card
            className={
              crowdContext.selectedPledge === "noPledge" ? "selected" : ""
            }
          >
            <div className="sel-box">
              <input
                type="radio"
                name="pledgeSelection"
                id="noPledge"
                value="noPledge"
                onChange={onInputRadioHandler}
                checked={crowdContext.selectedPledge === "noPledge" && true}
              />
              <h3 className="modal-card-heading">Pledge with no reward</h3>
            </div>
            <p className="modal-card-text-none">
              Choose to support us without a reward if you simply believe in our
              project. As a backer, you will be signed up to receive product
              updates via email.
            </p>
          </Card>
          <Card
            className={
              crowdContext.selectedPledge === "bamboo" ? "selected" : ""
            }
          >
            <div className="sel-box">
              <input
                type="radio"
                name="pledgeSelection"
                id="bamboo"
                onChange={onInputRadioHandler}
                value="bamboo"
                checked={crowdContext.selectedPledge === "bamboo" && true}
              />
              <h3 className="modal-card-heading">Bamboo Stand</h3>
              <span className="cyan-text">Pledge $25 or more</span>
              <p className="left-text">
                <span className="left">{crowdContext.bamboo}</span>left
              </p>
            </div>
            <p className="modal-card-text">
              You get an ergonomic stand made of natural bamboo. You've helped
              us launch our promotional campaign, and you’ll be added to a
              special Backer member list.
            </p>
            <p className="right-text">
              <span className="left">{crowdContext.bamboo}</span>left
            </p>
            {crowdContext.selectedPledge === "bamboo" && (
              <div className="enter-pledge">
                <p className="enter-your">Enter your pledge</p>
                <div className="project">
                  <input
                    type="text"
                    placeholder="$"
                    className="input-round"
                    onChange={(e) => onAmountHandler(e)}
                    value={Number(crowdContext.pledgeAmount)}
                  />
                  {error && <span>Please enter a valid pledge</span>}

                  <button
                    className="btn btn-cyan"
                    onClick={() => onContinueHandler("bamboo")}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </Card>
          <Card
            className={
              crowdContext.selectedPledge === "black" ? "selected" : ""
            }
          >
            <div className="sel-box">
              <input
                type="radio"
                name="pledgeSelection"
                id="black"
                onChange={onInputRadioHandler}
                value="black"
                checked={crowdContext.selectedPledge === "black" && true}
              />{" "}
              <h3 className="modal-card-heading">Black Edition Stand</h3>
              <span className="cyan-text">Pledge $75 or more</span>
              <p className="left-text">
                <span className="left">{crowdContext.black}</span>left
              </p>
            </div>
            <p className="modal-card-text">
              You get a Black Special Edition computer stand and a personal
              thank you. You’ll be added to our Backer member list. Shipping is
              included.
            </p>
            <p className="right-text">
              <span className="left">{crowdContext.black}</span>left
            </p>
            {crowdContext.selectedPledge === "black" && (
              <div className="enter-pledge">
                <p className="enter-your">Enter your pledge</p>
                <div className="project">
                  <input
                    type="text"
                    placeholder="$"
                    className="input-round"
                    onChange={(e) => onAmountHandler(e, "black")}
                    value={Number(crowdContext.pledgeAmount)}
                  />
                  <button
                    className="btn btn-cyan"
                    onClick={() => onContinueHandler("black")}
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}
          </Card>
          <Card>
            <div className="sel-box disabled">
              <input type="radio" name="mahogany" id="mahogany" />
              <h3 className="modal-card-heading">Mahogany Special Edition</h3>
              <span className="cyan-text">Pledge $200 or more</span>
              <p className="left-text">
                <span className="left">{crowdContext.mahogony}</span>left
              </p>
            </div>
            <p className="modal-card-text disabled">
              You get two Special Edition Mahogany stands, a Backer T-Shirt, and
              a personal thank you. You’ll be added to our Backer member list.
              Shipping is included.
            </p>
          </Card>
        </div>
      )}
      {success && (
        <div className="modal-success">
          <img src="../images/icon-check.svg" alt="icon-check" />
          <h3>Thanks for your support!</h3>{" "}
          <p>
            Your pledge brings us one step closer to sharing Mastercraft Bamboo
            Monitor Riser worldwide. You will get an email once our campaign is
            completed.
          </p>
          <button className="btn btn-cyan" onClick={onSuccessClick}>
            Got it!
          </button>
        </div>
      )}
    </div>
  );
};

export default Modal;
