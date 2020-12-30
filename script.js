function third() {
    input;
    input = document.getElementById("input").value;
    thirdletter = input[2];
    console.log(input[2]);

    document.getElementById("thirdletter").innerHTML  = "The Third Letter is " + thirdletter;
}

function random() {
   var alphabet = "abcdefghIJKLMopqrstuvwxyzABCdefghijKLMNOPqrstUVWXYZ";

    var randomLetter= alphabet[Math.floor(Math.random() * alphabet.length)];
    response = randomLetter;
    document.getElementById("response").innerHTML  = randomLetter; 

    if (thirdletter == randomLetter){
        document.getElementById("response").innerHTML = "The lucky letter is " + randomLetter + " : YOU WON!";
        console.log("YOU JUST WON!");
    }
    else{
        document.getElementById("response").innerHTML = "The lucky letter is " + randomLetter + " :Try next time";
        console.log("Try again");
    }
}
