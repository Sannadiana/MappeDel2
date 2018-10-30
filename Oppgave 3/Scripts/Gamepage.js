(function() {
    window.alert("Are you ready to play ? ");



    let currentPlayer = 1;
    let counter = 1;


    function createGameGrid() {
        let gameContainer = document.getElementById('game');
        gameContainer.style.backgroundColor = "grey";




        for (let i = 0; i < 9; i++) {
            let box = document.createElement('div');
            box.className = 'game-Box';
            let count = i + 1;
            box.id = 'GameBox-' + count;



            let lable = document.createElement('p');
            lable.className = 'box-lable';
            lable.style.marginTop = "40%";





            box.addEventListener('click', function() {
                if (counter >= 10) {

                } else {
                    if (currentPlayer == 1) {
                        lable.innerHTML = 'X';
                        currentPlayer = 2;
                    } else {
                        lable.innerHTML = 'O';
                        currentPlayer = 1;
                    }
                }

                counter++;
            })
            box.appendChild(lable);
            gameContainer.appendChild(box);

        }

    }

    createGameGrid();



    let cookieStatus;
    let mainPageContent;
    let boxesArray;

    const init = function() {

        const setHTMLObjects = function() {
            cookieStatus = document.getElementById("cookie-status");
            mainPageContent = document.getElementById("main-page-content");
        }();

        const setGUI = function() {
            checkIfCookie();
        }();

    }(); //end init   



    function checkIfCookie() {
        if (document.cookie) {
            let colorCookie = document.cookie;
            let cookieArray = colorCookie.split("=");
            let username = cookieArray[1];

            cookieStatus.innerHTML = "Your username: " + username;


            let boxArray = document.querySelectorAll(".box");

            for (let i = 0; i < 50; i++) {
                boxArray[i].style.backgroundColor = username;
            }


        } else {
            cookieStatus.innerHTML = "Cookie finnes ikke";
        }
    }

}())