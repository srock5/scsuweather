/* You're a wizard Harry.

/*
Functions in this file:
keys(e)           Keyboard controls
prevStep()        Back one time step
nextStep()        Forward one time step
prevProduct()     Moves to the product on the left in the same timestep
nextProduct()     Moves to the product on the right in the same timestep
*/

function keys(e) {
//Skip if on feedback form
if(floatid == 4){
return;
}

//Left Arrow Key
if(e.keyCode == 37){
prevProduct();
return !(e.keyCode);
}

//Up Arrow Key
else if(e.keyCode == 38){
prevStep();
return !(e.keyCode);
}

// Right Arrow Key
else if(e.keyCode == 39){
nextProduct();
return !(e.keyCode);
}

//Down Arrow Key
else if(e.keyCode == 40){
nextStep();
return !(e.keyCode);
}
else{close_float();}
}

//S = settings menu
else if(e.keyCode == 83 || e.keyCode == 115){
if(floatid != 2){
float_settings();
}

else{
if(curwidth >= 700){close_popup();}else{close_float();}
}


//Space = animation mode
else if{
(e.keyCode == 32){
animationToggle();
return !(e.keyCode == 32);
}

function prevProduct(){
if(dprog_urls.length == 0){
if(hr - interval >= minhour){
if(hr <= 0){hr = hr - models[model_idx].run_interval;}
else if(hr > 0){hr = hr - interval;}
}

//Update image display
showImage();
}
else{
element = document.getElementById('slider-dprog');
if(parseInt(element.value) > 0){
element.value = parseInt(element.value) - 1;
}
document.dprogmap.src = dprog_urls[element.value].src;
}
}

//Step one interval forward
function nextProduct(){
if(dprog_urls.length == 0){
if(hr + interval <= maxhour){
if(hr < 0){hr = hr + models[model_idx].run_interval;}
else if(hr >= 0){hr = hr + interval;}
}

//Update image display
showImage();
}
else{
element = document.getElementById('slider-dprog');
if(parseInt(element.value) < dprog_urls.length){
element.value = parseInt(element.value) + 1;
}
document.dprogmap.src = dprog_urls[element.value].src;
}
}

//Up one level
function prevStep(){
//Current index of product
var curprod_idx = searchByName(prod,curprods)
//Move up by one
if(curprod_idx > 0){
changeProd(curprods[curprod_idx-1].name)
}
}

//Down one level
function nextStep(){
//Current index of product
var curprod_idx = searchByName(prod,curprods)
//Move up by one
if(curprod_idx < curprods.length-1){
changeProd(curprods[curprod_idx+1].name)
}
}
