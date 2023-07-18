// Read more Read Less Function

// select Read more span,div and button element














let dots = document.getElementById("dots");
let readMoreText = document.querySelector(".readMoreText");
let readMoreBtn = document.querySelector(".readMoreBtn");

readMoreBtn.addEventListener("click", () => {


    if (dots.style.display === "none") {

        dots.style.display = "inline";
        readMoreText.style.display = "none";
        readMoreBtn.innerText = "Read More";





    } else {


        readMoreBtn.innerText = "Read Less";
        readMoreText.style.display = "block";
        dots.style.display = "none";
    }

});




// Image Gallery Function


let galleryHighlight = document.getElementById("destination-highlights");

let galleryImage = document.querySelectorAll(".destination-preview img");



for (gallery of galleryImage) {

    gallery.addEventListener("click", function() {


        galleryHighlight.src = this.src;




    });


}

// accordion Function



let accordionBtn = document.querySelectorAll(".accordionData button");


for (let accordion of accordionBtn) {


    accordion.addEventListener("click", () => {




        accordion.classList.toggle("active");
        let accordionContent = accordion.nextElementSibling;
        if (accordionContent.style.display === "block") {

            accordionContent.style.display = "none";


        } else {

            accordionContent.style.display = "block";
        }



    });



}