"use strict"

// Setting up player's names
var player1 = "";
var player2 = "";

function startGame(){
    
    player1 = document.getElementById("player1").value;
    if(player1 == ""){
        player1 = "player1"
    }
    player2 = document.getElementById("player2").value;
    if(player2 == ""){
        player2 = "player2"
    }
    
    document.getElementById("main").style.display = "none";
    document.getElementById("game").style.display = "block";

    console.log(player1, player2);
}

//lets take a flag to differenciate players like true for player one and false for player two
var flag = true;

// creating a function to check who wins
function winCheck(){

    // getting DOM Elements of all the divisions
    var div1 = document.getElementById("one").value;
    var div2 = document.getElementById("two").value;
    var div3 = document.getElementById("three").value;
    var div4 = document.getElementById("four").value;
    var div5 = document.getElementById("five").value;
    var div6 = document.getElementById("six").value;
    var div7 = document.getElementById("seven").value;
    var div8 = document.getElementById("eight").value;
    var div9 = document.getElementById("nine").value;

    console.log(div1," ", div2," ", div3," ", div4," ", div5," ", div6," ",div7," ", div8," ", div9);

    // checking wheather player one wins
    if(div1 == "X" && div2 == "X" && div3 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;

    } 
    else if(div4 == "X" && div5 == "X" && div6 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;
            
    }
    else if(div7 == "X" && div8 == "X" && div9 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
    }
    else if(div1 == "X" && div4 == "X" && div7 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;

    }
    else if(div2 == "X" && div5 == "X" && div8 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("one").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("nine").disabled = true;
            
    }
    else if(div3 == "X" && div6 == "X" && div9 == "X"){

            document.getElementById("display").innerHTML = `${player1} won this match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;

    }
    else if(div1 == "X" && div5 == "X" && div9 == "X"){

            document.getElementById("display").innerHTML = `${player1} won the match`;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;

    }
    else if(div3 == "X" && div5 == "X" && div7 == "X"){

            document.getElementById("display").innerHTML = `${player1} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;

    }

    // checking wheather player two wins
    else if(div1 == "0" && div2 == "0" && div3 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;

    }
    else if(div4 == "0" && div5 == "0" && div6 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;
    }
    else if(div7 == "0" && div8 == "0" && div9 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
    }
    else if(div1 == "0" && div4 == "0" && div7 == "0"){
        
            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;

    }
    else if(div2 == "0" && div5 == "0" && div8 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("nine").disabled = true;

    }
    else if(div3 == "0" && div6 == "0" && div9 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("five").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;

    }
    else if(div1 == "0" && div5 == "0" && div9 == "0"){

            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("two").disabled = true;
            document.getElementById("three").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("seven").disabled = true;
            document.getElementById("eight").disabled = true;

    }
    else if(div3 == "0" && div5 == "0" && div7 == "0"){
            document.getElementById("display").innerHTML = `${player2} won the match`;
            document.getElementById("one").disabled = true;
            document.getElementById("two").disabled = true;
            document.getElementById("four").disabled = true;
            document.getElementById("six").disabled = true;
            document.getElementById("eight").disabled = true;
            document.getElementById("nine").disabled = true;
    }

    // checking for tie
    else if((div1 == 'X' || div1 == '0') && (div2 == 'X'
        || div2 == '0') && (div3 == 'X' || div3 == '0') &&
        (div4 == 'X' || div4 == '0') && (div5 == 'X' ||
        div5 == '0') && (div6 == 'X' || div6 == '0') &&
        (div7 == 'X' || div7 == '0') && (div8 == 'X' ||
        div8 == '0') && (div9 == 'X' || div9 == '0')){
            
            document.getElementsByClassName("input").disabled = true;
            document.getElementById("display").innerHTML = `match tie`;
    }

    //if no one wins that means game is still in progress so we need to change the player's turn
    else{
        if(flag == true){
            document.getElementById("display").innerHTML = `${player2}'s turn`;
        }
        else{
            document.getElementById("display").innerHTML = `${player1}'s turn`;
        }
    }
}

