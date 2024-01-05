
const firebaseConfig = {
    apiKey: "AIzaSyDkxzebCktIUrviEtiiJ5p1NypV4uQAYa8",
    authDomain: "registration-form-7c4fe.firebaseapp.com",
    databaseURL: "https://registration-form-7c4fe-default-rtdb.firebaseio.com",
    projectId: "registration-form-7c4fe",
    storageBucket: "registration-form-7c4fe.appspot.com",
    messagingSenderId: "78404366263",
    appId: "1:78404366263:web:b35bda23d2686d7d2b4232"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  

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
    var registrationFormDB = firebase.database().ref(username);
    saveMessages(username, email, password ,firstname ,lastname ,gender ,age ,dob ,mobile ,signature,registrationFormDB);
  }
  
  const saveMessages = (username, email, password, firstname, lastname, gender, age, dob, mobile, signature,registrationFormDB) => { 
    registrationFormDB.set({
      username: username,
      email: email,
      password: password,
      firstname: firstname,
      lastname: lastname,
      gender: gender,
      age: age,
      dob: dob,
      mobile: mobile,
      signature:signature,
    });
      document.getElementById("registrationForm").reset();
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };