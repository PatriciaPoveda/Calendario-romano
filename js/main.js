"use strict";

const apiMonth31 = [
  "Kalendas",
  "Ante Diem IV Nonas",
  "Ante Diem V Nonas",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONAS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDUS",
  "Ante Diem XVII Kalendas",
  "Ante Diem XVI Kalendas",
  "Ante Diem XV Kalendas",
  "Ante Diem XIV Kalendas",
  "Ante Diem XIII Kalendas",
  "Ante Diem XII Kalendas",
  "Ante Diem XI Kalendas",
  "Ante Diem X Kalendas",
  "Ante Diem IX Kalendas",
  "Ante Diem VIII Kalendas",
  "Ante Diem VII Kalendas",
  "Ante Diem VI Kalendas",
  "Ante Diem V Kalendas",
  "Ante Diem IV Kalendas",
  "Ante Diem III Kalendas",
  "Pridie Kalendas",
];
const apiMonth29 = [
  "Kalendas",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONAS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDUS",
  "Ante Diem XVII Kalendas",
  "Ante Diem XVI Kalendas",
  "Ante Diem XV Kalendas",
  "Ante Diem XIV Kalendas",
  "Ante Diem XIII Kalendas",
  "Ante Diem XII Kalendas",
  "Ante Diem XI Kalendas",
  "Ante Diem X Kalendas",
  "Ante Diem IX Kalends",
  "Ante Diem VIII Kalendas",
  "Ante Diem VII Kalendas",
  "Ante Diem VI Kalendas",
  "Ante Diem V Kalendas",
  "Ante Diem IV Kalendas",
  "Ante Diem III Kalendas",
  "Pridie Kalendas",
];
const apiMonth28 = [
  "Kalendas",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONAS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDUS",
  "Ante Diem XVI Kalendas",
  "Ante Diem XV Kalendas",
  "Ante Diem XIV Kalendas",
  "Ante Diem XIII Kalendas",
  "Ante Diem XII Kalendas",
  "Ante Diem XI Kalendas",
  "Ante Diem X Kalendas",
  "Ante Diem IX Kalendas",
  "Ante Diem VIII Kalendas",
  "Ante Diem VII Kalendas",
  "Ante Diem VI Kalendas",
  "Ante Diem V Kalendas",
  "Ante Diem IV Kalendas",
  "Ante Diem III Kalendas",
  "Pridie Kalendas",
];
const dayValue = document.querySelector(".js-inputDay");
const monthValue = document.querySelector(".js-inputMonth");
const btn = document.querySelector(".js-Button");
const date = document.querySelector(".js-text");

let day = "";
let month = "";
let htmlCode = "";

const getInputValue = (ev) => {
  ev.preventDefault();
  day = dayValue.value;
  month = monthValue.value;
  condicionalName();
};

const condicionalName = () => {
  switch (month.toLowerCase()) {
    case "enero":
      month = "Ianuarias";
      getDay29();
      break;
    case "febrero":
      month = "Februarias";
      getDay29();
      break;
    case "marzo":
      month = "Martias";
      getDay31();
      break;
    case "abril":
      month = "Apriles";
      getDay29();
      break;
    case "mayo":
      month = "Maias";
      getDay31();
      break;
    case "junio":
      month = "Iunias";
      getDay29();
      break;
    case "julio":
      month = "Quintiles";
      getDay31();
      break;
    case "agosto":
      month = "Sextiles";
      getDay29();
      break;
    case "septiembre":
      month = "Septembres";
      getDay29();
      break;
    case "octubre":
      month = "Octobres";
      getDay31();
      break;
    case "noviembre":
      month = "Novembres";
      getDay29();
      break;
    case "diciembre":
      month = "Decembres";
      getDay29();
      break;

    default:
      console.log("No existe ese mes en el calendario romano");
      date.innerHTML = "No existe ese mes en el calendario romano";
      break;
  }
};

const getDay31 = () => {
  const dayNumber = parseInt(day) - 1;
  if (dayNumber <= 30) {
    date.innerHTML = `${apiMonth31[dayNumber]}` + " " + ` ${month}`;
  } else {
    date.innerHTML = "No existe ese día en el calendario romano";
  }
};

const getDay29 = () => {
  const dayNumber = parseInt(day) - 1;
  if (month === "Februarias" && dayNumber <= 27) {
    date.innerHTML = `${apiMonth28[dayNumber]}` + " " + ` ${month}`;
  } else if (month !== "Februarias" && dayNumber <= 28) {
    date.innerHTML = `${apiMonth29[dayNumber]}` + " " + ` ${month}`;
  } else {
    date.innerHTML = "No existe ese día en el calendario romano";
  }
};

btn.addEventListener("submit", getInputValue);
