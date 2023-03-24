window.addEventListener("load", function() {
  const form = document.getElementById("submit");
  form.addEventListener("click",calcLanguage);
})
function calcLanguage (event) {
  event.preventDefault();
  let javaScript = 0;
  let python = 0;
  let cSharp = 0;
  let result = "x";
    // Question 1: Checks which choice got selected
  if (firstChoiceA & firstChoiceB & firstChoiceC & javaScript & python & cSharp) {
    if (document.getElementById('firstChoiceA').checked === true) {
        return javaScript += 1
    } else if (document.getElementById('firstChoiceB').checked === true) {
        python = python + 1;
    } else if (document.getElementById('firstChoiceC').checked === true) {
        cSharp = cSharp + 1;
    }
  }
  if (secondChoiceA & secondChoiceB & secondChoiceC) {
      // Question 2: Checks which choice got selected
    if (document.getElementById('secondChoiceA').checked === true) {
        javaScript = 1;
    } else if (document.getElementById('secondChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('secondChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (thirdChoiceA & thirdChoiceB & thirdChoiceC) {
      // Question 3: Checks which choice got selected
    if (document.getElementById('thirdChoiceA').checked === true) {
        javaScript = 1;
    } else if (document.getElementById('thirdChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('thirdChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (fourthChoiceA & fourthChoiceB & fourthChoiceC) {
      // Question 4: Checks which choice got selected
    if (document.getElementById('fourthChoiceA').checked === true) {
        javaScript = 1;
    } else if (document.getElementById('fourthChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('fourthChoiceC').checked === true) {
        cSharp = 1;
    }
  }
  if (fifthChoice5A & fifthChoice5B & fifthChoice5C) {
      // Question 5: Checks which choice got selected
    if (document.getElementById('fifthChoiceA').checked === true) {
        javaScript = 1;
    } else if (document.getElementById('fifthChoiceB').checked === true) {
        python = 1;
    } else if (document.getElementById('fifthChoiceC').checked === true) {
        cSharp = 1;
    }
    }
  if (javaScript & python & cSharp) {
      // Decides which language fits the user best
    if (javaScript > python && javaScript > cSharp) {
        result="Java";
    } else if (python > javaScript && python > cSharp) {
        result="Python";
    } else if (cSharp > javaScript && cSharp > python) {
        result="C#";
    }
  }
  document.getElementById("answer").innerText= result;
}

function calcJava(event) {

}