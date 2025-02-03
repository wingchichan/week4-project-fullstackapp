// js file for our html/client side so data is visible to end user

const app = document.getElementById("app");
const reviewsSection = document.getElementById("reviews");

const API_URL = "https://week4-project-fullstackapp-server.onrender.com";
// const API_URL = "http://localhost:5173";

// making a fetch API request to our server
async function getReviews() {
  const response = await fetch(`${API_URL}`);
  // reads the data in json
  const data = await response.json();

  // forEach function to loop through the array of objects we get back from our DB and to display on page
  data.forEach((review) => {
    // create parent div for each review
    // we've stored the result of the createReviewDiv function in it's own variable
    // it's then passed into appendChild
    const reviewDiv = createReviewDiv(`${review.name}`, `${review.content}`);
    reviewsSection.appendChild(reviewDiv);
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
  const stringifiedReviews = JSON.stringify(formDataObject);
  try {
    // 1. store response from POST call
    const response = await fetch(`${API_URL}/reviews`, {
      method: "POST",
      // tells server which media types are accepted by the server
      // e.g. in this case we're sending json
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: stringifiedReviews,
    });
    // 2. add new review on page
    reviewsSection.prepend(
      createReviewDiv(`${formDataObject.name}`, `${formDataObject.content}`)
    );
    resetForm();
  } catch (e) {
    // catch error if sending data back to server fails
    console.error(e);
  }
}
function resetForm() {
  form.reset();
}

// creates div for new review and returns it
function createReviewDiv(name, reviewText) {
  // create parent div for each review
  const divForReview = document.createElement("div");
  divForReview.setAttribute("class", "review");

  const pTagForName = document.createElement("p");
  pTagForName.innerText = `${name}`;
  pTagForName.setAttribute("class", "reviewer-name");

  const pTagForReview = document.createElement("p");
  pTagForReview.innerText = `${reviewText}`;

  // add elements to parent div
  divForReview.appendChild(pTagForName);
  divForReview.appendChild(pTagForReview);
  return divForReview;
}
