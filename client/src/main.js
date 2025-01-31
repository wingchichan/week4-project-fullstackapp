// js file for our html/client side so data is visible to end user

const app = document.getElementById("app");

const API_URL = "https://week4-project-fullstackapp-server.onrender.com";
// const API_URL = "http://localhost:5173";

// making a fetch API request to our server
async function getReviews() {
  const response = await fetch(`${API_URL}/reviews`);
  // reads the data in json
  const data = await response.json();

  // forEach function to loop through the array of objects we get back from our DB and to display on page
  data.forEach((review) => {
    const pTagForName = document.createElement("p");
    pTagForName.innerText = `${review.name}`;
    app.appendChild(pTagForName);
    const pTagForReview = document.createElement("p");
    pTagForReview.innerText = `${review.content}`;
    app.appendChild(pTagForReview);
  });
}
getReviews();

const form = document.getElementById("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  submitReview();
});

async function submitReview() {
  const formDataResult = new FormData(form);
  const formDataObject = Object.fromEntries(formDataResult);
  try {
    // 1. store response from POST call
    const response = await fetch(`${API_URL}/reviews`, {
      method: "POST",
      body: formDataResult,
    });
    // 2. log response
    console.log(await response.json());
  } catch (e) {
    // catch error if sending data back to server fails
    console.error(e);
  }
}
