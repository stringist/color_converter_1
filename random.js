window.addEventListener("load", randomBackground);

function randomBackground() {
    const cssColor = RGBToCSS(randomColor());
    console.log(cssColor);
    document.querySelector(".color-container").style.backgroundColor = cssColor;
}

function randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return { r, g, b };
}

function RGBToCSS(rgb) {
    const cssString = "rgb(" + rgb.r + ", " + rgb.g + ", " + rgb.b + ")";
    return cssString;
}