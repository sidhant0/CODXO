// Get the text area element
var editor = document.getElementById("editor");

// Function to save text to localStorage
function saveText() {
  localStorage.setItem("text", editor.value);
}

// Function to load text from localStorage
function loadText() {
  var savedText = localStorage.getItem("text");
  if (savedText) {
    editor.value = savedText;
  }
}
loadText();
editor.addEventListener("input", saveText);
