document.getElementById('form').onsubmit = function() {
    // input value
    let fname = document.getElementById('first-name').value;
    let lname = document.getElementById('last-name').value;
    let email = document.getElementById('email').value;
    let number = document.getElementById('phone').value;
    // regEx
    let valideEmail = /(\w+)?\.?(\w+)?\.?(\w+)?\d?\@(gmail|hotmail|yahoo|ofppt)\.(com|org|net|ma)/ig;
    let valideNumber = /(06|07|05)\d{8}/g;
    let valideName = /^[a-z]*((['-])[a-z][a-z]*)*?$/gi;
    let valideLN =  /^[a-z]*((['-])[a-z][a-z]*)*?$/gi;
    // test
    let valideN = valideName.test(fname);
    let valideLn = valideLN.test(lname);
    let validmail = valideEmail.test(email);
    let validePhon = valideNumber.test(number);
    console.log(valideN);
    console.log(valideLn);
    console.log(validmail);
    console.log(validePhon);
    // condition
if (e = true) {
	    if ((valideN === false)||(fname === "")) {
	        document.getElementById('f-name').style.display = "block"
	    }else{
            document.getElementById('f-name').style.display = "none"
        }
	    if ((valideLn === false) || (lname === "")) {
	        document.getElementById('l-name').style.display = "block"
	    }else{
            document.getElementById('f-name').style.display = "none"
        }
	    if ((validmail === false)||(email === "")) {
	        document.getElementById('e-mail').style.display = "block"
	    }else{
            document.getElementById('f-name').style.display = "none"
        }
	    if ((validePhon === false)||(number === "")) {
	        document.getElementById('number').style.display = "block"
	    }else{
            document.getElementById('f-name').style.display = "none"
        }
        return false
}else{
    return true
}
}