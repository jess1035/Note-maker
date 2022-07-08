console.log("This code is running");
var i=0;

let textarea=document.getElementsByClassName("textarea");
let btn=document.getElementById("addbtn");



btn.addEventListener('click',()=>{


i++;

var text=textarea[0].value;

   let a=document.createElement(`div${i}`)
   a.setAttribute('class',`div1`);
   a.setAttribute('id',`divid${i}`);

   a.innerHTML=`
  <h3> Note NO:${i}</h3>


   <p class="innernotes">${text}</p>

   <input id="${i}" class="b" type="button" onclick="delnote(this.id)" value="Delete"> `
   ;
   


   document.getElementById("notes").appendChild(a);
    
   textarea[0].value="";

 

});





function delnote(index)

{
   let child= document.getElementById(`divid${index}`)
   document.getElementById("notes").removeChild(child);
console.log(child);
}

   











