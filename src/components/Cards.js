import React, { useState } from "react";
import { useGlobalContext } from "../context/CrowdContext";
import Card from "../UI/Card";
import Modal from "../UI/Modal";

const Cards = () => {
  const crowdContext = useGlobalContext();

  const onSelectPledge = (pledge) => {
    console.log(pledge);
    crowdContext.setModal(true);
    crowdContext.setSelectedPledge(pledge);
  };
  return (
    <>
      <Card>
        <div className="card-heading">
          <h2>Bamboo Stand</h2>
          <span className="cyan-text">Pledge $25 or more</span>
        </div>
        <p className="card-text">
          You get an ergonomic stand made of natural bamboo. You've helped us
          launch our promotional campaign, and you’ll be added to a special
          Backer member list.
        </p>
        <div className="card-num-btn">
          <div className="num">
            <p>
              <span>{crowdContext.bamboo}</span>left
            </p>
          </div>
          <button
            onClick={() => onSelectPledge("bamboo")}
            className="btn btn-cyan"
          >
            Select Reward
          </button>
        </div>
      </Card>
      {crowdContext.modal && <Modal />}
      <Card>
        <div className="card-heading">
          <h2> Black Edition Stand</h2>
          <span className="cyan-text"> Pledge $75 or more</span>
        </div>
        <p className="card-text">
          You get a Black Special Edition computer stand and a personal thank
          you. You’ll be added to our Backer member list. Shipping is included.
        </p>
        <div className="card-num-btn">
          <div className="num">
            <p>
              <span>{crowdContext.black}</span>left
            </p>
          </div>

          <button
            className="btn btn-cyan"
            onClick={() => onSelectPledge("black")}
          >
            Select Reward
          </button>
        </div>
      </Card>
      <Card>
        <div className="card-heading disabled">
          <h2> Mahogany Special Edition</h2>
          <span className="cyan-text">Pledge $200 or more</span>
        </div>
        <p className="card-text">
          You get two Special Edition Mahogany stands, a Backer T-Shirt, and a
          personal thank you. You’ll be added to our Backer member list.
          Shipping is included
        </p>
        <div className="card-num-btn">
          <div className="num">
            <p>
              <span>{crowdContext.mahogony}</span>left
            </p>
          </div>

          <button className="btn btn-out">Out of stock</button>
        </div>
      </Card>
    </>
  );
};

export default Cards;
