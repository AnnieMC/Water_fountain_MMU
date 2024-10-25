const locationSelect = document.getElementById("location-select");
const locationsDivs = document.querySelectorAll(".locations > div");

const toggleHidden = () => {
  locationsDivs.forEach((div) => {
    if (div.classList.contains(`${locationSelect.value}-info`)) {
      div.classList.remove("hidden");
    } else {
      div.classList.add("hidden");
    }
  });
};

locationSelect.addEventListener("change", toggleHidden);

toggleHidden();

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}
