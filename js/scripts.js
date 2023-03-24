window.addEventListener("load", function() {
  const form = document.getElementById("submit");
  form.addEventListener("click",calcLanguage);
  
})

const point = 1;
let javaScript;
let python;
let cSharp;
function addJava(javaScript, point) {
  return javaScript + point;
  }

function calcLanguage (event) {
  event.preventDefault();
    // Question 1: Checks which choice got selected
  if (firstChoiceA & firstChoiceB & firstChoiceC & javaScript & python & cSharp) {
    if (document.getElementById('firstChoiceA').checked === true) {
        javaScript = addJava(javaScript, point);
    } else if (document.getElementById('firstChoiceB').checked === true) {
        answer = addJava(answer, point);
    } else if (document.getElementById('firstChoiceC').checked === true) {
        answer = addJava(answer, point);
    }
  }
  if (secondChoiceA & secondChoiceB & secondChoiceC) {
      // Question 2: Checks which choice got selected
    if (document.getElementById('secondChoiceA').checked === true) {
      javaScript = javaScript + 1
    } else if (document.getElementById('secondChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('secondChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (thirdChoiceA & thirdChoiceB & thirdChoiceC) {
      // Question 3: Checks which choice got selected
    if (document.getElementById('thirdChoiceA').checked === true) {
      javaScript = javaScript + 1
    } else if (document.getElementById('thirdChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('thirdChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (fourthChoiceA & fourthChoiceB & fourthChoiceC) {
      // Question 4: Checks which choice got selected
    if (document.getElementById('fourthChoiceA').checked === true) {
      javaScript = javaScript + 1
    } else if (document.getElementById('fourthChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('fourthChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (fifthChoice5A & fifthChoice5B & fifthChoice5C) {
      // Question 5: Checks which choice got selected
    if (document.getElementById('fifthChoiceA').checked === true) {
      javaScript = javaScript + 1
    } else if (document.getElementById('fifthChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('fifthChoiceC').checked === true) {
        cSharp = 1;
    }
    }
  if (javaScript & python & cSharp) {
      // Decides which language fits the user best
    if (javaScript > python && javaScript > cSharp) {
      document.getElementById("answer").innerText = "Java";
    } else if (python > javaScript && python > cSharp) {
      document.getElementById("answer").innerText = "Python";
    } else if (cSharp > javaScript && cSharp > python) {
      document.getElementById("answer").innerText = "C#";
    }
  }
  document.getElementById("answer").innerText = result;
}