const searchContainer = document.querySelector(".search-container");
const btnSearch = document.querySelector("#search-icon");
const userBtn = document.querySelector("#user-icon");
const userContent = document.querySelector(".user-container");
const nav =document.querySelector(".navigation");
const burgerBtn=document.querySelector("#burger-menu");
const linkNav=document.querySelector(".navigation a");
const header=document.querySelector("nav");
const sections=document.querySelector("section");

burgerBtn.addEventListener("click",()=>{
    nav.classList.toggle("active")
    burgerBtn.classList.toggle("bx-x")
    userContent.classList.remove("active")
    searchContainer.classList.remove("active")
});

btnSearch.addEventListener("click",()=> {
    searchContainer.classList.toggle("active")
    userContent.classList.remove("active")
    nav.classList.remove("active")
    burgerBtn.classList.remove("bx-x")
});

userBtn.addEventListener("click",()=> {
    searchContainer.classList.remove("active")
    userContent.classList.toggle("active")
    nav.classList.remove("active")
    burgerBtn.classList.remove("bx-x")
});

linkNav.forEach(link=>{
    link.addEventListener("click",()=>{
        nav.classList.remove("active")
        burgerBtn.classList.remove("bx-x")
    });
})

window.addEventListener("scroll",()=>{
    header.classList.toggle("active",window.scrollY > 0)
});

window.addEventListener("scroll",()=>{
    userContent.classList.remove("active")
    searchContainer.classList.remove("active")
    nav.classList.remove("active")
    burgerBtn.classList.remove("bx-x")
});

const scrollActive = ()=>{
    sections.forEach(section =>{
        var top = window.scrollY;
        var offset = section.offset - 150;
        var height = section.offsetHeight;
        var id = section.getAttribute('id');
        if( top >= offset && top < offset + height){
            linkNav.forEach(links=>{
                links.classList.remove("active")
                document.querySelector(`.navigation a[href*=${id}]`).classList.add("active")
            })
        }
    })
}

window.addEventListener("scroll",scrollActive);



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