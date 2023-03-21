//BUTTONS
const accessories = ["Earings", "Flower", "Glasses", "Headphones"];

const background = ["Blue-1", "Blue-2", "Blue-3", "Dark-Blue-1", "Dark-Blue-2", "Dark-Blue-3", "Green-1", "Green-2", "Green-3", "Grey-1", "Grey-2", "Grey-3", "Red-1", "Red-2", "Red-3", "Yellow-1", "Yellow-2", "Yellow-3"];

const ears = ["Default", "Tilt-Backward", "Tilt-Forward"];

const eyes = ["Default", "Angry", "Naughty", "Panda", "Smart", "Star"];

const hair = ["Default", "Bang", "Curls", "Elegant", "Fancy", "Quiff", "Short"];

const leg = ["Default", "Bubble-Tea", "Cookie", "Game-Console", "Tilt-Backward", "Tilt-Forward"];

const mouth = ["Default", "Astonished", "Eating", "Laugh", "Tongue"];

const neck = ["Default", "Bend-Backward", "Bend-Forward", "Thick"];
//----------------------------------------------------------------


//CREATE STYLE
const style = document.getElementById("style");
//----------------------------------------------------------------


//HAIR BUTTON
function btnHair() {
    style.innerHTML = ""
    hair.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("hair").src = "alpaca/hair/" +
                element.toLowerCase() + ".png"
        };
    });
}
//EARS BUTTON
function btnEars() {
    style.innerHTML = ""
    ears.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("ears").src = "alpaca/ears/" +
                element.toLowerCase() + ".png"
        };
    });
}
//EYES BUTTON
function btnEyes() {
    style.innerHTML = ""
    eyes.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("eyes").src = "alpaca/eyes/" +
                element.toLowerCase() + ".png"
        };
    });
}
//MOUTH BUTTON
function btnMouth() {
    style.innerHTML = ""
    mouth.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("mouth").src = "alpaca/mouth/" +
                element.toLowerCase() + ".png"
        };
    });
}
//NECK BUTTON
function btnNeck() {
    style.innerHTML = ""
    neck.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("neck").src = "alpaca/neck/" +
                element.toLowerCase() + ".png"
        };
    });
}
//LEG BUTTON
function btnLeg() {
    style.innerHTML = ""
    leg.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("leg").src = "alpaca/leg/" +
                element.toLowerCase() + ".png"
        };
    });
}
//ACCESSORIES BUTTON
function btnAccessories() {
    style.innerHTML = ""
    accessories.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("accessories").src = "alpaca/accessories/" +
                element.toLowerCase() + ".png"
        };
    });
}
//BACKGROUND BUTTON
function btnBackground() {
    style.innerHTML = ""
    background.forEach(element => {
        const btn = document.createElement("button");
        style.appendChild(btn);
        btn.setAttribute("id", element);
        document.getElementById(element).innerHTML = element;
        document.getElementById(element).onclick = function okBro() {
            document.getElementById("background").src = "alpaca/backgrounds/" +
                element.toLowerCase() + ".png"
        };
    });
}

function screenshot() {
    html2canvas(document.getElementById('mainImage')).then(function(canvas) {
        const a = document.createElement("a");
        a.href = canvas.toDataURL("image/jpeg");
        a.download = "My Alpaca.jpeg";
        a.click();
    })
}