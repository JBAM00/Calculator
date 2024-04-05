const display = document.getElementById("display");

function Display(input){
    display.value += input;
}

function Delete(){
    var currentValue = display.value;
    display.value = currentValue.slice(0, -1);
}

function Clear(){
    display.value = "";
}

function Answer(){
    try { 
        const ans = display.value.replace(/÷/g, '/').replace(/×/g, '*').replace(/%/g, '/100');
        display.value = eval(ans);
    } 
    catch (error) {
    display.value = 'Error';
    }
}