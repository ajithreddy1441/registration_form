
const firebaseConfig = {
  apiKey: "AIzaSyD4Xw5JcHJGhpbWbz_vzCXWFqogwtspVtQ",
  authDomain: "form-5a3c3.firebaseapp.com",
  databaseURL: "https://form-5a3c3-default-rtdb.firebaseio.com",
  projectId: "form-5a3c3",
  storageBucket: "form-5a3c3.appspot.com",
  messagingSenderId: "274648718556",
  appId: "1:274648718556:web:19eb45ef47e459a2f02819"
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