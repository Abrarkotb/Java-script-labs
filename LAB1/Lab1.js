// var x=6 , y=3 , z=10;

// if (x>y && x>z)
//   {
//           if (y>z)
//           {alert(x + y + z);}
//           else
//           {alert (x  + z + y);}
//   }

//   else if (y>x && y >z)
//   {
//           if (x>z)
//           {alert(y +  x + z);}
//           else
//           {alert(y  + z + x);}
//   }
//   else (z>x && z>y)
//   {
//           if (x>y)
//           {alert(z + x +  y);}
//           else
//           {alert(z + y + x);}
//   } 




//     var a=1;
//   for(a=1 ; a <= 100 ; a ++){
//        if(a%3===0 && a%5===0)
//      console.log('FizzBuzz');
//     if (a % 3 ===0){
//       console.log('Fizz');}
//      else if(a % 5 ===0){
//      console.log('Buzz');}
//       else 
//      console.log('game over');}

   







//    var sum =0;
//     for( var b=3 ; b <= 1000 ; b ++){
//        if (b % 3 === 0 && b % 5 === 0)
//         sum += b;
//     }





// var flag=false;
// var num='7';
// for( var  x=1; x<=3 ;x++ ){
// var guess = prompt('please guess a num');
//   if(num === guess){
//      alert ('Good Work');
//      flag= true;
//      break;
//     }
//   else if(num != guess){
// var con = confirm ('wrong guess, want to try again?');
//     if (!con)
//     break;
//   }
// }
// if(! flag)
// alert('game over');
 


var sum1, sum2 ,sum3;

var num =prompt('please enter num');

while(num>0){
sum1= num/10;
sum1 =sum1*sum1
  
sum2=num %10;
sum2= sum2*sum2;

 sum3=sum1+sum2;
if(sum3 ==1){
 alert('your number is happy');
 break;}
 else
 alert('your num is not happy');
}
   






