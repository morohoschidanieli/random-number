let min;
let max;
let generate;
document.querySelector(".generate").addEventListener("click", function () {
  min = parseInt(document.getElementById("min").value);
  max = parseInt(document.getElementById("max").value);
  document.getElementById("min").value = min;
  document.getElementById("max").value = max;
  if (max < min) {
    document.getElementById("min").value = max;
    document.getElementById("max").value = min;
    console.log(min, max);
  }

  document.querySelector(".result").textContent = animationGenerate(min, max);
});
