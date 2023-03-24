window.addEventListener("load", function() {
  const form = document.getElementById('submit');
  form.addEventListener("submit",calcLanguage);
})

let javaScript=0;
let python=0;
let result="";

function calcLanguage (event) {
  event.preventDefault();

    // Question 1: Checks which choice got selected
  if (document.getElementById('firstChoiceA').checked === true) {
    javaScript = 1;
  } elseif (document.getElementById('firstChoiceB').checked === true); {
    python = 1;
  }

    // Question 2: Checks which choice got selected
  if (document.getElementById('secondChoiceA').checked === true) {
    javaScript = 1;
  } elseif (document.getElementById('secondChoiceB').checked === true); {
    python = 1;
  }

    // Question 3: Checks which choice got selected
  if (document.getElementById('thirdChoiceA').checked === true) {
    javaScript = 1;
  } elseif (document.getElementById('thirdChoiceB').checked === true); {
    python = 1;
  }

    // Question 4: Checks which choice got selected
  if (document.getElementById('fourthChoiceA').checked === true) {
    javaScript = 1;
  } elseif (document.getElementById('fourthChoiceB').checked === true); {
    python = 1;
  }

    // Question 5: Checks which choice got selected
    if (document.getElementById('fifthChoiceA').checked === true) {
      javaScript = 1;
    } elseif (document.getElementById('fifthChoiceB').checked === true); {
      python = 1;
    }

    if (javaScript >= python) {
    result="java";
    } elseif (javaScript < python); {
    result="python";
    }
  document.getElementById("answer").innerText= result;
}

//const firstChoiceA = window.document.querySelector("input#firstChoiceA").value;
//const firstChoiceB = window.document.querySelector("input#firstChoiceB").value;
//const secondChoiceA = window.document.querySelector("input#secondChoiceA").value;
//const secondChoiceB = window.document.querySelector("input#secondChoiceB").value;
//const thirdChoiceA = window.document.querySelector("input#thirdChoiceA").value;
//const thirdChoiceB = window.document.querySelector("input#thirdChoiceB").value;
//const fourthChoiceA = window.document.querySelector("input#fourthChoiceA").value;
//const fourthChoiceB = window.document.querySelector("input#fourthChoiceB").value;
//const fifthChoiceA = window.document.querySelector("input#fifthChoiceA").value;
//const fifthChoiceB = window.document.querySelector("input#fifthChoiceB").value;