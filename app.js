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

var swiper = new Swiper(".news-content", {
    spaceBetween: 100,
    loop:true,
    centeredSlides: true,
    autoplay: {
        delay: 4500,
        disableOnInteraction: false,
    },
    breakpoints:{
        0:{
            slidesPerView:1,
        },
        568:{
            slidesPerView:2,
        },
        768:{
            slidesPerView:2,
        },
        1020:{
            slidesPerView:3,
        },
    },
    });