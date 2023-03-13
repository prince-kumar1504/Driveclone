
const styleString = `color:white; background-color:black; position:absolute; left:50%; top:50%; transform:translate(-50%,-50%); font-size:2rem; border-radius:1rem; padding:1rem;`;

const setTime = document.querySelector("#set-time");
setTime.innerHTML = new Date().toLocaleTimeString([], {timeStyle: 'short'});
setInterval(()=>{
    setTime.innerHTML = new Date().toLocaleTimeString([], {timeStyle: 'short'});
},30*1000)

let rootSBtn = document.querySelector(".root-list");
let folderSBtn = document.querySelector(".folder-list");
let fileSBtn = document.querySelector(".file-list");
let albumSBtn = document.querySelector(".album-list");
rootSBtn.addEventListener("click",()=>{
    addWithArray(resources,-1);
    breadCrumb.style.opacity = "1";
    breadCrumb.style['pointer-events'] = 'all';
    breadCrumb.innerHTML ="";
    let temp = `<a class="path" id="-1">Home</a>`
    breadCrumb.innerHTML = temp;
    let tempRoot = breadCrumb.querySelector("a");
    tempRoot.addEventListener("click",navigateBreadCrumb);
})

folderSBtn.addEventListener("click",()=>{
    let onlyFoldersArray = resources.filter(r=>r.rType == "folder");
    breadCrumb.style.opacity = "0";
    breadCrumb.style['pointer-events'] = 'none';
    if(onlyFoldersArray.length == 0){
        resourcesContainer.innerHTML = `<div style='${styleString}'>No Folders Found</div>`;
        return;
    }
    addWithArray(onlyFoldersArray,-2);
})

fileSBtn.addEventListener("click",()=>{
    let onlyFilesArray = resources.filter(r=>r.rType == "file");
    breadCrumb.style.opacity = "0";
    breadCrumb.style['pointer-events'] = 'none';
    if(onlyFilesArray.length == 0){
        resourcesContainer.innerHTML = `<div style='${styleString}'>No Files Found</div>`;
        return;
    }
    addWithArray(onlyFilesArray,-2);
})


albumSBtn.addEventListener("click",()=>{
    let onlyAlbumsArray = resources.filter(r=>r.rType == "album");
    breadCrumb.style.opacity = "0";
    breadCrumb.style['pointer-events'] = 'none';
    if(onlyAlbumsArray.length == 0){
        resourcesContainer.innerHTML = `<div style='${styleString}'>No Albums Found</div>`;
        return;
    }
    addWithArray(onlyAlbumsArray,-2);
})


const homeBtnBar = document.querySelector("#home-bar-btn");
const folderBtnBar = document.querySelector("#folder-bar-btn");
const fileBtnBar = document.querySelector("#file-bar-btn");
const albumBtnBar = document.querySelector("#album-bar-btn");

homeBtnBar.addEventListener("click",()=>rootSBtn.click());
folderBtnBar.addEventListener("click",()=>folderSBtn.click());
fileBtnBar.addEventListener("click",()=>fileSBtn.click());
albumBtnBar.addEventListener("click",()=>albumSBtn.click());