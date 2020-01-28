// the querySelector function is used to grab a reference to the heading, and store it in the myHeading variable
// the value is then set to myHeading variable's textContent property (which represents the content of the heading) to "Hello World!"
// const myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World!';

// ---------------------------------------------------------------------
// Image switcher code

// store a reference to <img> element in the myImage variable
let myImage = document.querySelector('img');

// make the myImage variable's onclick event handler property equal to a function with no name
// everytime the element is clicked:
myImage.onclick = function() {
  // 1. retrieve the value of the image's src attribute
  let mySrc = myImage.getAttribute('src');
  // 2. a conditional is used to check whether the src value is equal to the path of the original image
  if(mySrc === 'images/web-developer.png') {
    // 3a. if it is, the src value is change to the path to the 2nd image, forcing the other image to be loaded inside the <img> element
    myImage.setAttribute ('src', 'images/web-developer2.png');
  } else {
    // 3b.  if it isn't (meaning it must have already changed), the src value swaps back to the original path, to the original state
    myImage.setAttribute ('src', 'images/web-developer.png');
  }
}
// ---------------------------------------------------------------------

// Personalized welcome message code

let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');

/* 
  This function contains a prompt() function, which brings up a dialog box, a bit like alert(). This prompt(), however, asks the user to enter some data, storing it in a variable after the user presses OK. In this case, we are asking the user to enter their name.
*/
function setUserName() {
  let myName = prompt('Please enter your name. ');
  /* 
    if myName has no value, or its value is null, run setUserName() again from the start. If it does have a value (if the above statements are not true), then store the value in localStorage and set it as the heading's text.
  */
  if(!myName || myName === null) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'Mozilla is cool, ' + myName;
  }

  /* 
    Next, we call on an API called localStorage, which allows us to store data in the browser and later retrieve it. We use localStorage's setItem() function to create and store a data item called 'name', setting its value to the myName variable which contains the data the user entered. 
  */
  // localStorage.setItem('name', myName);
  // Sets the textContent of the heading to a string, plus the user's stored name.
  // myHeading.textContent = 'Mozilla is cool, ' + myName;
}

/* 
  This block first uses the negation operator (logical NOT, represented by the !) to check whether the name data exists. If not, the setUserName() function is run to create it. If it exists (that is, the user set it during a previous visit), we retrieve the stored name using getItem() and set the textContent of the heading to a string, plus the user's name, as we did inside setUserName().
*/
// if(!localStorage.getItem('name')) {
//   setUserName();
// } else {
//   let storedName = localStorage.getItem('name');
//   myHeading.textContent = 'Mozilla is cool, ' + storedName;
// }

myButton.onclick = function() {
  setUserName();
}