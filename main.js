let clr1 = document.getElementById("clr1")
let clr2 = document.getElementById("clr2")
let arleft = document.getElementById("arleft")
let arright = document.getElementById("arright")
let copyBtn = document.getElementById("copyBtn");
const sfx = new Audio('./copy.wav');
let colorPickerRight = document.getElementById("colorPickerRight");
let colorPickerLeft = document.getElementById("colorPickerLeft");






let arr1 = [
    '#2b5876',
    '#AA076B',
    '#FF512F',
    '#F09819',
    '#E55D87',
    '#003973',
    '#D31027',
    '#603813',
    '#ff6e7f',
    '#1A2980',
    '#6a11cb',
    '#667eea',
    '#96fbc4',
    '#13547a',
    '#E3FDF5',
    '#f83600',
    '#09203f',
    '#cc208e',


]
let arr2 = [
    '#4e4376',
    '#61045F',
    '#DD2476',
    '#EDDE5D',
    '#5FC3E4',
    '#E5E5BE',
    '#EA384D',
    '#b29f94',
    '#bfe9ff',
    '#26D0CE',
    '#2575fc',
    '#764ba2',
    '#f9f586',
    '#80d0c7',
    '#FFE6FA',
    '#f9d423',
    '#537895',
    '#6713d2',

]

// change website bg
let i = 0;
let tes = false;
// change website bg [right]
arright.onclick = function() {

    if (tes = true) {
        if (i <= arr1.length - 2) {
            i++;
        } else {
            i = 0;
        }
    }

    // change background
    document.body.style.backgroundImage = `linear-gradient(to right, ${arr1[i]}, ${arr2[i]})`;

    // change code
    document.getElementById("inp").value = `background-image : linear-gradient(to right, ${arr1[i]}, ${arr2[i]});`;

    // change colors
    document.getElementById("clr1").value = `${arr1[i]}`;
    document.getElementById("clr2").value = `${arr2[i]}`;
    // increese the counter

    // change colorwheel
    document.getElementById("colorPickerLeft").value = `${arr1[i]}`;
    document.getElementById("colorPickerRight").value = `${arr2[i]}`;

    // change copy btn
    copyBtn.style.backgroundImage = `linear-gradient(to right, ${arr1[i]}, ${arr2[i]})`;

    // change colorPicker
    colorPickerLeft.style.backgroundColor = arr1[i];
    colorPickerRight.style.backgroundColor = arr2[i];

}

// change website bg [left]
arleft.onclick = function() {
    // dicreasing the counter
    if (i > 0) {
        i--;
    } else {
        i = arr1.length - 1;
    }

    // change background
    document.body.style.backgroundImage = `linear-gradient(to right, ${arr1[i]}, ${arr2[i]})`;

    // change code
    document.getElementById("inp").value = `background-image : linear-gradient(to right, ${arr1[i]}, ${arr2[i]});`;

    // change colors
    document.getElementById("clr1").value = `${arr1[i]}`;
    document.getElementById("clr2").value = `${arr2[i]}`;

    // change colorwheel
    document.getElementById("colorPickerLeft").value = `${arr1[i]}`;
    document.getElementById("colorPickerRight").value = `${arr2[i]}`;

    // change copy btn
    copyBtn.style.backgroundImage = `linear-gradient(to right, ${arr1[i]}, ${arr2[i]})`;

    // change colorPicker
    colorPickerLeft.style.backgroundColor = arr1[i];
    colorPickerRight.style.backgroundColor = arr2[i];

}




