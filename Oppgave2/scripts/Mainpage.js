const weightInput = document.getElementById("weightInput");
const heightInput = document.getElementById("heightInput");
const resultBMIOutput = document.getElementById("resultBMIOutput");
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
    resultBMIOutput.appendChild(resultBMI);

    //let resultCategorie = document.createElement("h4");


    //resultCategorie.appendChild(resultCategorie);
    for (const [categorie, value] of Object.entries(listBmiCategories)) {
        if (calcBMI <= value) {
            resultCategorie.textContent = "You fall into the categorie: " + categorie;
            break;
        }

    }
}