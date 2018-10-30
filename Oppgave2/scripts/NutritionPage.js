(function() {
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
    nav.style.borderRadius = "2rem";
    nav.style.borderColor = "green";
    nav.style.padding = "0.5rem";
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


    /*Kanskje legge inn inspirasjons alternativer*/

}())