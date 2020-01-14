import React from "react";
import { withRouter } from "react-router-dom";
import "./menu-item.scss";

const Navigate = (history, match, linkUrl) => {
  history.push(`${match}${linkUrl}`);
};

const MenuItem = ({
  title,
  subtitle,
  imageUrl,
  size,
  linkUrl,
  history,
  match
}) => (
  <div
    className={`menu-item ${size}`}
    onClick={() => Navigate(history, match.url, linkUrl)}
  >
    <div
      className="background-image"
      style={{ backgroundImage: `url(${imageUrl})` }}
    ></div>
    <div className="content">
      <h2 className="title">{title.toUpperCase()}</h2>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);
