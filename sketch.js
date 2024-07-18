var answer = 0
function add(){
    answer =  Number(document.getElementById("num1").value) + Number(document.getElementById("num2").value);
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The answer is..."+ answer;
    window. speechSynthesis.speak(msg);
}

function sub(){
    answer = document.getElementById("num1").value - document.getElementById("num2").value;
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The answer is..."+ answer;
    window. speechSynthesis.speak(msg);
}


function multi(){
    answer = document.getElementById("num1").value * document.getElementById("num2").value
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The answer is..."+ answer;
    window. speechSynthesis.speak(msg);
}


function div(){
    answer= document.getElementById("num1").value / document.getElementById("num2").value
    document.getElementById("ans").innerHTML = answer;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The answer is..."+ answer;
    window. speechSynthesis.speak(msg);
}




function decToBin(){
    var mDec= parseInt(document.getElementById("n").value);
    var binary= mDec.toString(2)
    document.getElementById("ans2").innerHTML = binary;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The Binary value is..."+ binary;
    window. speechSynthesis.speak(msg);

}

function binToDec(){
    var fetch= document.getElementById("n").value ;
    var mBin = parseInt(fetch,2);
    var decimal= mBin.toString(10)
    document.getElementById("ans2").innerHTML = decimal;
    var msg= new SpeechSynthesisUtterance()
    msg.text="The decimal value is..." +decimal;
    window.speechSynthesis.speak(msg); 

}

function decToHexa(){
    var mDec= parseInt(document.getElementById("n").value);
    var h= mDec.toString(16)
    h= h.toUpperCase()
    document.getElementById("ans2").innerHTML = h;
   
}

function hexaToDec(){
    var mHex = document.getElementById("n").value;
    var d = parseInt(mHex, 16)
    document.getElementById("ans2").innerHTML = d;
   
}














//if setting the text then innerHTML
//if setting the value in input then value
//anything with style would be style.width/ style.color etc.
