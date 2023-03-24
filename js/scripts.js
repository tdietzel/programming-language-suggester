window.addEventListener("load", function() {
  const form = document.getElementById("submit");
  form.addEventListener("click",calcLanguage);
  
})
function addJava(javaScript, point) {
  return javaScript + point;
  }
function calcLanguage (event) {
  event.preventDefault();
const point = 1;
let javaScript = 1;
let python = 0;
let cSharp = 0;
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

    // decides which option is best for user
  if (javaScript & python & cSharp) {
    if (javaScript > python && javaScript > cSharp) {
        document.getElementById("answer").innerText = "JavaScript";
    } else if(javaScript > python && javaScript === cSharp) {
        document.getElementById("answer").innerText = "JavaScript";
    } else if(javaScript > cSharp && javaScript === python) {
        document.getElementById("answer").innerText = "JavaScript";
    } else if(python > javaScript && python > cSharp) {
      document.getElementById("answer").innerText = "Python";
    } else if(python > javaScript && python === cSharp) {
      document.getElementById("answer").innerText = "Python";
    } else if(python > cSharp && python === javaScript) {
      document.getElementById("answer").innerText = "Python";
    } else if(cSharp > javaScript && cSharp > python) {
      document.getElementById("answer").innerText = "C#"; 
    } else if(cSharp > javaScript && cSharp === python) {
      document.getElementById("answer").innerText = "C#";
    } else if(cSharp > python && cSharp === javaScript) {
      document.getElementById("answer").innerText = "C#";
    }
  }
}