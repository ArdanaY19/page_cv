
document.getElementById("email").addEventListener("mouseover", function () {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "ardanaariyanto87@gmail.com";
    this.appendChild(popup);
});

document.getElementById("linkedin").addEventListener("mouseover", function () {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "https://www.linkedin.com/in/ardana-yuli-ariyanto/";
    this.appendChild(popup);
});

document.getElementById("github").addEventListener("mouseover", function () {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.innerText = "https://github.com/ArdanaY19";
    this.appendChild(popup);
});