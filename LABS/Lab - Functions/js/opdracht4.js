function tafels(amount) {
  if (amount >= 1 && amount <= 10) {
    for (var a = 1; a <= amount; a++) {
        for (var i = 1; i <= 10; i++) {
            var test = a * i;
            document.write(i + " x " + a + " = " + test + "<br>");
        }
        document.write("<br>");
    }
  }
  else {
    alert("De invoer dient een getal te zijn van 1 t/m 10. Vul een geldig nummer in astublieft.")
    tafels(prompt("Hoeveel tafels wilt u uitgeprint hebben?"));
  }
}

tafels(prompt("Hoeveel tafels wilt u uitgeprint hebben?"));
