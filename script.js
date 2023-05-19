var swiper = new Swiper(".home-slider", {
  spaceBetween: 20,
  effect: "fade",
  grabCursor: true,
  loop: true,
  centeredSlides: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
function calculateBMI() {
  var weight = parseFloat(document.getElementById("weight").value);
  var height = parseFloat(document.getElementById("height").value);

  // Checking if weight and height are valid numbers
  if (isNaN(weight) || isNaN(height)) {
    alert("Please enter valid values for weight and height.");
    return;
  }

  // Calculating BMI
  var bmi = weight / (height * height);

  document.getElementById("result").innerHTML =
    "Your BMI is: " + bmi.toPrecision(4);
  if (bmi < 18) {
    //weight gain
    document.getElementById("out").innerText =
      "According to your BMI you should try to 'GAIN WEIGHT'";
    document.getElementById("next").innerHTML =
      "<a href='index.html'><button >NEXT</button></a>";
  } else if (bmi >= 18 && bmi <= 24) {
    //bulk
    document.getElementById("out").innerText =
      "According to your BMI you should try to 'BULK'";
    document.getElementById("next").innerHTML =
      "<a href='index.html'><button  >NEXT</button></a>";
  } else {
    //weight losss
    document.getElementById("out").innerText =
      "According to your BMI you should try to 'WEIGHT LOSS'";
    document.getElementById("next").innerHTML =
      "<a href='index.html'><button >NEXT</button></a>";
  }
}
