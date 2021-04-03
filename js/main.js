"use strict";

const apiMonth31 = [
  "Kalendis",
  "Ante Diem IV Nonas",
  "Ante Diem V Nonas",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONIS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDIBUS",
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
const apiMonth31Bis = [
  "Kalendis",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONIS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDIBUS",
  "Ante Diem XIX Kalendas",
  "Ante Diem XVIII Kalendas",
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
const apiMonth30 = [
  "Kalendis",
  "Ante Diem IV Nonas",
  "Ante Diem III Nonas",
  "Pridie Nonas",
  "NONIS",
  "Ante Diem VIII Idus",
  "Ante Diem VII Idus",
  "Ante Diem VI Idus",
  "Ante Diem V Idus",
  "Ante Diem IV Idus",
  "Ante Diem III Idus",
  "Pridie Idus",
  "IDIBUS",
  "Ante Diem XVIII Kalendas",
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
  "Kalendis Februariis",
  "Ante Diem IV Nonas Februarias",
  "Ante Diem III Nonas Februarias",
  "Pridie Nonas Februarias",
  "NONIS Februariis",
  "Ante Diem VIII Idus Februarias",
  "Ante Diem VII Idus Februarias",
  "Ante Diem VI Idus Februarias",
  "Ante Diem V Idus Februarias",
  "Ante Diem IV Idus Februarias",
  "Ante Diem III Idus Februarias",
  "Pridie Idus Februarias",
  "IDIBUS Februariis",
  "Ante Diem XVI Kalendas Martias",
  "Ante Diem XV Kalendas Martias",
  "Ante Diem XIV Kalendas Martias",
  "Ante Diem XIII Kalendas Martias",
  "Ante Diem XII Kalendas Martias",
  "Ante Diem XI Kalendas Martias",
  "Ante Diem X Kalendas Martias",
  "Ante Diem IX Kalendas Martias",
  "Ante Diem VIII Kalendas Martias",
  "Ante Diem VII Kalendas Martias",
  "Ante Diem VI Kalendas Martias",
  "Ante Diem V Kalendas Martias",
  "Ante Diem IV Kalendas Martias",
  "Ante Diem III Kalendas Martias",
  "Pridie Kalendas Martias",
  "Bis VI ante kalendas Martias",
];
const dayValue = document.querySelector(".js-inputDay");
const monthValue = document.querySelector(".js-inputMonth");
const btn = document.querySelector(".js-Button");
const date = document.querySelector(".js-text");

let day = "";
let month = "";
let htmlCode = "";
const latMonths = [
  "Ianuarias",
  "Februarias",
  "Martias",
  "Apriles",
  "Maias",
  "Iunias",
  "Quintiles",
  "Sextiles",
  "Septembres",
  "Octobres",
  "Novembres",
  "Decembres",
];
const ablMonths = [
  "Ianuariis",
  "Februariis",
  "Martiis",
  "Aprilibus",
  "Maiis",
  "Iuniis",
  "Quintilibus",
  "Sextilibus",
  "Septembribus",
  "Octobribus",
  "Novembribus",
  "Decembribus",
];
const spaMonths = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];
const getInputValue = (ev) => {
  ev.preventDefault();
  day = dayValue.value;
  month = monthValue.value;
  filterMonth();
};
const filterMonth = () => {
  const indexMonth = spaMonths.findIndex(
    (spaMonth) => spaMonth === month.toLowerCase()
  );
  month = indexMonth;
  getDay();
};

const getDay = () => {
  const dayNumber = parseInt(day) - 1;
  if (
    (dayNumber === 14 || dayNumber === 0 || dayNumber === 6) &&
    (month === 2 || month === 4 || month === 6 || month === 9)
  ) {
    date.innerHTML = `${apiMonth31[dayNumber]}` + " " + ` ${ablMonths[month]}`;
  } else if (
    dayNumber <= 13 &&
    (month === 2 || month === 4 || month === 6 || month === 9)
  ) {
    date.innerHTML = `${apiMonth31[dayNumber]}` + " " + ` ${latMonths[month]}`;
  } else if (
    dayNumber >= 15 &&
    dayNumber <= 30 &&
    (month === 2 || month === 4 || month === 6 || month === 9)
  ) {
    const resultMonth = month + 1;
    date.innerHTML =
      `${apiMonth31[dayNumber]}` + " " + ` ${latMonths[resultMonth]}`;
  } else if (
    (dayNumber === 12 || dayNumber === 0 || dayNumber === 4) &&
    (month === 0 || month === 7 || month === 11)
  ) {
    date.innerHTML =
      `${apiMonth31Bis[dayNumber]}` + " " + ` ${ablMonths[month]}`;
  } else if (dayNumber <= 11 && (month === 0 || month === 7 || month === 11)) {
    date.innerHTML =
      `${apiMonth31Bis[dayNumber]}` + " " + ` ${latMonths[month]}`;
  } else if (
    dayNumber >= 13 &&
    dayNumber <= 30 &&
    (month === 0 || month === 7 || month === 11)
  ) {
    const resultMonth = month + 1;
    date.innerHTML =
      `${apiMonth31Bis[dayNumber]}` + " " + ` ${latMonths[resultMonth]}`;
  } else if (
    (dayNumber === 12 || dayNumber === 0 || dayNumber === 4) &&
    (month === 3 || month === 5 || month === 8 || month === 10)
  ) {
    date.innerHTML = `${apiMonth30[dayNumber]}` + " " + ` ${ablMonths[month]}`;
  } else if (
    dayNumber <= 12 &&
    (month === 3 || month === 5 || month === 8 || month === 10)
  ) {
    date.innerHTML = `${apiMonth30[dayNumber]}` + " " + ` ${latMonths[month]}`;
  } else if (
    dayNumber >= 13 &&
    dayNumber <= 29 &&
    (month === 3 || month === 5 || month === 8 || month === 10)
  ) {
    const resultMonth = month + 1;
    date.innerHTML =
      `${apiMonth30[dayNumber]}` + " " + ` ${latMonths[resultMonth]}`;
  } else if (month === 1 && dayNumber <= 28) {
    date.innerHTML = apiMonth28[dayNumber];
  } else {
    date.innerHTML = "No existe ese día en el calendario romano";
  }
};

btn.addEventListener("submit", getInputValue);
