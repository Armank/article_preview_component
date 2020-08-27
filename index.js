const shareMenu = document.getElementById("shareMenu");
const shareBtn = document.querySelector(".share");

let flag = false;

shareBtn.addEventListener("click", ()=>{
    if(!flag){
        flag = true;
        shareMenu.style.display="flex";
    }else{
        flag = false;
        shareMenu.style.display="none";
    }
});
