const endPoint = 'https://economia.awesomeapi.com.br/json/all';

const fetchCurrencies = async () => {
  const response = await fetch(endPoint);
  const finalData = await response.json();
  return finalData;
};

export default fetchCurrencies;
