window.addEventListener("load", function() {
  const form = document.getElementById('submit');
  form.addEventListener("submit",calcLanguage);
})

function calcLanguage (event) {
  event.preventDefault();
  const firstChoiceA = window.document.querySelector("input#firstChoiceA").value;
  const firstChoiceB = window.document.querySelector("input#firstChoiceB").value;
  const secondChoiceA = window.document.querySelector("input#secondChoiceA").value;
  const secondChoiceB = window.document.querySelector("input#secondChoiceB").value;
  const thirdChoiceA = window.document.querySelector("input#thirdChoiceA").value;
  const thirdChoiceB = window.document.querySelector("input#thirdChoiceB").value;
  const fourthChoiceA = window.document.querySelector("input#fourthChoiceA").value;
  const fourthChoiceB = window.document.querySelector("input#fourthChoiceB").value;
  const fifthChoiceA = window.document.querySelector("input#fifthChoiceA").value;
  const fifthChoiceB = window.document.querySelector("input#fifthChoiceB").value;

  if (document.getElementById('firstChoiceA').checked === true) {
    javaScript = 1;
    console.log(javaScript);
  } elseif (document.getElementById('firstChoiceA').checked === true); {
    python = 1;
    console.log(python);
  }

  if (javaScript >= python) {
    result="java";
  }
  document.getElementById("answer").innerText= result;
}