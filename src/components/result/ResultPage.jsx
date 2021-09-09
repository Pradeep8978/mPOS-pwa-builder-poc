import React from "react";
import { Link, useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./ResultPage.style.scss";
import response from "./mock.json";

function ResultPage() {
  const { id } = useParams();
  const { data } = response;
  return (
    <div className="result-container">
      <h2> BarCode : {id}</h2>
      <div className="product-card">
        {!data?.getProductById?.inventory?.inStock && (
          <div className="out-of-stock">Out of stock</div>
        )}
        <Carousel showThumbs={false}>
          {data?.getProductById?.images.map((imgUrl) => (
            <img className="carousel-image" src={imgUrl} />
          ))}
        </Carousel>
        <dic className="product-details">
          <div className="product-name">
            {data?.getProductById?.description}
          </div>
          <div className="price-details">
            <div className="price-text">Price:</div>
            <div className="mrp">
              ${data?.getProductById?.price?.mrp.toFixed(2)}
            </div>
            <div className="sale-price">
              ${data?.getProductById?.price?.salePrice.toFixed(2)}
            </div>
          </div>
          <div className="saved-price">
            You saved ${data?.getProductById?.price?.youSaved.toFixed(2)} on
            this item.
          </div>
        </dic>
      </div>
      <Link to="/">
        <button>Scan More Barcode</button>
      </Link>
    </div>
  );
}

export default ResultPage;
