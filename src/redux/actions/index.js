const endPoint = 'https://economia.awesomeapi.com.br/json/all';
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';

export const handleLogin = (payload) => ({ type: LOGIN, payload });
export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch(endPoint);
    const data = await response.json();
    const finalData = Object.keys(data).filter((currency) => currency !== 'USDT');
    console.log(finalData);
    dispatch(getCurrencies(finalData));
  };
}
