//Task 01
function convert(celcius){
  
    let farenheit = celcius * 1.8 +32;
    return console.log(farenheit)
}

convert(10);

//Task 02
function max(a,b){
    if (a>b){
        console.log(a ,`is maximum` )
    }
    else console.log(b ,"is maximum")
}

max(4,3);

//Task 03
function isPalindrome(word){
    let reversed = ""
    for (let i= word.length -1 ; i>=0; i--){
      reversed = reversed + word[i]  ;
    }
    if(word == reversed){
        console.log(word, "is palindrome")
    }
    else console.log(word, "is not palindrome")
   
    
}
isPalindrome("madam");

//Task 04
function fact(n){
    let factorial=1;
    for (i=1; i<=n; i++){
        factorial = i*factorial;
    }
    return console.log(factorial)
}
fact(3);

//Task 05
function countVowel(word){
    let count = 0;
    for (let i = 0; i <= word.length-1 ; i++){
        if(word[i] == "a" || word[i] == "e" ||  word[i] == "i" ||  word[i] == "o" || word[i] == "u")
        {
            count++;
        }
        else continue;
    }
    return console.log(count) ;
}

countVowel("madama");

//Task 06

function capitalizeWord(sentence) {
    let convertedSentence = "";
    for (let i = 0; i < sentence.length; i++) {
        if (i === 0 || sentence[i - 1] === " ") {
            convertedSentence += sentence[i].toUpperCase();
        } else {
            convertedSentence += sentence[i];
        }
    }
    console.log(convertedSentence);
}
capitalizeWord("i am a boy");

//Task 07

(function(){
    console.log("hello javascript")
})();

(function(word){
    console.log("hello",word)
})("Mushfiq")


//Task 08
function callBack(func){
    console.log("Hello")
    func();
}
callBack(function(){
    console.log("Mushfiq")})

    //Task 09
    