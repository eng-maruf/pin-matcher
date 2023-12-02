// display hide part
document.getElementById('not-mach-pin').style.display='none';
document.getElementById('mach-pin').style.display='none';
document.getElementById('welcome-part').style.display='none';


// random number creating
function creatingRandomNumber(){
    const min = 1000;
    const max = 9999;
    let result = Math.floor(Math.random()*(max-min+1)+min);
    // result = result.toString();
    console.log(result);
    console.log(typeof(result));
    return result;
    
};

// generate pin display in web part
document.getElementById('generate-pin').addEventListener('click', function(){
    const generateNumber = creatingRandomNumber()
    document.getElementById('generate-box').value = generateNumber;
});

// button setup part
function inputHandel(){
    for ( let i = 0; i<= 9; i++){
        document.getElementById('button-'+i).addEventListener('click', function(){
        inputValue(i.toString());
        });
    }
};
// display user input part
function inputValue(input){
    let userInput = document.getElementById('user-input');
    userInput.value = userInput.value + input;
};
inputHandel()

document.getElementById('submit').addEventListener('click',function(){
    const ai = document.getElementById('generate-box').value;
    let user = document.getElementById('user-input').value;
    // user = parseInt(user)
    console.log(typeof(user));
    if (ai == user){
        document.getElementById('mach-pin').style.display='block';
        document.getElementById('container-part').style.display='none';
        document.getElementById('welcome-part').style.display='block';
    }
    else{
        document.getElementById('not-mach-pin').style.display='block';
    }
    
});

document.getElementById('backspase').addEventListener('click', function(){
    let back = document.getElementById('user-input');
    let backspase = back.value;
    
    if ( backspase.length > 0){
        back.value= backspase.substring(0, backspase.length-1);
    }
});

document.getElementById('clear').addEventListener('click', function(){
    let clear = document.getElementById('user-input');
    let clearbutton = clear.value;
    
    if ( clearbutton.length > 0){
        clear.value=" ";
    }
});

