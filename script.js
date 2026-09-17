const likeBtn = document.getElementById("likeBtn");
const likeCount = document.getElementById("likeCount");

let likes = Number(localStorage.getItem("portfolioLikes")) || 0;
let liked = localStorage.getItem("portfolioLiked") === "true";

function updateLikeButton() {
    likeCount.textContent = likes + (likes === 1 ? " Like" : " Likes");

    if (liked) {
        likeBtn.textContent = "❤️ Liked";
    } else {
        likeBtn.textContent = "❤️ Like My Portfolio";
    }
}

updateLikeButton();

likeBtn.addEventListener("click", function () {

    if (liked) {
        likes--;
        liked = false;
    } else {
        likes++;
        liked = true;
    }

    localStorage.setItem("portfolioLikes", likes);
    localStorage.setItem("portfolioLiked", liked);

    updateLikeButton();
});