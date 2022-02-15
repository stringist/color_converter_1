window.addEventListener("load", start);


// let colorPicker;
function start() {
    const colorPicker = document.querySelector("#color-picker");
    let color = document.querySelector("#color-picker").value;

    document.querySelector("#color-square").style.backgroundColor = color;
    document.querySelector("#HEX").innerHTML = color;
    let rgbColor = hexToRGB(color);
    document.querySelector("#RGB").innerHTML = rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b;
    document.querySelector("#HSL").innerHTML = rgbToHSL(rgbColor.r, rgbColor.g, rgbColor.b);
    colorPicker.addEventListener("input", updateColor);
    colorPicker.addEventListener("change", updateColor);
    // colorPicker.select();
}

function updateColor(event) {
    console.log("color", event);
    let color = `${event.target.value}`;
    document.querySelector("#color-square").style.backgroundColor = color;
    document.querySelector("#HEX").innerHTML = color;
    let rgbColor = hexToRGB(color);
    document.querySelector("#RGB").innerHTML = rgbColor.r + ", " + rgbColor.g + ", " + rgbColor.b;
    document.querySelector("#HSL").innerHTML = rgbToHSL(rgbColor.r, rgbColor.g, rgbColor.b);
    // document.querySelector("#CSS").innerHTML("")
    // colorPicker.addEventListener("input", updateColor);
}


function hexToRGB(hexString) {
    const r = parseInt((hexString.substring(1, 3)), 16);
    const g = parseInt((hexString.substring(3, 5)), 16);
    const b = parseInt((hexString.substring(5, 7)), 16);
    console.log(r, g, b);
    return { r, g, b };
}

function rgbToHex(rgbObject) {
    const hexCode = "#" + rgbObject.r.toString(16) + rgbObject.g.toString(16) + rgbObject.b.toString(16);
    console.log(hexCode);
    return hexCode;
}

function cssToRGB(cssString) {
    let cssNumbers = cssString.substring(4, cssString.lastIndexOf(`)`)).split(", ");

    const r = parseInt(cssNumbers[0]);
    const g = parseInt(cssNumbers[1]);
    const b = parseInt(cssNumbers[2]);

    console.log(r, g, b);
    return { r, g, b };
}

function rgbToHSL(r, g, b) {
    // r /= 255;
    // g /= 255;
    // b /= 255;

    let h, s, l;

    const min = Math.min(r, g, b);
    const max = Math.max(r, g, b);

    if (max === min) {
        h = 0;
    } else
    if (max === r) {
        h = 60 * (0 + (g - b) / (max - min));
    } else
    if (max === g) {
        h = 60 * (2 + (b - r) / (max - min));
    } else
    if (max === b) {
        h = 60 * (4 + (r - g) / (max - min));
    }

    if (h < 0) { h = h + 360; }

    l = (min + max) / 2;

    if (max === 0 || min === 1) {
        s = 0;
    } else {
        s = (max - l) / (Math.min(l, 1 - l));
    }
    // multiply s and l by 100 to get the value in percent, rather than [0,1]
    s *= 100;
    l *= 100;

    console.log("hsl(%f,%f%,%f%)", h, s, l);
    let roundedH = Math.floor(h)
    let roundedS = Math.floor(s)
    let roundedL = Math.floor(l)

    return roundedH + " " + roundedS + " " + roundedL;
}