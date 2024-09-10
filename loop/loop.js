//for table generate by do while loop
// let n=parseInt(prompt("enter any no"))
// let a=1
// do{
//     console.log(n*a)
//     a++
// }
// while(a<=10)

//while loop runs only for true condition
//to print 1-10 only odd numbers

// let c=1
// while(c<11)
//  {
//   if(c%2!=0)
//   {
//     console.log(c)
//   }
//   c++
// }

//20-1 even no square print

// let d=20
// while (d>=1) {
//     if(d%2==0)
//     {
//         console.log(d*d)
//     }
//     d--
    
// }


//for loop
//for(initilization,condition,inc/dec)

// for(let f=1;f<=10;f++)
// {
//     console.log(f)
// }

//print 1-20 1-10print 11-20 print 20-1
// let n=parseInt(prompt("enter no"))
// if(n>=1 && n<=10)
// {
//     for(let i=1;i<=n;i++)
//     {
//         console.log(i)
//     }
// }
// else if(n>=11 && n<=20)
// {
//     for(let i=20;i>=1;i--)
//     {
//         console.log(i)
//     }
// }

//Nested for loop
//pattern ***** print
// for(let s=5;s>=1;s++)
// {
//     for(c=1;c<=5;c++)
//     {
//         document.write("*")
//     }
// }

//right angle triangle
// for(r=1;r<=5;r++)
// {
//     for(p=1;p<=r;p++)
//     {
//         document.write("*");

//     }
//     document.write("<br>")
// }

//5*5 * star 5 row 5 coloumn
for(let r=1;r<=5;r++)
{
    for(let p=1;p<=5;p++)
    {
        document.write("*");

    }
    document.write("<br>")
}