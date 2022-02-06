function SaveStudentDetails() {
    var fname = document.getElementById('fname').value;
    var lname = document.getElementById('lname').value;
    var email = document.getElementById('email').value;
    var mobile = document.getElementById('mobile').value;
    var gender;
    if (document.getElementById('male').checked == true) {
        gender = "male";
    }
    if (document.getElementById('female').checked == true) {
        gender = "female";
    }
    var dob = document.getElementById('dob').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var state = document.getElementById('state').value;
    var pass = document.getElementById('password').value;

    localStorage.setItem("First Name", fname);
    localStorage.setItem("Last Name", lname);
    localStorage.setItem("Email", email);
    localStorage.setItem("Mobile", mobile);
    localStorage.setItem("Gender", gender);
    localStorage.setItem("Date of Birth", dob);
    localStorage.setItem("Address", address);
    localStorage.setItem("City", city);
    localStorage.setItem("State", state);
    localStorage.setItem("Password", pass);

    window.alert("You Have Registered Successfully");

    document.getElementById('fname').value = "";
    document.getElementById('lname').value = "";
    document.getElementById('email').value = "";
    document.getElementById('mobile').value = "";
    document.getElementById('male').checked = false;
    document.getElementById('female').checked = false;
    document.getElementById('dob').value = "";
    document.getElementById('address').value = "";
    document.getElementById('city').value = "";
    document.getElementById('state').value = "";
    document.getElementById('password').value = "";
}