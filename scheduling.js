/* 
 setTimeout:

  allows us to run a function once after
  the interval of time.

  setInterval : 
  allows us to run a function repeatedly .
  starting afger the interval of time.then repeating continuously at
  that interval.

*/
/* 
function check(){
    console.log("Practicing the set time out ");
}

setTimeout(check,1000); */

// to cancel with cleartimeout
/*  
a call to settime out returns a timer identifier timer id what 
we can use to cancel the execution

*/


function check(){
    console.log("Practicing the set time out ");
}

// let timerId = setTimeout(check,1000);
// // clearTimeout(timerId);

/* 
 SetInerval method has the same syntax as settimeout;

 
*/
function checks(){
    console.log("checking the set interval ");

}
setTimeout(checks,2000);

/*
setTimeout is more flexible than setInterval.  
 */