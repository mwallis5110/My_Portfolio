import React from "react";
import {
  JSArray,
  ReactArray,
  RelationalArray,
  NonRelationalArray,
  GQLArray,
  JavaArray
} from "../../projectData/projectData";

import "./card.css";

export function JSCard() {
  JSArray.map((JSProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={JSProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{JSProject.cardTitle}</h2>
          <p className="cardDescription">{JSProject.cardDescription}</p>
          <button className="link">{JSProject.link}</button>
          <button className="repo">{JSProject.repo}</button>
        </div>
      </div>
    );
  });
}

export function ReactCard() {
  ReactArray.map((ReactProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={ReactProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{ReactProject.cardTitle}</h2>
          <p className="cardDescription">{ReactProject.cardDescription}</p>
          <button className="link">{ReactProject.link}</button>
          <button className="repo">{ReactProject.repo}</button>
        </div>
      </div>
    );
  });
}

export function RelationalCard() {
  RelationalArray.map((RelationalProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={RelationalProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{RelationalProject.cardTitle}</h2>
          <p className="cardDescription">{RelationalProject.cardDescription}</p>
          <button className="link">{RelationalProject.link}</button>
          <button className="repo">{RelationalProject.repo}</button>
        </div>
      </div>
    );
  });
}

export function NonRelationalCard() {
  NonRelationalArray.map((NonRelationalProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={NonRelationalProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{NonRelationalProject.cardTitle}</h2>
          <p className="cardDescription">{NonRelationalProject.cardDescription}</p>
          <button className="link">{NonRelationalProject.link}</button>
          <button className="repo">{NonRelationalProject.repo}</button>
        </div>
      </div>
    );
  });
}

export function GQLCard() {
  GQLArray.map((GQLProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={GQLProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{GQLProject.cardTitle}</h2>
          <p className="cardDescription">{GQLProject.cardDescription}</p>
          <button className="link">{GQLProject.link}</button>
          <button className="repo">{GQLProject.repo}</button>
        </div>
      </div>
    );
  });
}

export function JavaCard() {
  JavaArray.map((JavaProject) => {
    return (
      <div className="cardWrapper">
        <img className="cardImg" src={JavaProject.cardImg} alt="Project" />
        <div className="cardBody">
          <h2 className="cardTitle">{JavaProject.cardTitle}</h2>
          <p className="cardDescription">{JavaProject.cardDescription}</p>
          <button className="link">{JavaProject.link}</button>
          <button className="repo">{JavaProject.repo}</button>
        </div>
      </div>
    );
  });
}