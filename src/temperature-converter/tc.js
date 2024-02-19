import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

let fahrenheit = document.querySelector("#fahrenheit");
let celsius = document.querySelector("#celsius");
document.querySelector("#convert").onclick = onConvertBtnClick;
document.querySelector("#reset").onclick = onResetBtnClick;

function onConvertBtnClick() {
  if (!fahrenheit.value && !celsius.value) {
    iziToast.error({
      message: "Search field is empty. Please input temperature value.",
      position: "topLeft",
      backgroundColor: "rgba(252, 179, 250)",
    });
  } else if (isNaN(fahrenheit.value) || isNaN(celsius.value)) {
    iziToast.error({
      message: "Only numbers are allowed! Please enter a number.",
      position: "topLeft",
      backgroundColor: "rgba(252, 179, 250)",
    });
  } else if (fahrenheit.value) {
    celsius.value = Math.round((5 / 9) * (fahrenheit.value - 32)) + "  degrees";
  } else {
    fahrenheit.value = Math.round(celsius.value * 1.8 + 32) + "  degrees";
  }
}

function onResetBtnClick() {
  celsius.value = "";
  fahrenheit.value = "";
}
