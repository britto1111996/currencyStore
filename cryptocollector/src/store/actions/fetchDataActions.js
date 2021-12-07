import { GET_DATA, GET_ERROR } from "../types";
import axios from "axios";

export const getData = () => async (dispatch) => {
  try {
    const res = await axios.get(
      "https://data.messari.io/api/v1/assets?fields=id,slug,symbol,name,metrics/market_data/price_usd,metrics/market_data/percent_change_usd_last_24_hours"
    );
    dispatch({
      type: GET_DATA,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERROR,
      payload: console.log(error),
    });
  }
};
