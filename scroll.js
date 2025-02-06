const container = document.querySelector(".horizontal-scroll");
let isDown = false;
let startX;
let scrollLeft;

// Drag Scroll
container.addEventListener("mousedown", (e) => {
  isDown = true;
  container.classList.add("active");
  startX = e.pageX - container.offsetLeft;
  scrollLeft = container.scrollLeft;
});

container.addEventListener("mouseleave", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mouseup", () => {
  isDown = false;
  container.classList.remove("active");
});

container.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - container.offsetLeft;
  const walk = (x - startX) * 2; // Sesuaikan kecepatan geser
  container.scrollLeft = scrollLeft - walk;
});

// Scroll dengan tombol panah
document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowRight") {
    container.scrollLeft += 100; // Scroll ke kanan
  } else if (e.key === "ArrowLeft") {
    container.scrollLeft -= 100; // Scroll ke kiri
  }
});
