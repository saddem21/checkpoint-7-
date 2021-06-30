const hearts =document.querySelectorAll(".heart")
// console.log(hearts)
for (let heart of hearts ) 
{
  heart.addEventListener('click' , function () {
    heart.classList.toggle("color")
  })
}
var div1= document.getElementById("id1");
var div2= document.getElementById("id2");
var div3= document.getElementById("id3");
var div4= document.getElementById("id4");
var div5= document.getElementById("id5");
var div6= document.getElementById("id6");
var div7= document.getElementById("id7");
var bttn1= document.getElementById("id8");
var div8= document.getElementById("id9");
var div9= document.getElementById("id10");
var div10= document.getElementById("id11");
var div11= document.getElementById("id12");
var div12= document.getElementById("id13");
var div13= document.getElementById("id14");
var div14= document.getElementById("id15");
var bttn2= document.getElementById("id16");
var div15= document.getElementById("id17");
var div16= document.getElementById("id18");
var div17= document.getElementById("id19");
var div18= document.getElementById("id20");
var div19= document.getElementById("id21");
var div20= document.getElementById("id22");
var div21= document.getElementById("id23");
var bttn3= document.getElementById("id24");

  bttn1.addEventListener('click' , function() {
      div1.removeChild(div2);
      div1.removeChild(div3);
      div1.removeChild(div4);
      div1.removeChild(div5);
      div1.removeChild(div6);
      div1.removeChild(div7);
    })
    bttn2.addEventListener('click' , function() {
      div8.removeChild(div9);
      div8.removeChild(div10);
      div8.removeChild(div11);
      div8.removeChild(div12);
      div8.removeChild(div13);
      div8.removeChild(div14);
    })
    bttn3.addEventListener('click' , function() {
      div15.removeChild(div16);
      div15.removeChild(div17);
      div15.removeChild(div18);
      div15.removeChild(div19);
      div15.removeChild(div20);
      div15.removeChild(div21);
    })
    var inputs=document.querySelectorAll(".class2");
    var bttn4=document.querySelectorAll(".button2");
    var bttn5=document.querySelectorAll(".button3");
for (let i = 0; i < inputs.length; i++) {
  bttn4[i].addEventListener('click', function() {
  inputs[i].value= Number(inputs[i].value)+ 1;
    
  })
}
for (let i = 0; i < inputs.length; i++) {
 bttn5[i].addEventListener('click', function() {
  if(inputs[i].value>0){

  inputs[i].value= Number(inputs[i].value)- 1;
  
  }
  })
  
  
  
  

  
    
    
  
}  