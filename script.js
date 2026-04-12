const images = document.querySelectorAll(".clickable-img");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const close = document.getElementById("close");

// Open image
images.forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

// Close when clicking the X
close.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Close when clicking outside the image
lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});

// Prevent closing when clicking the image itself
lightboxImg.addEventListener("click", (e) => {
  e.stopPropagation();
});