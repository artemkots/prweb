document.addEventListener("DOMContentLoaded", function () {
    const text = document.getElementById("text");
    const buttons = {
        changeColor: ["red", "blue", "green", "purple", "black"],
        changeFontSize: ["16px", "20px", "24px", "30px", "36px"],
        changeBackground: ["lightgray", "lightblue", "lightgreen", "pink", "white"]
    };

    // Відновлення стилів із localStorage
    Object.keys(buttons).forEach(key => {
        if (localStorage.getItem(key)) {
            applyStyle(key, localStorage.getItem(key));
        }
    });

    if (localStorage.getItem("isHidden") === "true") {
        text.classList.add("hidden");
    }

    function applyStyle(property, value) {
        if (property === "changeColor") text.style.color = value;
        if (property === "changeFontSize") text.style.fontSize = value;
        if (property === "changeBackground") document.body.style.backgroundColor = value;
    }

    function randomValue(array) {
        return array[Math.floor(Math.random() * array.length)];
    }

    document.getElementById("changeColor").addEventListener("click", function () {
        let value = randomValue(buttons.changeColor);
        applyStyle("changeColor", value);
        localStorage.setItem("changeColor", value);
    });

    document.getElementById("changeFontSize").addEventListener("click", function () {
        let value = randomValue(buttons.changeFontSize);
        applyStyle("changeFontSize", value);
        localStorage.setItem("changeFontSize", value);
    });

    document.getElementById("changeBackground").addEventListener("click", function () {
        let value = randomValue(buttons.changeBackground);
        applyStyle("changeBackground", value);
        localStorage.setItem("changeBackground", value);
    });

    document.getElementById("toggleText").addEventListener("click", function () {
        text.classList.toggle("hidden");
        localStorage.setItem("isHidden", text.classList.contains("hidden"));
    });

    document.getElementById("reset").addEventListener("click", function () {
        localStorage.clear();
        location.reload();
    });
});