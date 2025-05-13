const searchContainer = document.querySelector(".search-container");
const btnSearch = document.querySelector("#search-icon");
const userBtn = document.querySelector("#user-icon");
const userContent = document.querySelector(".user-container");


btnSearch.addEventListener("click",()=> {
    searchContainer.classList.toggle("active")
    userContent.classList.remove("active")
});

userBtn.addEventListener("click",()=> {
    searchContainer.classList.remove("active")
    userContent.classList.toggle("active")
});