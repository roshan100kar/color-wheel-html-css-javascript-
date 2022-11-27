let demo, arr, i;
arr = [];

demo = document.querySelector(".demo");

for (i = 0; i <= 360; i++) {
  arr.push(`hsl(${i}, 100%, 50%)`);
}
arr = arr.toString();

demo.style.backgroundImage = `conic-gradient(${arr})`;
