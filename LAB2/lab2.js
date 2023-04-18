// 1)================================================================
// var arr1 = [ -3, 8, 7, 6, 5, -4, 3, 2, 1 ];
// arr1.sort(function sortnum(x,y){
//    return x-y;
// })


// 2)========================================================================

// function ftlwts(str){
//    var words = str.split(' ');
//    var maxLength = 0;
//    var longestWord ='';

//    for (var i = 0; i < words.length; i++) {
//      if (words[i].length > maxLength){
//        maxLength = words[i].length;
//        longestWord = words[i];
//      }
//    }
 
//    return longestWord;
//  }
//  var str = 'Web Development Tutorial';
//  var longestWord = ftlwts(str);
//  console.log(longestWord);

// 3)========================================================================================

// function isprime(num) {
//    if (num === 1) {
//       alert("please enter anther num ");
//   }
//   else if(num > 1) {
//       for (var y= 2; y < num; y++) {
//           if (num % y === 0) {
//               return false;
//          } 
//       }
//    }
//    return true;
// }

// var kk = prompt(" please,Enter a number: ");
// kk=parseInt(kk);
// if (isprime(kk)) {
//    alert('is a prime number');}
//  else {alert('it is a not prime number,tyr again');}

// 4)====================================================================================
var Amount =prompt('please enter num');
function amountTocoins(){
  var cup='string';
  var coins=[25, 10, 5, 2, 1];
  for (var i=0 ; i<coins.length; i++){
    Amount= Amount- coins[i];
    cup = cup + coins[i] + ',';
      i--; 
  }
    return cup;
}

console.log(amountTocoins(46));









