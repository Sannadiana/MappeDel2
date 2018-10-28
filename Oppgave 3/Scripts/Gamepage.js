let currentPlayer = 1;
let counter = 1;


function createGameGrid() {
    let gameContainer = document.getElementById('game');

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