document.addEventListener("DOMContentLoaded", function () {
  const fileInput = document.querySelector('input[name="img"]');
  const previewContainer = document.createElement("div");
  previewContainer.className = "mt-3";

  if (fileInput) {
    fileInput.insertAdjacentElement("afterend", previewContainer);

    fileInput.addEventListener("change", function (e) {
      previewContainer.innerHTML = ""; // clear old preview
      const file = e.target.files[0];
      if (file && file.type.startsWith("image/")) {
        const img = document.createElement("img");
        img.src = URL.createObjectURL(file);
        img.className = "img-thumbnail shadow-sm";
        img.style.maxHeight = "200px";
        previewContainer.appendChild(img);
      }
    });
  }

  // Show spinner on form submit
  const form = document.querySelector("form");
  if (form) {
    form.addEventListener("submit", function () {
      const btn = form.querySelector("button[type='submit']");
      if (btn) {
        btn.disabled = true;
        btn.innerHTML = `
          <span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          Detecting...
        `;
      }
    });
  }
});
