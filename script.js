
const firebaseConfig = {
    apiKey: "AIzaSyDkxzebCktIUrviEtiiJ5p1NypV4uQAYa8",
    authDomain: "registration-form-7c4fe.firebaseapp.com",
    projectId: "registration-form-7c4fe",
    storageBucket: "registration-form-7c4fe.appspot.com",
    messagingSenderId: "78404366263",
    appId: "1:78404366263:web:b35bda23d2686d7d2b4232"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var registrationFormDB = firebase.database().ref("registrationForm");
  
  document.getElementById("registrationForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var username = getElementVal("username");
    var email = getElementVal("email");
    var password = getElementVal("password");
    var firstname = getElementVal("firstname");
    var lastname = getElementVal("lastname");
    var gender = getElementVal("gender");
    var age = getElementVal("age");
    var dob = getElementVal("dob");
    var mobile = getElementVal("mobile");
    var signature = getElementVal("signature");
  
    saveMessages(username, email, password ,firstname ,lastname ,gender ,age ,dob ,mobile ,signature);
  
  
    //   reset the form
    document.getElementById("registrationForm").reset();
  }
  
  const saveMessages = (username, email, password, firstname, lastname, gender, age, dob, mobile, signature) => {
    var newregistrationForm = registrationFormDB.push();
  
    newregistrationForm.set({
      username: username,
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      age: age,
      dob: dob,
      mobile: mobile,
      signature:signature
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };