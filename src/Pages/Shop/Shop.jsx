import React from "react";
import { ShopData } from "./shopData";
import CollectiionPreview from "../../Components/collection-preview/collection-preview";

class ShopPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collections: ShopData
    };
  }

  render() {
    const { collections } = this.state;
    return (
      <div className="shop-page">
        <h1>Collections</h1>
        {collections.map(({ id, ...otherCollectionPros }) => {
          return <CollectiionPreview key={id} {...otherCollectionPros} />;
        })}
      </div>
    );
  }
}

export default ShopPage;
