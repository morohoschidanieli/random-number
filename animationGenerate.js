function animationGenerate(min, max) {
  let x;
  let number = 0;

  var refreshIntervalId = setInterval(function () {
    if (number <= 10) {
      number++;
      x = Math.floor(Math.random() * (max - min + 1)) + min;
      document.querySelector(".result").textContent = x;
    } else {
      clearInterval(refreshIntervalId);
    }
  }, 50);
}
