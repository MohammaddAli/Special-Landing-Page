
if(window.localStorage.getItem("main-color")){
  document.documentElement.style.setProperty("--main-color", window.localStorage.getItem("main-color"));

  document.querySelectorAll(".setting-container ul li").forEach((list) => {
    list.classList.remove("active-color");

    if(list.dataset.color === window.localStorage.getItem("main-color")){
      list.classList.add("active-color");
    }
  });
}
let intervalId = 0;
if(window.localStorage.getItem("imageOption")){
  document.querySelectorAll(".image-setting-container span").forEach(ele => {
    ele.classList.remove("active");
    if(ele.dataset.image === window.localStorage.getItem("imageOption"))
    ele.classList.add("active");
    
    if(ele.dataset.image === "Yes"){
      console.log("yeso");
 intervalId = setInterval(() => {
  console.log("running");

  let ran = Math.floor(Math.random() * imageArray.length);
  landing.style.cssText = `background-image :URL('../Images/${imageArray[ran]}.jpg'); transition: 1s;`;
}, 7000);
 } else
    {
      console.log("noooooooo");
      clearInterval(intervalId);
    }
  });
}



let icon = document.querySelector(".side-setting .icone");
let spinIcon = document.querySelector(".side-setting .icone i");
let sideSetting = document.querySelector(".side-setting");

icon.onclick = function () {
  spinIcon.classList.toggle("fa-spin");
  sideSetting.classList.toggle("open");
};

let landing = document.querySelector(".landing-page");
// landing.style.backgroundImage = 'url("../Images/room_chair_table_179829_1920x1080.jpg")';
// landing.style.cssText = "background-image : url('../Images/room_chair_table_179829_1920x1080.jpg')";

// setInterval(() => {
//     for (let i = 1; i < 8; i++) {
//         if (i === 1) {
//             landing.style.cssText = "background-image :URL('../Images/1658089.jpg')";
//           }
//           if (i === 2) {
//             landing.style.cssText = "background-image :URL('../Images/1657858.jpg')";
//           }
//           if (i === 3) {
//             landing.style.cssText = "background-image :URL('../Images/1657871.jpg')";
//           }
//           if (i === 4) {
//             landing.style.cssText =
//               "background-image :URL('../Images/room_chair_table_179829_1920x1080.jpg')";
//           }
//           if (i === 5) {
//             landing.style.cssText =
//               "background-image :URL('../Images/office_work_interior_80538_1920x1080.jpg')";
//           }
//           if (i === 6) {
//             landing.style.cssText =
//               "background-image :URL('../Images/room_office_desk_39161_1920x1080.jpg')";
//           }
//           if (i === 7) {
//             landing.style.cssText =
//               "background-image :URL('../Images/table_office_flowers_113857_1920x1080.jpg')";
//           }
//         if(i === 7)
//         i = 0;
//         }
// }, 2000);

let imageArray = [
  "1658089",
  "1657858",
  "room_chair_table_179829_1920x1080",
  "office_work_interior_80538_1920x1080",
  "room_office_desk_39161_1920x1080",
  "table_office_flowers_113857_1920x1080",
];


//   setInterval(() => {
//   let ran = Math.floor(Math.random() * imageArray.length);
//   landing.style.cssText = `background-image :URL('../Images/${imageArray[ran]}.jpg'); transition: 1s;`;
// }, 7000);

// setInterval(() => {
//     let ran = Math.floor(Math.random() * 7);
//     landing.style.backgroundImage = `url(../Images/${imageArray[ran]}.jpg)`
// }, 2000);

let links = document.querySelectorAll(".header-area ul li a");
links.forEach((link) => {
  link.addEventListener("click", (eve) => {
    links.forEach((link) => {
      link.classList.remove("active");
    });
    eve.target.classList.add("active");
    // eve.target.style.color = "blue";
    // console.log(eve.target.style);
  });
});

// links.addEventListener("click", (eve)=>{
//   // for (let i = 0; i < links.length; i++) {
//   //   links[i].classList.remove("active");

//   // }

//   // links.forEach((link,i)=>{
//   //   link.classList.remove("active");
//   //   if(eve.targert === link)
//   //   link.classList.add("active");
//   // })

// })

// onclick = ()=> {
// links.forEach(link){
//   link.classList.remove("active");
// }
// }

let colorLis = document.querySelectorAll(".setting-container ul li");
let localStorageMainColor = {};

colorLis.forEach((li) => {
  li.addEventListener("click", (eve) => {
    colorLis.forEach((list) => {
      list.classList.remove("active-color");
    });
    eve.target.classList.add("active-color");
    document.documentElement.style.setProperty(
      "--main-color",
      eve.target.dataset.color
    );
    // another way to get the CSS style propert without using the dataset way by using window.getComputedStyle()
    // document.documentElement.style.setProperty("--main-color", window.getComputedStyle(eve.target).backgroundColor);

    localStorageMainColor = eve.target.dataset.color;
    window.localStorage.setItem("main-color", localStorageMainColor);
  });
});



let imageSpans = document.querySelectorAll(".image-setting-container span");

imageSpans.forEach(ele => {

  ele.addEventListener("click", (e)=>{
    imageSpans.forEach(ele => {
      ele.classList.remove("active");
});

    e.target.classList.add("active");
    window.localStorage.setItem("imageOption", e.target.dataset.image);
    
    if(e.target.dataset.image === "Yes"){
      console.log("yeso");
      intervalId = setInterval(() => {
       console.log("running");
  let ran = Math.floor(Math.random() * imageArray.length);
  landing.style.cssText = `background-image :URL('../Images/${imageArray[ran]}.jpg'); transition: 1s;`;
}, 1000);
 } else
    {
      clearInterval(intervalId);
    }
    // window.localStorage.setItem("image", e.targert.dataset.image);
  });
  
});





let gallaryPhotos = document.querySelectorAll(".gallary .gallary-photos img");

gallaryPhotos.forEach((photo)=>{
photo.addEventListener("click", ()=>{
  let overlay = document.createElement("div");
  overlay.className = "popup-overlay";
  document.body.appendChild(overlay);
  
let popup = document.createElement("div");
popup.className = "popup";

overlay.appendChild(popup);

if(photo.alt){
  let h3 = document.createElement("h3");
  h3.className = "popupTitle";
  let popupTitle = document.createTextNode(photo.alt);
  h3.appendChild(popupTitle);
  popup.appendChild(h3);
}


  let image = document.createElement("img");
  image.src = photo.src;
  image.className = "popupimg";
  
  popup.appendChild(image);
  
  let exit = document.createElement("span");
  exit.className = "exit";
  exit.textContent = "X";
  popup.appendChild(exit);


})
// document.body.addEventListener("click",(e)=>{
//   if(e.target === exit)
//   console.log(e.parentElement);
// })
})

document.body.addEventListener("click",(e)=>{
  if(e.target.className === "exit")
 
  e.target.parentElement.parentElement.remove();
  // وممكن انك تعملdocument.querySelector
  // وتختار العنصر اللي عايز تمسحه وتعمل عليه remove
});


let ratesDiv = document.querySelector(".rates");
let rates = document.querySelectorAll(".rates .skill span");
console.log(window.scrollY);
console.log(ratesDiv.offsetTop - 100);

window.onscroll = function(){
  rates.forEach((ele)=>{
    ele.style.setProperty("transition", ".7s");
    if(window.scrollY >= ratesDiv.offsetTop - 300 && window.scrollY <= (ratesDiv.offsetTop + ratesDiv.offsetHeight) -100){
      ele.style.width = ele.dataset.rate;
    }else{
      ele.style.width = 0;
    }
  })
}
