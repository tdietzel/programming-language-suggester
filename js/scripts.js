// Once page is loaded it waits for the submit button to start userInput()
window.addEventListener("load", () => {
  const button = document.getElementById("submit");
  button.addEventListener("click",userInput);
});

// Triggers on submit button
function userInput(language) {
  language.preventDefault();
  language = 0;

  // Gets the value from selected radio buttons and adds them to language
  Q1 = document.querySelector("input[name=question1]:checked").value;
  language += parseInt(Q1);
  Q2 = document.querySelector("input[name=question2]:checked").value;
  language += parseInt(Q2);
  Q3 = document.querySelector("input[name=question3]:checked").value;
  language += parseInt(Q3);
  Q4 = document.querySelector("input[name=question4]:checked").value;
  language += parseInt(Q4);
  Q5 = document.querySelector("input[name=question5]:checked").value;
  language += parseInt(Q5);

  languageSelector(language);
}

function languageSelector(language) {
  // calculates which language the user should study and displays it
  if (language < 8) {
    document.getElementById('answer').innerHTML = "Start learning PYTHON!!!";
  } else if (language < 11) {
    document.getElementById('answer').innerHTML = "Start learning JAVA!!!";
  } else if (language > 10) {
    document.getElementById('answer').innerHTML = "Start learning REACT!!!";
  } else {
    document.getElementById('answer').innerHTML = "???";
  }
}



// OLD CODE!! NOT NEEDED

// window.addEventListener("load", function() {
//   const form = document.getElementById("submit");
//   form.addEventListener("click",calcLanguage);
// })
// function addJava(javaScript, point) {
//   return javaScript + point;
//   }
// function addPython(python, point) {
//   return python + point;
//   }
// function addCSharp(cSharp, point) {
//   return cSharp + point;
//   }
// // 
// function calcLanguage (event) {
//   event.preventDefault();

//   // sets default values
//   const point = 1;
//   let javaScript = 0;
//   let python = 0;
//   let cSharp = 0;

//   // Question 1: Checks which choice got selected
//   //if (firstChoiceA & firstChoiceB & firstChoiceC & javaScript & python & cSharp) {
//     if (document.getElementById('firstChoiceA').checked === true) {
//       javaScript = addJava(javaScript, point);
//     } else if (document.getElementById('firstChoiceB').checked === true) {
//       python = addPython(python, point);
//     } else if (document.getElementById('firstChoiceC').checked === true) {
//       cSharp = addCSharp(cSharp, point);
//     }
//     return [javaScript, python, cSharp];
//   }
//   if (secondChoiceA & secondChoiceB & secondChoiceC) {
//     // Question 2: Checks which choice got selected
//     if (document.getElementById('secondChoiceA').checked === true) {
//       javaScript = addJava(javaScript, point);
//     } else if (document.getElementById('secondChoiceB').checked === true) {
//       python = addPython(python, point);
//     } else if (document.getElementById('secondChoiceC').checked === true) {
//       cSharp = addCSharp(cSharp, point);
//     }
//     return (javaScript, python, cSharp);
//   }
//   if (thirdChoiceA & thirdChoiceB & thirdChoiceC) {
//     // Question 3: Checks which choice got selected
//     if (document.getElementById('thirdChoiceA').checked === true) {
//       javaScript = addJava(javaScript, point);
//     } else if (document.getElementById('thirdChoiceB').checked === true) {
//       python = addPython(python, point);
//     } else if (document.getElementById('thirdChoiceC').checked === true) {
//       cSharp = addCSharp(cSharp, point);
//     }
//     return [javaScript, python, cSharp];
//   }
//   if (fourthChoiceA & fourthChoiceB & fourthChoiceC) {
//     // Question 4: Checks which choice got selected
//     if (document.getElementById('fourthChoiceA').checked === true) {
//       javaScript = addJava(javaScript, point);
//     } else if (document.getElementById('fourthChoiceB').checked === true) {
//       python = addPython(python, point);
//     } else if (document.getElementById('fourthChoiceC').checked === true) {
//       cSharp = addCSharp(cSharp, point);
//     }
//     return [javaScript, python, cSharp];
//   }
//   if (fifthChoice5A & fifthChoice5B & fifthChoice5C) {
//     // Question 5: Checks which choice got selected
//     if (document.getElementById('fifthChoiceA').checked == true) {
//       javaScript = addJava(javaScript, point);
//     } else if (document.getElementById('fifthChoiceB').checked == true) {
//       python = addPython(python, point);
//     } else if (document.getElementById('fifthChoiceC').checked == true) {
//       cSharp = addCSharp(cSharp, point);
//     }
//     return [javaScript, python, cSharp];
//     }
//   if (javaScript & python & cSharp) {
//     // decides which option is best for user
//     if (javaScript > python && javaScript > cSharp) {
//       alert("JavaScript");
//     } else if(javaScript > python && javaScript === cSharp) {
//         document.getElementById("answer").innerText = "JavaScript";
//     } else if(javaScript > cSharp && javaScript === python) {
//         document.getElementById("answer").innerText = "JavaScript";
//     } else if(python > javaScript && python > cSharp) {
//       document.getElementById("answer").innerText = "Python";
//     } else if(python > javaScript && python === cSharp) {
//       document.getElementById("answer").innerText = "Python";
//     } else if(python > cSharp && python === javaScript) {
//       document.getElementById("answer").innerText = "Python";
//     } else if(cSharp > javaScript && cSharp > python) {
//       document.getElementById("answer").innerText = "C#"; 
//     } else if(cSharp > javaScript && cSharp === python) {
//       document.getElementById("answer").innerText = "C#";
//     } else if(cSharp > python && cSharp === javaScript) {
//       document.getElementById("answer").innerText = "C#";
//     }
//   }
//   document.getElementById("answer").innerText = "JavaScript";
// //}