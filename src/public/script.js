const fileInput = document.getElementById("fileInput");
const uploadStatus = document.getElementById("uploadStatus");
const container = document.querySelector(".container");

document.addEventListener("paste", onFilePaste);
container.addEventListener("drop", onFileDrop);
fileInput.addEventListener("change", onFileChange);

function onFileChange() {
  const file = fileInput.files[0];
  if (file) handleUpload(file);
}

function onFileDrop(event) {
  event.preventDefault();
  let files = event.dataTransfer.files;
  for (let i = 0; i < files.length; i++) {
    handleUpload(files[i]);
  }
}

function onFilePaste(event) {
  const items = (event.clipboardData || event.originalEvent.clipboardData)
    .items;
  for (let index in items) {
    const item = items[index];
    if (item.kind === "file") {
      const blob = item.getAsFile();
      const reader = new FileReader();
      reader.onload = (event) => {
        const base64Data = event.target.result.split(",")[1];
        const data = window.atob(base64Data);
        const ia = new Uint8Array(data.length);
        for (let i = 0; i < data.length; i++) {
          ia[i] = data.charCodeAt(i);
        }
        const blob = new Blob([ia.buffer], { type: "image/jpeg" });
        const file = new File([blob], "screenshot.jpg");
        handleUpload(file);
      };
      reader.readAsDataURL(blob);
    }
  }
}

function onFileUrlCopy() {
  const imageUrl = document.getElementById("imageUrl");
  imageUrl.select();
  document.execCommand("copy");
  document.querySelector(".copy-btn").textContent = "✨ Copied";
  setTimeout(() => {
    document.querySelector(".copy-btn").textContent = "Copy URL";
  }, 1000);
}

function handleUpload(file) {
  const formData = new FormData();
  formData.append("file", file);
  document.querySelector(".upload-btn").textContent = "Uploading...";
  fetch("/upload", { method: "POST", body: formData })
    .then((response) => response.json())
    .then((data) => {
      const src = window.location.origin + data[0].src;
      uploadStatus.innerHTML = `
                <div class="alert alert-success">Upload successful! 🥳</div>
                <div class="input-group">
                  <input type="text" class="form-control" id="imageUrl" value="${src}">
                  <div class="input-group-append">
                    <button class="btn btn-outline-secondary copy-btn" type="button">Copy URL</button>
                  </div>
                </div>
                <br />
                <img src="${src}" class="img-fluid mb-3" alt="Uploaded Image">
            `;

      document
        .querySelector(".copy-btn")
        .addEventListener("click", onFileUrlCopy);
    })
    .catch(() => {
      uploadStatus.innerHTML =
        '<div class="alert alert-danger">Upload failed. Please try again.</div>';
    })
    .finally(() => {
      document.querySelector(".upload-btn").textContent = "Upload an Image";
    });
}
