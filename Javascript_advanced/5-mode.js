function changeMode(size, weight, transform, background, color) {
  return function () {
    document.body.style.fontSize = size + "px";
    document.body.style.fontWeight = weight;
    document.body.style.textTransform = transform;
    document.body.style.backgroundColor = background;
    document.body.style.color = color;
  };
}
function main() {
  var spooky = changeMode(9, "bold", "uppercase", "pink", "green");
  var darkMode = changeMode(12, "bold", "capitalize", "black", "white");
  var screamMode = changeMode(12, "normal", "lowercase", "white", "black");

  var paragraph = document.createElement("p");
  paragraph.textContent = "Welcome Holberton!";
  document.body.appendChild(paragraph);

  addButton("Spooky", spooky);
  addButton("Dark mode", darkMode);
  addButton("Scream mode", screamMode);

  function addButton(text, modeFunction) {
    var button = document.createElement("button");
    button.textContent = text;
    button.addEventListener("click", modeFunction);
    document.body.appendChild(button);
  }
}
