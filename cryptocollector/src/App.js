import React, { useEffect, useState } from "react";
import { getData } from "./store/actions/fetchDataActions";
import { useDispatch, useSelector } from "react-redux";
import "./App.css";

function App() {
  const [currencyData, setCurrencyData] = useState([]);
  // console.log(`CURRENCY DATA IS ${JSON.stringify(currencyData.name)}`);

  const dispatch = useDispatch();

  const dataList = useSelector((state) => state);

  // console.log(dataList.data.data.data);

  const data = dataList.data.data.data;

  console.log(`DATA IS ${JSON.stringify(data)}`);

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);

  data.map((item) => console.log(`DATA MAP IS ${item.name}`));

  const addCurrency = (item) => {
    alert(
      `New currency ${item.name} added successfully.Scroll down to see your added currency`
    );
    setCurrencyData(item);
  };
  return (
    <div className="container">
      <div className="header">
        <h1
          style={{
            color: "#FFCC1D",
            textAlign: "center",
          }}
        >
          Cryptocurrency Store
        </h1>
      </div>
      <div>
        <h1
          style={{
            marginLeft: "2%",
          }}
        >
          Add Cryptocurrency
        </h1>
        {data.map((item) => {
          return (
            <div className="addBackground">
              <div>
                <p
                  style={{
                    marginLeft: "2%",
                    fontWeight: "bold",
                    width: "100%",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    marginLeft: "2%",
                    fontWeight: "bold",
                    color: "green",
                    marginTop: "-15%",
                  }}
                >
                  {item.symbol}
                </p>

                <p
                  className="addButton"
                  onClick={() => addCurrency(item)}
                  style={{
                    fontSize: 50,
                  }}
                >
                  +
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cards">
        <img
          alt="coin-images"
          className="coins"
          src="https://scontent.fmaa12-2.fna.fbcdn.net/v/t39.30808-6/240402980_1999905650160883_2050352097842423657_n.jpg?_nc_cat=110&ccb=1-5&_nc_sid=09cbfe&_nc_ohc=pBNe9X576PsAX-sUBiG&_nc_ht=scontent.fmaa12-2.fna&oh=3fb40e2cf7bbc358dded560949f9b2fa&oe=61B1F920"
        />
        <div className="pvalues">
          <p
            style={{
              marginLeft: "100%",
              fontWeight: "bold",
            }}
          >
            {currencyData.name}
          </p>
          <p
            style={{
              marginLeft: "100%",
              fontWeight: "bold",
              color: "green",
            }}
          >
            {currencyData.symbol}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginLeft: "100%",
            }}
          >
            ${currencyData.metrics.market_data.price_usd}
          </p>
          <p
            style={{
              fontWeight: "bold",
              fontSize: 15,
              marginLeft: "100%",
              color: "green",
            }}
          >
            {currencyData.metrics.market_data.percent_change_usd_last_24_hours}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
