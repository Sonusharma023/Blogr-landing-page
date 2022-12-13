
const hambur = document.querySelector("#hamburger");
const header = document.querySelector("#header");
const navlinks = document.querySelectorAll(".nav-link");
console.log(hambur)
console.log(header)
console.log(navlinks)
hambur.addEventListener("click", () => {
    header.classList.toggle("active");
});
navlinks.forEach(function (nav) {
    nav.addEventListener("click", function () {
        this.classList.toggle("open");

        if (nav.classList.contains("open")) {
            navlinks.forEach(function (nav) {
                nav.classList.remove("open");
            });
            nav.classList.toggle("open")
        }
    })
})