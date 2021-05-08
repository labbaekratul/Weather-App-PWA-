import React, { useState, useEffect } from "react";
import RoomIcon from "@material-ui/icons/Room";
import "./Styles/AppBody.css";
import clearstatus from "./images/clear.png";
import { RiTempHotLine } from "react-icons/ri";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { BsDroplet, BsArrowUp } from "react-icons/bs";
import { GiSpeedometer } from "react-icons/gi";
import WeaklyChart from "./WeaklyChart ";
import axios from "axios";
import rainstatus from "./images/rain.png";
import couldstatus from "./images/cloud.png";
import hezestatus from "./images/19.png";

function AppBody() {
  const [country, setCountry] = useState("");
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const city = "Dhaka";
  const time = new Date();

  const month = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const day = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const getCountyName = (e) => {
    e.preventDefault();
    setSearch(country);
    setCountry("");
  };

  useEffect(() => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          search ? search : city
        }&appid=716536c610d959ddf3e0456b12b9bbf0`
      )
      .then((res) => {
        setData(res.data);
      });
  }, [search]);

  return (
    <div className="appbody">
      <div className="container-fluid">
        <div className="row">
          <form className="col-12 appbody__inputCol" onSubmit={getCountyName}>
            <input
              className="appbody__countrySearch"
              type="text"
              placeholder="Write Your City Name.. ."
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </form>
          <div className="appbody__cityName col-12">
            <RoomIcon className="county-mapicon" />
            <span className="appbody__city">{data?.name},</span>
            <span className="appbody__contry">{data?.sys.country}</span>
          </div>
          <div className="row weatherstatus_row">
            <div className="col-xl-4 col-lg-6 col-md-6 col-12 date__info">
              <div>
                <p className="mb-1">
                  {month[time.getMonth()]}, {time.getDate()}
                </p>
                <small>
                  {day[time.getDay()]}, {time.getFullYear()}
                </small>
              </div>
              <div className="tempInfo">
                <div className="tempInfo__icon">
                  <div className="tempIconAndStatus">
                    {Math.round(data?.main.temp - 275.15) >= 25 ? (
                      <RiTempHotLine
                        className="temp_icon1"
                        style={{ color: "red" }}
                      />
                    ) : Math.round(data?.main.temp - 275.15) <= 25 >= 10 ? (
                      <RiTempHotLine
                        className="temp_icon1"
                        style={{ color: "yellow" }}
                      />
                    ) : Math.round(data?.main.temp - 275.15) <= 10 ? (
                      <RiTempHotLine
                        className="temp_icon1"
                        style={{ color: "white" }}
                      />
                    ) : (
                      <RiTempHotLine
                        className="temp_icon1"
                        style={{ color: "yellow" }}
                      />
                    )}
                    <p className="temp_degree">
                      {Math.round(data?.main.temp - 275.15)} <sup>0</sup>C
                    </p>
                  </div>
                  <p>
                    Feels like {Math.round(data?.main.feels_like - 275.15)}
                    <sup> 0</sup>C
                  </p>
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12  status__imgCol">
              {data?.weather[0].main == "Rain" ? (
                <img src={rainstatus} className="status__img" alt="img1" />
              ) : data?.weather[0].main == "Clouds" ? (
                <img src={couldstatus} className="status__img" alt="img1" />
              ) : data?.weather[0].main == "Clear" ? (
                <img src={clearstatus} className="status__img" alt="img1" />
              ) : (
                <img src={hezestatus} className="status__img" alt="img1" />
              )}
              <h2 className="status__img_text">{data?.weather[0].main}</h2>
            </div>
            <div className="col-xl-4 col-lg-6 col-md-6 col-12 weatherDeatilnInfo__col">
              <div>
                <p className="singleLineStatus">
                  <FiSunrise className="sunrise_icon" /> Max Temp :
                  <span className="sunset_time">
                    {Math.round(data?.main.temp_max - 275.15)} <sup>0</sup>C
                  </span>
                </p>
                <p className="singleLineStatus">
                  <FiSunset className="sunrise_icon" /> Min Temp :
                  <span className="sunset_time">
                    {Math.round(data?.main.temp_min - 275.15)} <sup>0</sup>C
                  </span>
                </p>
                <p className="singleLineStatus">
                  <BsDroplet className="sunrise_icon" /> Humidity :{" "}
                  {data?.main.humidity}%
                </p>
                <p className="singleLineStatus">
                  <GiSpeedometer className="sunrise_icon" /> Wind-speed :{" "}
                  {data?.wind.speed} m/s
                </p>
                <p className="singleLineStatus">
                  <BsArrowUp className="sunrise_icon" /> Pressure :{" "}
                  {data?.main.pressure} mb
                </p>
              </div>
            </div>
          </div>
        </div>
        <WeaklyChart search={search} />
      </div>
    </div>
  );
}

export default AppBody;