// function when player click on play again the player names will be same but game pade will reset
function playAgain(){
    console.log(flag);
    if(flag == true){
        document.getElementById("display").innerHTML = `${player1}'s turn`;
    }
    else{
        document.getElementById("display").innerHTML = `${player2}'s turn`;
    }
    
    //setting vlaue null for all the divisions to replay
    document.getElementById("one").value = "";
    document.getElementById("two").value = "";
    document.getElementById("three").value = "";
    document.getElementById("four").value = "";
    document.getElementById("five").value = "";
    document.getElementById("six").value = "";
    document.getElementById("seven").value = "";
    document.getElementById("eight").value = "";
    document.getElementById("nine").value = "";

    //enabling the divisions to play further
    document.getElementById("one").disabled = false
    document.getElementById("two").disabled = false
    document.getElementById("three").disabled = false
    document.getElementById("four").disabled = false
    document.getElementById("five").disabled = false
    document.getElementById("six").disabled = false
    document.getElementById("seven").disabled = false
    document.getElementById("eight").disabled = false
    document.getElementById("nine").disabled = false
}

//reseting the game if players changed
function resetGame(){
    location.reload()
}

// Here we will put the value of player one and two on click on a div accordingly
function divOneClick(){
    if(flag == true){
        document.getElementById("one").value = "X";
        document.getElementById("one").disabled = true;
        winCheck();
        flag = false;
    }
    else{
        document.getElementById("one").value = "0";
        document.getElementById("one").disabled = true
        winCheck();
        flag = true;
    }
}

function divTwoClick(){
    // console.log(flag);
    if(flag){
        document.getElementById("two").value = "X";
        document.getElementById("two").disabled = true
        winCheck();
        flag = false;
    }
    else{
        document.getElementById("two").value = "0";
        document.getElementById("two").disabled = true
        winCheck()
        flag = true;
    }
}

function divThreeClick(){
    if(flag){
        document.getElementById("three").value = "X";
        document.getElementById("three").disabled = true;
        winCheck();
        flag = false;
    }
    else{
        document.getElementById("three").value = "0";
        document.getElementById("three").disabled = true;
        winCheck();
        flag = true;
    }
}

function divFourClick(){
    if(flag){
        document.getElementById("four").value = "X";
        document.getElementById("four").disabled = true;
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("four").value = "0";
        document.getElementById("four").disabled = true
        winCheck()
        flag = true;
    }
}

function divFiveClick(){
    if(flag){
        document.getElementById("five").value = "X";
        document.getElementById("five").disabled = true;
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("five").value = "0";
        document.getElementById("five").disabled = true;
        winCheck()
        flag = true;
    }
}

function divSixClick(){
    if(flag){
        document.getElementById("six").value = "X";
        document.getElementById("six").disabled = true;
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("six").value = "0";
        document.getElementById("six").disabled = true;
        winCheck()
        flag = true;
    }
}

function divSevenClick(){
    if(flag){
        document.getElementById("seven").value = "X";
        document.getElementById("seven").disabled = true;
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("seven").value = "0";
        document.getElementById("seven").disabled = true;
        winCheck()
        flag = true;
    }
}

function divEightClick(){
    if(flag){
        document.getElementById("eight").value = "X";
        document.getElementById("eight").disabled = true
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("eight").value = "0";
        document.getElementById("eight").disabled = true;
        winCheck()
        flag = true;
    }
}

function divNineClick(){
    if(flag){
        document.getElementById("nine").value = "X";
        document.getElementById("nine").disabled = true;
        winCheck()
        flag = false;
    }
    else{
        document.getElementById("nine").value = "0";
        document.getElementById("nine").disabled = true
        winCheck()
        flag = true;
    }
}
