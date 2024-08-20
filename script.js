let inputf=document.getElementById("fvalue");
let inputc=document.getElementById("cvalue");
let buttonf=document.getElementById("farhenneit");
let buttonc=document.getElementById("celcius");
let unit=document.getElementById("unit");
let temp=document.getElementById("temp");
let statusa=document.getElementById("status");
let celcius=0;
let farhenneit=0;
let box=document.querySelector(".box");
// °F = (9/5) °C+32
// °C = (°F - 32) × 5/9;
buttonc.onclick=function(){
  celcius=inputc.value;
  farhenneit=(9/5)* celcius+32;
  unit.textContent="Farhenneit";
  temp.textContent=Math.round(farhenneit)+"°";
  if(celcius>100){
    statusa.textContent="hot";
    box.style.background='red';
  }
  else{
    statusa.textContent="normal";
    box.style.background='rgb(58, 124, 255)';
  }

}
buttonf.onclick=function(){
  farhenneit=inputf.value;
  celcius=(farhenneit - 32)* 5/9;
  unit.textContent="celcius";
  temp.textContent=Math.round(celcius)+"°";
  if(celcius>100){
    statusa.textContent="hot";
    box.style.background='red';
  }
  else{
    statusa.textContent="normal";
    box.style.background='rgb(58, 124, 255)';
  }

}