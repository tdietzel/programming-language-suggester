window.addEventListener("load", function() {
  const form = document.getElementById("input");
  form.addEventListener("submit",calcLanguage);
})

function calcLanguage (event) {
  event.preventDefault()
  const firstChoiceA = window.document.querySelector("input#firstChoiceA").value;
  const firstChoiceB = window.document.querySelector("input#firstChoiceB").value;

  console.log(firstChoiceA);
  console.log(firstChoiceB);
}