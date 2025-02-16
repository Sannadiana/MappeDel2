/******* TRAINING EXERCISES ARRAY WITH OBJECTS AND ITS ELEMENTS ******/


//encapsulation
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

        //HTML objects
        const setExerciseBtn = document.getElementById("set-exercise-btn");
        const listOfRepitations = document.getElementById("list-of-reps");



        //Array of exercises 
        const exerciseList = [{
                title: 'Box Jump',
                img: 'images/boxJump.jpg'
            },
            {
                title: 'Burpees',
                img: 'images/burpees.jpg'
            },
            {
                title: 'Squat',
                img: 'images/squat.jpg'
            },
            {
                title: 'Reverse lunge',
                img: 'images/reverseLunge.jpg'
            },
            {
                title: 'Push ups',
                img: 'images/PushUps.jpg'
            }, {
                title: 'Pistol squat',
                img: 'images/squat.jpg'
            }, {
                title: 'Squat jump',
                img: 'images/SquatJump.jpg'
            }, {

                title: 'Hip thrust',
                img: 'images/HipThrust.png'
            }, {
                title: 'Glutebridge',
                img: 'images/Glutebridg.jpg'
            }, {
                title: 'Plank shoulder taps',
                img: 'images/PlankShoulderTaps.jpg'
            }
        ];

        let main = document.querySelector("#main-page-container");
        main.style.padding = "3rem";

        //events
        setExerciseBtn.onclick = setRandomExercise;




        function setRandomExercise() {

            const listItems = listOfRepitations.getElementsByTagName("li");
            let numberOfListItems = listItems.length;

            for (let i = 0; i < numberOfListItems; i++) {
                const reps = getRandomInt();
                const exercise = getRandomExercise();
                const img = createImageTag(exercise.img);
                img.style.height = "100px";
                img.style.width = "200px";

                listItems[i].textContent = "x" + reps + ": " + exercise.title;
                listItems[i].appendChild(img)
            }
        }

        function createImageTag(imgUrl) {
            let image = document.createElement('img');
            image.classList.add('list-of-reps');
            image.src = imgUrl;
            return image
        }



        function getRandomExercise() {
            let exercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
            return exercise;
        }



        function getRandomInt() {
            const min = 6;
            const max = 20;

            let number = Math.floor(Math.random() * (max - min + 1)) + min;

            return number;

        }



        const title = exercise.title
        const img = exercise.img

    }



    ())