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
