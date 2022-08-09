const imageAndLogo = document.querySelector(".image-and-logo");
const textAndStyle = document.querySelector(".text-and-style");
const afterClickTextStyle = document.querySelector(".after-click-text-style");
const colors = document.querySelector(".colors");
const originalDiv = document.querySelector(".original");
const previewDiv = document.querySelector(".preview-section");
const mainDiv = document.querySelector(".main-section");
const afterClickDiv = document.querySelector(".after-click");
const cancelEditing = document.querySelector(".cancel-editing");
const confirmEditing = document.querySelector(".confirm-editing");
const confirmEditingTextStyle = document.querySelector(
  ".confirm-editing-text-style",
);
const cancelEditingTextStyle = document.querySelector(
  ".cancel-editing-text-style",
);
const imageIcon = document.querySelector(".bi-image");
const fontIconTextStyle = document.querySelector(".bi-fonts");
const okIcon = document.getElementById("bi-1");
const okIconTextStyle = document.getElementById("bi-2");
const okIconColor = document.getElementById("bi-3");
const fontIcon = document.getElementById("fi-1");
const fontIconContainerText = document.getElementById("fi-2");
const fontIconContainerColor = document.getElementById("fi-3");

// media checker
var x = window.matchMedia("(max-width:992px)");

// ********************************
imageAndLogo.addEventListener("click", () => {
  afterClickDiv.style.display = "block";
  originalDiv.style.display = "none";
  previewDiv.style.minHeight = "75vh";
});
textAndStyle.addEventListener("click", () => {
  afterClickTextStyle.style.display = "block";
  originalDiv.style.display = "none";
  previewDiv.style.minHeight = "65vh";
});
colors.addEventListener("click", () => {
  alert("this also checked");
});
cancelEditing.onclick = () => {
  afterClickDiv.style.display = "none";
  originalDiv.style.display = "block";
  previewDiv.style.minHeight = "75vh";
};
cancelEditingTextStyle.onclick = () => {
  afterClickTextStyle.style.display = "none";
  originalDiv.style.display = "block";
  previewDiv.style.minHeight = "75vh";
};
confirmEditing.onclick = () => {
  // match media

  if (x.matches) {
    imageAndLogo.style.backgroundColor = "none";
  } else {
    imageAndLogo.style.backgroundColor = "#FF0A7C";
    imageAndLogo.style.color = "white";
  }
  previewDiv.style.minHeight = "75vh";

  afterClickDiv.style.display = "none";
  originalDiv.style.display = "block";

  imageAndLogo.style.border = "none";
  imageIcon.style.display = "none";
  okIcon.style.display = "block";
  okIcon.style.color = "white";
  fontIcon.style.border = "2px solid white";
  fontIcon.style.backgroundColor = "#FFC0CB";
};

confirmEditingTextStyle.onclick = () => {
  // match media
  if (x.matches) {
    textAndStyle.style.backgroundColor = "none";
  } else {
    textAndStyle.style.backgroundColor = "#FF0A7C";
    textAndStyle.style.color = "white";
  }

  previewDiv.style.minHeight = "75vh";
  afterClickTextStyle.style.display = "none";
  originalDiv.style.display = "block";

  textAndStyle.style.border = "none";
  fontIconTextStyle.style.display = "none";
  okIconTextStyle.style.display = "block";
  okIconTextStyle.style.color = "white";
  fontIconContainerText.style.border = "2px solid white";
  fontIconContainerText.style.backgroundColor = "#FFC0CB";
};
