var tag2="Size",threeDot=document.getElementsByClassName("overflow_menu"),tag="Hide";function run(){setTimeout((function(){for(var e=document.querySelectorAll(".popmenu_listItem_button"),t=0;t<e.length;t++)e[t].innerText.includes(tag)&&(e[t].click(),console.log("click"));console.log("running1"),setTimeout((function(){for(var e=document.querySelectorAll(".popmenu_listItem_button"),t=0;t<e.length;t++)e[t].innerText.includes(tag2)&&(e[t].click(),console.log("click"));console.log("running2")}),"0")}),"0")}for(var i=0;i<threeDot.length;i++)threeDot[i].addEventListener("click",run);var Tags=document.getElementsByClassName("overflow_menu");for(i=0;i<=Tags.length;i++)Tags[i].style.width="40px";