// copy colors
function copyClr(id) {
    //select text
    document.getElementById(id).select();
    document.getElementById(id).setSelectionRange(0, 99999);

    // copy text
    navigator.clipboard.writeText(document.getElementById(id).value);

    // alert("Copied the text: " + document.getElementById(id).value);

    // show copy
    let val = document.getElementById(id).value;
    document.getElementById(id).value = "coppied";
    document.getElementById(id).style.color = "#fff";
    document.getElementById(id).style.borderRadius = "20px";
    document.getElementById(id).style.backgroundColor = "#444";
    document.getElementById(id).style.boxShadow = "0px 0px 10px 0px rgba(0,0,0,0.5)";
    // hide copy
    setTimeout(function() {
        document.getElementById(id).value = val;
        document.getElementById(id).style.color = "#111";
        document.getElementById(id).style.borderRadius = "0px";
        document.getElementById(id).style.backgroundColor = "#fff";
        document.getElementById(id).style.boxShadow = "0px 0px 0px 0px rgba(0,0,0,0)";
    }, 900)


}




// copy code 
function copyCode() {

    // select text
    document.getElementById("inp").select();
    document.getElementById("inp").setSelectionRange(0, 99999);

    /* Copy the text */
    navigator.clipboard.writeText(document.getElementById("inp").value);

    // show copy page
    document.querySelector(".copyPage").style.opacity = "1";

    // audio on
    sfx.play();
    // hide copy page
    setTimeout(function() {
        document.querySelector(".copyPage").style.opacity = "0";
    }, 2000)


}




// mode function
let dark = document.querySelector("nav .mode");
let modeCounter = 0;
dark.onclick = function() {
    if (modeCounter == 0) {
        document.body.style.setProperty("--main-color", "#0D1723");
        document.body.style.setProperty("--font-color-main", "#eee");
        document.body.style.setProperty("--second-color", "rgba(0, 0, 0, 0.7)");
        modeCounter++;
    } else {
        document.body.style.setProperty("--main-color", "#fff");
        document.body.style.setProperty("--font-color-main", "#0D1723");
        document.body.style.setProperty("--second-color", "rgba(255, 255, 255, 0.7)");
        modeCounter--;
    }

}



// all gradient 
function gradPage() {
    document.getElementById('allGrad').style.bottom = "0%";


}



// close all gradient 
function gradPageClose() {
    document.getElementById('allGrad').style.bottom = "101%";


}



// fill boxs
for (let j = 0; j <= 17; j++) {

    document.getElementById(`box${j}`).style.backgroundImage = `linear-gradient(to right, ${arr1[j]}, ${arr2[j]})`;

    document.getElementById(`box${j}`).innerHTML = `
    <div class="up">
    <input class="val" value="${arr1[j]}" type="text" id="clro${j}" onclick="copyClr(this.id)" autocomplete="off" spellcheck="false">
    <input class="val" value="${arr2[j]}" type="text" id="clro2${j}" onclick="copyClr(this.id)" autocomplete="off" spellcheck="false">
</div>

<div class="secCode">
    <textarea onclick="copyCodePage(this.id)" type="text" class="code" id="inpo${j}">background-image : linear-gradient(to right, ${arr1[j]}, ${arr2[j]});</textarea>
    <div >COPPIED</div>
</div>
    `

}


// copyCodePage

function copyCodePage(id) {

    // select text
    document.getElementById(id).select();
    document.getElementById(id).setSelectionRange(0, 99999);

    /* Copy the text */
    navigator.clipboard.writeText(document.getElementById(id).value);

    // show coppied
    let stebn = document.getElementById(id).value;
    document.getElementById(id).value = "COPPIED";
    document.getElementById(id).style.fontSize = "1.6rem";
    document.getElementById(id).style.fontWeight = "700";
    document.getElementById(id).style.pointerEvents = "none";

    //return value
    setTimeout(function() {
        document.getElementById(id).style.fontSize = "0.8rem";
        document.getElementById(id).style.fontWeight = "400";
        document.getElementById(id).style.pointerEvents = "auto";
        document.getElementById(id).value = stebn;
    }, 1500)

    // // show copy page
    // document.querySelector(".secCode div").style.opacity = "1";

    // // hide copy page
    // setTimeout(function() {
    //     document.querySelector(".secCode div").style.opacity = "0";
    // }, 2000)


}
