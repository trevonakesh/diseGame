function rollDice(){
  const numofDice = document.getElementById("numofDice").value;
  const diceResults = document.getElementById("diceResults");
  const diceImage = document.getElementById("diceImage");
  const values = [];
  const image = [];

  for(let i = 0; i < numofDice; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    image.push(`<img src="dise_image/${value}.png" alt="Dice ${value}">`);
  }
  diceResults.textContent = `Dice: ${values.join(`, `)}`;
  diceImage.innerHTML = image.join(``);
}
