var keep = true;

function nameage(name, age){
    if (name === "stop" || age === "stop"){
        return ("End of application");
    }
    else {
        return ("Hallo " + name +  ", je leeftijd is " + age + " jaar");
    }
}

while (keep){
    var uitkomst = nameage(prompt("Wat is je naam?"), prompt("Wat is je leeftijd?"));
    if (uitkomst === "End of application"){
        keep = false;
    }
    document.write(uitkomst + "<br/>");
}