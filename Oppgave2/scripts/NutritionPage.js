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

    let main = document.querySelector("#main-page-container");
    main.style.padding = "3rem";

    let txts = document.querySelectorAll("h1,h2");
    for (const txt of txts) {
        txt.style.borderRadius = "3rem";
        txt.style.color = "green";
        txt.style.fontSize = "1rem";
        txt.style.fontWeight = "bolder";
        txt.style.borderColor = "green";
    }




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