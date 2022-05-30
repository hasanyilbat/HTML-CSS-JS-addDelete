console.log("**** app.js *******");

const dilInput = document.querySelector(".diller");
const silBtn = document.getElementById("sil");
const ekleBtn = document.getElementById("ekle");
const dilSection = document.querySelector("#dil-section");

const ul = document.createElement("ul");
dilSection.appendChild(ul);

console.log(dilSection.children[0]);
console.log(dilSection.parentNode.parentNode);

// const h1 = ul.closest(".container").firstChild;
const h1 = ul.closest(".container").firstElementChild;
console.log(h1);

h1.style.color = "red";

butons = ul.closest(".container").querySelectorAll("btn");
console.log(butons);

ekleBtn.onclick = function () {
  if (!dilInput.value) {
    alert("Lütfen bir dil giriniz");
  } else {
    ul.innerHTML += `<li>${dilInput.value}</li>`;
    dilInput.value = "";
    javascriptKontrol();
  }
};

const javascriptKontrol = () => {
  document.querySelectorAll("ul li").forEach((dil) => {
    const kucukharf = dil.textContent.toLowerCase();
    if (kucukharf === "javascript") {
      dil.className = "red";
    }
  });
};

silBtn.onclick = function () {
  if (ul.childElementCount > 0) {
    ul.removeChild(ul.lastElementChild);
  } else {
    alert("Silinecek bir dil yok.");
  }
};

dilInput.addEventListener("keydown", (e) => {
  console.log(e);
  if (e.code === "Enter") {
    ekleBtn.click();
  }
  if (e.code === "Delete") {
    silBtn.click();
  }
});
window.onload = () => {
  javascriptKontrol();
  dilInput.focus();
};
