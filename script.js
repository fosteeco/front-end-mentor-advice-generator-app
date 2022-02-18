const API_URL = "https://api.adviceslip.com/advice";
const adviceNumber = document.querySelector("#adviceNumber");
const quote = document.querySelector("#quote");
const quoteButton = document.querySelector("#newQuoteButton");

const fetchQuote = async () => {
  const quotePromise = await fetch(API_URL);
  const qouteData = await quotePromise.json();
  return await qouteData;
};

(async () => {
  const newQuoteData = await fetchQuote();
  changeQuote(newQuoteData);
})();

const changeQuote = (qouteData) => {
  const quoteId = qouteData.slip.id;
  const quoteText = qouteData.slip.advice;
  adviceNumber.innerText = quoteId;
  quote.innerText = quoteText;
};

quoteButton.addEventListener("click", async (e) => {
  const newq = await fetchQuote();
  changeQuote(newq);
});
