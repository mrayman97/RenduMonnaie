function renduMonnaie() {
  let montant = document.getElementById('inputText').value;

  const argent = montant;
  let monnaie = { monnaie10: 0, monnaie5: 0, monnaie2:0 };
  let reste = 0;

  if (montant % 2 !== 0 || montant % 5 !== 0) {
    reste = montant % 2 ? montant % 5 : 0;
  }

  if (montant % 2) {
    montant -= 5;
    monnaie.monnaie5 = 1;
  }

  while (montant % 10) {
    montant -= 2;
    monnaie.monnaie2++;
  }

  monnaie.monnaie10 = montant / 10;

  monnaie = `${argent} contient : ${monnaie.monnaie10} de: 10 + ${monnaie.monnaie5} de: 5 + ${monnaie.monnaie2} de: 2 et reste: ${reste}`;


  document.getElementById('outputArea').innerHTML = monnaie;

  console.log(monnaie)  

  return monnaie;
}

// console.log(renduMonnaie());
// console.log(renduMonnaie());
// console.log(renduMonnaie());
// console.log(renduMonnaie());
