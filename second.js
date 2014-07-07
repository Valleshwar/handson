/**
 * Created by 401923 on 6/27/2014.
 */


console.log('Please select your choice::');

console.log('1)Addition');
console.log('2)Subtraction');
console.log('3)Multiplication');
console.log('4)Division');



var stdin=process.openStdin();

var n1=20;
var n2=10;
var ch,res;

stdin.addListener('data',function(text) {
    console.log('data received  '+text);

if(text==1)
{
   res = n1+n2;
      console.log(res);
}
   else if(text==2)
{
    res=n1-n2;
     console.log(res);
}
    else if(text==3)
{
    res=n1*n2;
     console.log(res);
}
else if(text==4 && n2!=0)
{
    res=n1/n2;
    console.log(res);
}
    else
{
    console.log('Wrong option...  Try again');
}

});




