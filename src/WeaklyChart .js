import React, { useState, useEffect } from "react";
import "./Styles/WeaklyChart.css";
import Carousel from "react-elastic-carousel";
import axios from "axios";
import rainstatus from "./images/rain.png";
import couldstatus from "./images/cloud.png";
import hezestatus from "./images/19.png";
import clearstatus from "./images/clear.png";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1100, itemsToShow: 4 },
];

function WeaklyChart({ search }) {
  const [cardData, setCardData] = useState("");
  const cityName = "Dhaka";

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          search ? search : cityName
        }&appid=716536c610d959ddf3e0456b12b9bbf0`
      )
      .then((res) => {
        setCardData(res.data.list);
      });
  }, [search]);

  const date = new Date(cardData[0]?.dt_txt);
  const date1 = new Date(cardData[5]?.dt_txt);
  const date2 = new Date(cardData[15]?.dt_txt);
  const date3 = new Date(cardData[22]?.dt_txt);
  const date4 = new Date(cardData[31]?.dt_txt);
  const date5 = new Date(cardData[38]?.dt_txt);
  const date6 = new Date(cardData[39]?.dt_txt);

  return (
    <div className="weaklychart">
      <div className="container weaklychart__conatainer">
        <Carousel breakPoints={breakPoints} className="row weaklychart__row">
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[0]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[0]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[0]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[0]?.main.temp - 275.15)} <sup>0</sup>C
            </p>
            <p>Date : {date.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[5]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[5]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[5]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[5]?.main.temp - 275.15)} <sup>0</sup>C
            </p>
            <p>Date : {date1.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2  weaklychart__card">
            {cardData[15]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[15]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[15]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[15]?.main.temp - 275.15)} <sup>0</sup>
              C
            </p>
            <p>Date : {date2.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[22]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[22]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[22]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[22]?.main.temp - 275.15)} <sup>0</sup>
              C
            </p>
            <p>Date : {date3.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[31]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[31]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[31]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[31]?.main.temp - 275.15)} <sup>0</sup>
              C
            </p>
            <p>Date : {date4.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[38]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[38]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[38]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[38]?.main.temp - 275.15)} <sup>0</sup>
              C
            </p>
            <p>Date : {date5.toLocaleDateString()}</p>
          </div>
          <div className="col-12 col-md-2 weaklychart__card">
            {cardData[39]?.weather[0].main === "Rain" ? (
              <img src={rainstatus} className="sun_img" alt="img1" />
            ) : cardData[39]?.weather[0].main === "Clouds" ? (
              <img src={couldstatus} className="sun_img" alt="img1" />
            ) : cardData[39]?.weather[0].main === "Clear" ? (
              <img src={clearstatus} className="sun_img" alt="img1" />
            ) : (
              <img src={hezestatus} className="sun_img" alt="img1" />
            )}
            <p className="weaklychart__temp">
              Temp : {Math.round(cardData[39]?.main.temp - 275.15)} <sup>0</sup>
              C
            </p>
            <p>Date : {date6.toLocaleDateString()}</p>
          </div>
        </Carousel>
      </div>
    </div>
  );
}

export default WeaklyChart;
