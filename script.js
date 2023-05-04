document.addEventListener("DOMContentLoaded", function () {
  const generateButton = document.querySelector("#generate");
  const minInput = document.querySelector("#min");
  const maxInput = document.querySelector("#max");
  const resultDisplay = document.querySelector("#number");

  function generateRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  function displayRandomNumber() {
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    if (isNaN(min) || isNaN(max)) {
      resultDisplay.textContent = "Error: Please enter valid numbers";
      return;
    }

    if (min >= max) {
      resultDisplay.textContent = "Error: Minimum number must be less than maximum number";
      return;
    }

    const randomNumber = generateRandomNumber(min, max);
    resultDisplay.textContent = randomNumber;
  }

  generateButton.addEventListener("click", displayRandomNumber);
});
