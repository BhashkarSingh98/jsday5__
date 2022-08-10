//Question1--:Create a button,on click of which new Heading tag h1 should be added with text as "MERN stack" on the screen above button.

function textchang(){
    const changeText = document.getElementById("txtchng");
    changeText.innerText = 'MERN STACK';
}

//Question2--:Write code to get 1st H1 element from a webpage using DOM.

const output = document.getElementsByTagName("h1")[1].innerHTML
console.log(output);


//Question3--:Write code to implement timer clock using JS -- display HH:MM:SS -- the time should keep updating every second.

const digitalclock=()=>{
    let date=new Date();

    let hours=date.getHours();
    let minutes=date.getMinutes();
    let second=date.getSeconds();
    let ampm = hours >= 12 ? "PM" : "AM";
    document.getElementById("hr").innerHTML=hours;
    document.getElementById("min").innerHTML=minutes;
    document.getElementById("sec").innerHTML=second;
    document.getElementById("amOrpm").innerHTML=ampm;

    setInterval(digitalclock,1000)

}
digitalclock();

//Question4--:Create an HTML page having content as Hello world and a button named Replace Text. When user will click on this button page content should be changed to "Welcome to Elevation academy".

function reptxt(){
    const replace = document.getElementById('text2');
    replace.innerText = "Welcome to PrepBytes."
}

//Qustion5--:Create an HTML page having content as Hello world and a button named "Hide Text." When user will click on this button hide the "Hello World" text.
//Doubt

$(".button3").click(function(){
    $("#hide").hide();
});

//Question6--:Given an array of 0's and 1's find out number of 0's.

let arr1 = [1,0,0,0,1,0];
let arr2=arr1.filter((x)=>x<1);

console.log("Number of 0's in arrays are:" + arr2.length);
/////method--2
// let count = 0;
// for(let x = 0;x<arr1.length;x++){
//     if(arr1[x] === 0){
//         count++
//     }
// }
//console.log("Number of zeros's in arrays are:" + count);

  

//Question7--:Given an array find out total no. of odd and even nos.

function OddEven(array,size){
    oddNum = 0;
    evenNum = 0;

    for(let i = 0;i<size;i++){
        if(array[i]%2==0){
            evenNum++
        }
        else{
            oddNum++;
        }
    }
    console.log("Number of even count = " + evenNum);
    console.log("Number of odd count = " + oddNum);
}
let array = [2, 3, 4, 5, 6];
let n = array.length;
OddEven(array,n);


// method 2---
let array1=[1,2,3,4,5,6,7,8,9];
let array2=array1.filter((x)=>x%2==0)
let array3=array1.filter((x)=>x%2)
console.log("Number of even count = "+array2.length);
console.log("Number of odd count = " +array3.length);


//Question8--:Given a string find out number of vowels.

function countVowel(str){
    let vo = 0;
    const vowels = ['a','e','i','o','u','A','E','I','O','U'];

    for (let char of str){
        if(vowels.includes(char)){
            vo++;
        }
    }
    console.log("Number of vowel Count:" +  vo);
}

let str = ('bhashkar')
countVowel(str);

//Question9--:Write a code to create two objects with 2 properties each, one will be string and other will be an array. Create a function to check if all the elements of the arrays in both the objects are same.

const object1 = {
    id:[1,3,4,5,8],
    name:'bhashkar',
}

const object2 = {
    id:[1,3,4,5,8],
    name:'singh',
}

const checkFunction = function(object1,object2){
    const object1len = Object.keys(object1).length;
    const object2len = Object.keys(object2).length;

    if(object1len === object2len) {
        return Object.keys(object1).every(
            key => object2.hasOwnProperty(key)
               && object2[key] === object1[key]);
    }
    return false;
}
console.log(checkFunction(object1,object2));
