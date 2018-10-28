/******* TRAINING EXERCISES ARRAY WITH OBJECTS AND ITS ELEMENTS ******/


//encapsulation
(function() {

        //HTML objects
        const setExerciseBtn = document.getElementById("set-exercise-btn");
        const listOfRepitations = document.getElementById("list-of-reps");


        //Array of exercises 
        const exerciseList = ['Box Jump',
            'Burpees',
            'Squat',
            'Reverse lunge',
            'Push ups',
            'Pistol squat',
            'Squat jump',
            'Hip thrust',
            'Glutebridge',
            'Lying shoulderpress'
        ];

        //events
        setExerciseBtn.onclick = setRandomExercise;





        function setRandomExercise() {

            const listItems = listOfRepitations.getElementsByTagName("li");
            let numberOfListItems = listItems.length;

            for (let i = 0; i < numberOfListItems; i++) {
                getRandomInt(listItems[i]);
                getRandomExercise(listItems[i]);
            }
        }




        function getRandomExercise(listItem) {
            let exercise = exerciseList[Math.floor(Math.random() * exerciseList.length)];
            listItem.textContent = listItem.textContent + " " + exercise;
        }



        function getRandomInt(listItem) {
            const min = 6;
            const max = 20;

            let number = Math.floor(Math.random() * (max - min + 1)) + min;

            listItem.textContent = "x" + number + ":";

        }
    }



    ())