const slider = document.getElementById("slider");

slider.addEventListener("input", (e) => {
  const sliderValue = e.target.value;
  const img = document.querySelector(".foreground-img");

  img.style.width = `${sliderValue}%`;
});

// slider.addEventListener("click", () => console.log("click"));
