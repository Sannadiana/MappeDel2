(function() {

    const optionTxt = document.getElementById("option-txt");
    const addFoodOptionBtn = document.getElementById("add-foodOption-btn");
    const optionUl = document.getElementById("option-ul");

    addFoodOptionBtn.onclick = addOption;

    optionTxt.focus();

    function addOption() {
        let option = optionTxt.value;
        optionUl.innerHTML += `
            <li>${option}</li>
        `;
        optionTxt.value = "";
        optionTxt.focus();
    }

}())