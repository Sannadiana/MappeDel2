const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultBMIOutput = document.getElementById("resultBMIOutput");



let header = document.querySelector("#main-page-header");
header.style.padding = "2rem";
header.style.fontWeight = "bold";
header.style.fontSize = "1rem";
header.style.weight = "100%";

let logo = document.querySelector("#logo");
logo.style.height = "40px";
logo.style.float = "left";
logo.style.color;

let nav = document.querySelector("#main-nav-menu");
nav.style.float = "right";
nav.style.border = "1px solid";
nav.style.borderRadius = "2rem";
nav.style.borderColor = "green";
nav.style.padding = "1rem";

let wel = document.getElementsByTagName("h1");
let welcome = wel[0];
welcome.style.fontWeight = "bold";
welcome.style.fontFamily = "Courier New";
welcome.style.padding = "1rem";

let welc = document.getElementsByTagName("h4");




let main = document.querySelector("#main-page-content");
main.style.padding = "3rem";

let buttons = document.querySelectorAll('button');
for (const button of buttons) {
    button.style.padding = "1rem";
    button.style.borderRadius = "3rem";
    button.style.color = "green";
    button.style.fontWeight = "bolder";
    button.style.borderColor = "green";

}


const listBmiCategories = {
    "Very severely underweight": 15,
    "Severely underweight": 16,
    "Underweight": 18.5,
    "Normal (healthy weight)": 25,
    "Overweight": 30,
    "Obese Class I (Moderately obese)": 35,
    "Obese Class II (Severely obese)": 40,
    "Obese Class III (Very severely obese)": 45
}



function calculateBMI() {
    const weight = parseInt(weightInput.value);
    const height = parseInt(heightInput.value) / 100;
    const calcBMI = weight / (height * height);
    let resultBMI = document.createElement("h3");
    resultBMI.textContent = "Your Body mass index (BMI): " + calcBMI;
    resultBMI.style.color = "green";




    resultBMIOutput.appendChild(resultBMI);

    for (const [categorie, value] of Object.entries(listBmiCategories)) {
        if (calcBMI <= value) {
            resultCategorie.textContent = "You fall into the categorie: " + categorie;
            resultCategorie.appendChild(resultBMI);
            resultCategorie.style.color = "red";

            weightInput.value = "";
            weightInput.focus();

            heightInput.value = "";
            heightInput.focus();
            break;
        }
    }



}