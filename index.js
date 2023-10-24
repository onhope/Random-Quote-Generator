const btnEl = document.getElementById("btn");
const apiURL = "https://api.quotable.io/random";
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

async function getQuote() {

  try {
    btnEl.innerText = "Loading...";
    btnEl.disabled = true;
    quoteEl.innerText = "Updating..."
    const responese = await fetch(apiURL);
    const data = await responese.json();
    const quoteContent = data.content;
    const quoteAuthor = data.author;
    quoteEl.innerText = quoteContent;
    authorEl.innerText = "~ " + quoteAuthor;
    btnEl.innerText = "Gey a Quote";
    btnEl.disabled = false;
    // console.log(data);      
  } catch (error) {
    console.log(error);
    quoteEl.innerText = "An error happend, try again later";
    authorEl.innerText = "An error happend";
    btnEl.disabled = false;
  }
}

getQuote();

btnEl.addEventListener("click", getQuote)