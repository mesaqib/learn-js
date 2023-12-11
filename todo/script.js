let addItem = document.querySelector("#add-item");

let itemList = document.querySelector("#item-list");

let createSpan = document.createElement;

function addListItem() {
  inputItem = document.querySelector("#input-item").value;
  let deletebtn = document.createElement("img");

  if (inputItem === "") {
    let show = document.querySelector(".model");
    show.classList.add("model-show");

  } else {
    let createli = document.createElement("li");
    var span = document.createElement("SPAN");
    var txt = document.createTextNode(inputItem);
    span.appendChild(txt);
    createli.appendChild(span);

    deletebtn.src = "trash.png";
    createli.appendChild(deletebtn);
    itemList.appendChild(createli);
    document.getElementById("input-item").value = "";
  }

  deletebtn.addEventListener("click", function () {
    deletebtn.parentNode.remove();
    console.log("delete");
  });
}

let modelClose = document.querySelector('#modelBtn');
modelClose.addEventListener('click', function () {
         let show = document.querySelector(".model");
        show.classList.remove("model-show");
})


let date = new Date();
let dayName = date.getDay();
let getDate = date.getDate();
let getMonth = date.getMonth();
let getYear = date.getFullYear();

document.querySelector('#get-date').innerHTML = getDate;
document.querySelector("#fullYear").innerHTML = getYear;

if (dayName === 1 || getMonth === 1) {
  document.querySelector('#day').innerHTML = 'Monday'
  document.querySelector("#month").innerHTML = "Jan";
}
if (dayName === 2 || getMonth === 2) {
  document.querySelector("#day").innerHTML = "Tuesday";
  document.querySelector("#month").innerHTML = "Feb";
}
if (dayName === 3 || getMonth === 3) {
  document.querySelector("#day").innerHTML = "Wednesday";
  document.querySelector("#month").innerHTML = "March";
}
if (dayName === 4 || getMonth === 4) {
  document.querySelector("#day").innerHTML = "Thursday";
  document.querySelector("#month").innerHTML = "April";
}
if (dayName === 5 || getMonth === 5) {
  document.querySelector("#day").innerHTML = "Friday";
  document.querySelector("#month").innerHTML = "May";
}
if (dayName === 6 || getMonth === 6) {
  document.querySelector("#day").innerHTML = "Saturday";
  document.querySelector("#month").innerHTML = "June";
}
if (dayName === 7 || getMonth === 7) {
  document.querySelector("#day").innerHTML = "Sunday";
  document.querySelector("#month").innerHTML = "July";
}

if (getMonth === 8) {
  document.querySelector("#month").innerHTML = "Aug";
}
if (getMonth === 9) {
  document.querySelector("#month").innerHTML = "Sep";
}
if (getMonth === 10) {
  document.querySelector("#month").innerHTML = "Oct";
}
if (getMonth === 11) {
  document.querySelector("#month").innerHTML = "Nov";
}
if (getMonth === 12) {
  document.querySelector("#month").innerHTML = "Dec";
}

