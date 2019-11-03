var frisAmount;
var frisTotal = 0;
var frisPrijs = 2.37;
var frisdefaultPrice = 2.37;

var bierAmount;
var bierTotal = 0;
var bierPrijs = 4.12;
var bierdefaultPrice = 4.12;

var wijnAmount;
var wijnTotal = 0;
var wijnPrijs = 8.23;
var wijndefaultPrice = 8.23;

var achtBitterBallenAmount;
var achtBitterBallenTotal = 0;
var achtBitterBallenPrijs = 3.20;

var zestienBitterBallenAmount;
var zestienBitterBallenTotal = 0;
var zestienBitterBallenPrijs = 5.40;

var totalPrice = 0;

// Deze functie start de bestelling
function startOfOrder(decision) {
    if (decision === "drinken") {
      drinksOrder(prompt("Wat wilt u voor drinken bestellen? Fris | Bier | Wijn.").toLowerCase());
    }
    else if (decision === "snacks") {
      snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")));
    }
    else {
      alert("U dient een keuze te maken uit \"drinken\" of \"snacks\"");
      startOfOrder(prompt("Wat wilt u bestellen? Drinken | Snacks").toLowerCase());
    }
}

// Deze functie neemt je bestelling van de drankjes op.
function drinksOrder(drink) {
    if (drink === "fris") {
        frisAmount = parseInt(prompt("Hoeveel " + drink + " wilt u bestellen?"));
        console.log(drink + " x " + frisAmount);
        frisTotal = frisTotal + frisAmount;
        // frisTotal += frisAmount;
        drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
    else if (drink === "bier") {
        bierAmount = parseInt(prompt("Hoeveel " + drink + " wilt u bestellen?"));
        console.log(drink + " x " + bierAmount);
        bierTotal = bierTotal + bierAmount;
        // bierTotal += bierAmount;
        drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
    else if (drink === "wijn") {
        wijnAmount = parseInt(prompt("Hoeveel " + drink + " wilt u bestellen?"));
        console.log(drink + " x " + wijnAmount);
        wijnTotal = wijnTotal + wijnAmount;
        // wijnTotal += wijnAmount;
        drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
    else if (drink === "stop") {
      repeatSnackQuestion(prompt("Wilt u nog snacks bestellen?").toLowerCase());
    }
    else if (drink === "") {
      alert("U dient een keuze te maken uit 1 van de volgende dranken: Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ");
      drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
    else {
      alert("Dit is geen geldige invoer, probeer wat anders. Kies een drankje uit de lijst");
      drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
    }
}

// Deze functie neemt je bestelling van de snacks op.
function snacksOrder(snack) {
  if (snack === 8) {
    achtBitterBallenAmount = parseInt(prompt("Hoeveel bitterbalschalen van " + snack + " stuks wilt u bestellen?"));
    console.log("U heeft " + achtBitterBallenAmount + " schalen van " + snack + " bitterballen besteld, en zijn toegevoegd aan de bestelling");
    achtBitterBallenTotal = achtBitterBallenTotal + achtBitterBallenAmount;
    rekeningQuestion(prompt("Wilt u de rekening uitprinten?"));
  }
  else if (snack === 16) {
    zestienBitterBallenAmount = parseInt(prompt("Hoeveel bitterbalschalen van " + snack + " stuks wilt u bestellen?"));
    console.log("U heeft " + zestienBitterBallenAmount + " schalen van " + snack + " bitterballen besteld, en zijn toegevoegd aan de bestelling");
    zestienBitterBallenTotal = zestienBitterBallenTotal + zestienBitterBallenAmount;
    rekeningQuestion(prompt("Wilt u de rekening uitprinten?"));
  }
  else if (snack != 8 || snack != 16) {
    alert("U kunt alleen kiezen tussen schalen van 8 of 16 bitterballen");
    snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen? 8 bitterballen | 16 bitterballen")));
  }
}

// Deze functie vraagt de gebruiker of dat hij/zij nog snacks wilt na het bestellen van drinken.
function repeatSnackQuestion(repeat) {
  if (repeat === "ja") {
    snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen (8 of 16)?")));
  }
  else if (repeat === "nee") {
    alert("De rekening word uitgeprint.")
    checkout();
  }
  else if (repeat === "") {
    alert("Maak een keuze tussen \"ja\" of \"nee\"");
    repeatSnackQuestion(prompt("Wilt u nog snacks bestellen?").toLowerCase());
  }
}

// Deze functie vraagt of je de rekening wilt, staat in een functie zodat het herhaald kan worden
function rekeningQuestion(rekening) {
  if (rekening === "ja") {
    alert("Uw rekening word uitgeprint.");
    console.log("Uw rekening word uitgeprint");
    checkout();
  }
  else if (rekening === "nee") {
    snacksOrder(parseInt(prompt("Hoeveel bitterballen wilt u toevoegen? 8 bitterballen | 16 bitterballen")));
  }
  else {
    alert("U dient ja of nee in te vullen!");
    rekeningQuestion(prompt("Wilt u de rekening uitprinten?"));
  }
}

// Deze functie berekent alle prijzen en het totaal bedrag.
function checkout() {
  // Prijzen van de drankjes worden hier berekent.
  frisPrijs = frisPrijs * frisTotal;
  bierPrijs = bierPrijs * bierTotal;
  wijnPrijs = wijnPrijs * wijnTotal;

  // Prijzen van de bitterbal schalen worden hier berekent
  achtBitterBallenPrijs = achtBitterBallenPrijs * achtBitterBallenTotal;
  zestienBitterBallenPrijs = zestienBitterBallenPrijs * zestienBitterBallenTotal;

  document.write("<h1>Uw bestelling: </h1>")

  // Drinken gedeelte in de checkout functie
  if (frisTotal > 0 || bierTotal > 0 || wijnTotal > 0) {
    document.write("<h3>Drinken: </h3>");
  }
  else {}
  if (frisTotal > 0) {
    document.write(frisTotal + " x " + " fris &nbsp;&nbsp;............................................. &euro; " + frisPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (bierTotal > 0) {
    document.write(bierTotal + " x " + " bier &nbsp;............................................. &euro; " + bierPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (wijnTotal > 0) {
    document.write(wijnTotal + " x " + " wijn ............................................. &euro; " + wijnPrijs.toFixed(2) + "<br>");
  }
  else {}

  // Snacks gedeelte van de checkout functie
  if (achtBitterBallenTotal > 0 || zestienBitterBallenTotal > 0) {
    document.write("<h3>Eten: </h3>");
  }
  else {}
  if (achtBitterBallenTotal > 0) {
    document.write(achtBitterBallenTotal + " x " + " bitterbalschaal van 8 stuks &nbsp;......... &euro; " + achtBitterBallenPrijs.toFixed(2) + "<br>");
  }
  else {}
  if (zestienBitterBallenAmount > 0) {
    document.write(zestienBitterBallenTotal + " x " + " bitterbalschaal van 16 &nbsp;&nbsp;&nbsp;.............. &euro; " + zestienBitterBallenPrijs.toFixed(2) + "<br>");
  }
  else{}

  // Totaal prijs berekenen in de checkout functie
  totalPrice = totalPrice + frisPrijs + bierPrijs + wijnPrijs + achtBitterBallenPrijs + zestienBitterBallenPrijs;

  if (totalPrice === 0) {
    document.write("U heeft niks op uw bestelling staan.");
  }
  else {
    document.write("-------------------------------------------------------- <br>")
    document.write("Totaal &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &euro; " + totalPrice.toFixed(2));
  }
}

startOfOrder(prompt("Wat wilt u bestellen? Drinken | Snacks").toLowerCase());

// drinksOrder(prompt("Wat wilt voor drinken wilt u bestellen? Fris | Bier | Wijn. Als u geen drinken meer wil bestellen, dan typet u: \"stop\" ").toLowerCase());
