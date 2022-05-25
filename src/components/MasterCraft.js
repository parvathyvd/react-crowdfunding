import React, { useEffect, useState } from "react";
import { useGlobalContext } from "../context/CrowdContext";

const MasterCraft = () => {
  const [bookmark, setBookmark] = useState(false);
  const crowdContext = useGlobalContext();
  const onBookmarkHandler = () => {
    setBookmark(!bookmark);
  };
  const openModalHandler = () => {
    crowdContext.setModal(true);
  };

  return (
    <div className="master__wrapper">
      <div className="master__info">
        <div className="small__logo">
          <img src="./images/logo-mastercraft.svg" alt="mastercraft" />
        </div>
        <h1 className="main-heading">Mastercraft Bamboo Monitor Riser</h1>
        <small className="small-text">
          A beautiful & handcrafted monitor stand to reduce neck and eye strain.
        </small>
        <div className="btn-block">
          <button className="btn btn-cyan" onClick={openModalHandler}>
            Back this project
          </button>
          <button
            className={`btn-bookmark ${bookmark ? "active" : ""}`}
            onClick={onBookmarkHandler}
          >
            <img src="./images/icon-bookmark.svg"></img>
            <span>{bookmark ? "Bookmarked" : "Bookmark"}</span>
          </button>
        </div>
      </div>
      <div className="numbers-block">
        <div className="number-range">
          <div className="number">
            <h3>
              ${crowdContext.backed}
              <span>of $100,000 backed</span>
            </h3>
          </div>
          <div className="number">
            <h3>
              {crowdContext.totalBackers}
              <span>of total backers</span>
            </h3>
          </div>
          <div className="number">
            <h3>
              56<span>days left</span>
            </h3>
          </div>
        </div>
        <div className="range-wrapper">
          <input type="range" className="range" min="0" max="100" step="0.1" />
          <div className="track">
            <div
              className="track-inner"
              style={{
                width: `${
                  crowdContext.range >= 100 ? 100 : crowdContext.range
                }%`,
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MasterCraft;
