const titles = document.querySelectorAll("h4");


// add event click on title
titles.forEach(title  => {
    title.addEventListener("click", () =>{
        title.nextElementSibling.classList.toggle("visible");
        title.querySelector("a").classList.toggle("active");
    })
});


