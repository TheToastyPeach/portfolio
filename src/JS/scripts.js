const images = document.querySelectorAll(
    ".postImageGallery img, .postImageGalleryBot img, .postImageVideo img"
  );
  const overlay = document.getElementById("imageOverlay");
  const overlayImage = document.getElementById("overlayImage");

  images.forEach((image) => {
    image.addEventListener("click", () => {
      overlayImage.src = image.src;
      overlay.style.display = "flex";
    });
  });

  function closeOverlay() {
    overlay.style.display = "none";
    overlayImage.src = "";
  }

  document.addEventListener("DOMContentLoaded", function() {
    var img = document.getElementsByClassName("postImageVideo");
    if (!img.src || img.src.trim() === "") {
        img.classList.add("hidden");
    }
});