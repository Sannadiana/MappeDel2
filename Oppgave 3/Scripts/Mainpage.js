    (function() {

        let cookieStatus;
        let eMailInput;
        let uNameInput;
        let setLogInBtnCookie;
        let deleteLogInBtnCookien;
        let playBtn;

        const init = function() {

            const setHTMLObjects = function() {
                cookieStatus = document.getElementById("cookie-status");
                uNameInput = document.getElementById("u-Name-Input");
                setLogInBtnCookie = document.getElementById("set-logIn-Btn-Cookie");
                deleteLogInBtnCookien = document.getElementById("delete-logIn-Btn-Cookie");


            }(); //end setHTMLObjects

            const setEvents = function() {
                setLogInBtnCookie.onclick = setCookie;
                deleteLogInBtnCookien.onclick = deleteCookie;

            }();

            const setGUI = function() {
                checkIfCookie();
            }();

        }(); //end init   

        /* Application logic*/

        function checkIfCookie() {
            if (document.cookie) {
                cookieStatus.innerHTML = "You got " + document.cookie;
            } else {
                cookieStatus.innerHTML = "username do not exsist, type in one to play:";
            }

        }

        function setCookie() {
            let newDate = new Date();
            //finner datoen metoden kalles og lever i + 3 dager iforhold til londondtid
            newDate.setDate(newDate.getDate() + 3);

            let username = uNameInput.value;

            //template literales og valgt variabelnavn og verdi og hvor lenge levetiden på cookien ``
            document.cookie = `User-name=${username}; expires=${newDate.toUTCString()}`;
            // for hver ny cookie, samme linje igjen men skifte ut variabelnavn:
            // document.cookie = `backgroundColur=${color}; expires=${newDate.toUTCString()}`;

            checkIfCookie();
        }

        function deleteCookie() {

            let newDate = new Date();
            //finner datoen metoden kalles og lever i + 3 dager iforhold til londondtid
            newDate.setDate(newDate.getDate() - 3);

            let uname = uNameInput.value;

            //template literales og valgt variabelnavn og verdi og hvor lenge levetiden på cookien ``
            document.cookie = `User-name=; expires=${newDate.toUTCString()}`;
            // for hver ny cookie, samme linje igjen men skifte ut variabelnavn:
            // document.cookie = `backgroundColur=${color}; expires=${newDate.toUTCString()}`;

            checkIfCookie();

        }

    }())