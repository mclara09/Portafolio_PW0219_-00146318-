function palindrome(palabra){
var isPalindrome=true;
var original=palabra.split("");
//console.log(original);
var invertido=palabra.split("").reverse();
//console.log(invertido);
for(var i=0; i<original.length;i++){
    if(invertido[i]!=original[i]){
        console.log("no es palindrome");
        isPalindrome=false;
        break;
    }

    
    console.log("es palindroma");

}
}

palindrome("ana");