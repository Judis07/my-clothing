import React from "react";
import CollectiionItem from "../collection-item/collection-item";
import "./collection-preview.scss";

const CollectiionPreview = ({ title, items }) => (
  <div className="collection-preview">
    <h2 className="title">{title.toUpperCase()}</h2>
    <div className="preview">
      {items.slice(0, 4).map(({ id, ...otherItemProps }) => (
        <CollectiionItem key={id} {...otherItemProps} />
      ))}
    </div>
  </div>
);

export default CollectiionPreview;
