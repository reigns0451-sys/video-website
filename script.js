// Search button
const searchInput = document.querySelector(".search-box input");
const searchButton = document.querySelector(".search-box button");

searchButton.addEventListener("click", function () {
    const searchText = searchInput.value.trim();

    if (searchText === "") {
        alert("Please enter a video name.");
    } else {
        alert("Searching for: " + searchText);
    }
});


// Upload button
const uploadButton = document.querySelector(".upload-btn");

uploadButton.addEventListener("click", function () {
    alert("Video Upload System coming soon!");
});


// Explore button
const exploreButton = document.querySelector(".explore-btn");

exploreButton.addEventListener("click", function () {
    document.querySelector(".video-section").scrollIntoView({
        behavior: "smooth"
    });
});


// Category buttons
const categoryButtons = document.querySelectorAll(".categories button");

categoryButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        categoryButtons.forEach(function (btn) {
            btn.classList.remove("active");
        });

        button.classList.add("active");

    });

});


// Video cards
const videoCards = document.querySelectorAll(".video-card");

videoCards.forEach(function (card) {

    card.addEventListener("click", function () {
        alert("Video player coming soon!");
    });

});
