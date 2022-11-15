const endPoint = 'https://economia.awesomeapi.com.br/json/all';
export const LOGIN = 'LOGIN';
export const GET_CURRENCIES = 'GET_CURRENCIES';
export const SAVE_FORM = 'SAVE_FORM';

export const handleLogin = (payload) => ({ type: LOGIN, payload });
export const getCurrencies = (payload) => ({ type: GET_CURRENCIES, payload });
export const saveForm = (payload) => ({ type: SAVE_FORM, payload });

export function fetchCurrencies() {
  return async (dispatch) => {
    const response = await fetch(endPoint);
    const data = await response.json();
    const finalData = Object.keys(data).filter((currency) => currency !== 'USDT');
    return dispatch(getCurrencies(finalData));
  };
}

export function saveFormOnRedux(payload) {
  return async (dispatch) => {
    const response = await fetch(endPoint);
    const data = await response.json();
    return dispatch(saveForm({ ...payload, exchangeRates: data }));
  };
}
