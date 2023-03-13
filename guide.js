const guideContainer = document.querySelector("#htu-container");
const closeGuide = document.querySelector("#close-guide-btn");
const openGuide = document.querySelector("#open-guide-btn");
const closeWelCard = document.querySelector("#close-wel-card");
const welcomeCard = document.querySelector("#welcome-card");
closeGuide.addEventListener("click",()=>{
    guideContainer.classList.add("closed");
    guideContainer.classList.remove("active");
})

openGuide.addEventListener("click",()=>{
    guideContainer.classList.remove("closed");
    guideContainer.classList.add("active");
})

closeWelCard.addEventListener("click",()=>{
    welcomeCard.style.transform = "scale(0)"
    welcomeCard.classList.remove("active");
    localStorage.setItem("isNewUser","false");
});

(function(){
    const newUserCheck = localStorage.getItem("isNewUser");
    console.log(newUserCheck);
    if(newUserCheck){
        welcomeCard.classList.remove("active");
        welcomeCard.style.transform = "scale(0)";
    }else{
        welcomeCard.style.transform = "scale(1)";
    }
})();