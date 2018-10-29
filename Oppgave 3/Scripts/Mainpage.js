function logIn() {


    function setCookie() {
        const date = newDate();
        date.setDate(date.getDate() + 7);

        document.cookie = "email; expires=" + dato.toUTCString();
        document.cookie = "uName; expires=" + dato.toUTCString();


    }

    function getEmail() {
        let email = getElementById('eMailImput');
        return email;
    }

    function getUname() {
        let uName = getElementById('uNameImput');
        return uName;
    }
}