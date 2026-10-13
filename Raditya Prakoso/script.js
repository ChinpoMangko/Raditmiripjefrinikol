```javascript
const menuBtn = document.getElementById("menuBtn");
const navigation = document.getElementById("navigation");

menuBtn.addEventListener("click", function () {
    navigation.classList.toggle("open");

    if (navigation.classList.contains("open")) {
        menuBtn.textContent = "TUTUP ✕";
    } else {
        menuBtn.textContent = "MENU ☰";
    }
});

document.querySelectorAll("#navigation a").forEach(function (link) {
    link.addEventListener("click", function () {
        navigation.classList.remove("open");
        menuBtn.textContent = "MENU ☰";
    });
});
```
