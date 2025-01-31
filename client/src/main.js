// js file for our html/client side so data is visible to end user
const app = document.getElementById("app");
const API_URL = "https://week4-project-fullstackapp-server.onrender.com";

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
