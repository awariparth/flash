/**
 * 
 */

var fn=function()
{
console.log("hi there"+fn.age);	
}

fn.age=14;

var obj={name:"ajay"};
obj.age = 24;

fn[43]=function(){console.log("hello")}
fn();
fn[12]();
