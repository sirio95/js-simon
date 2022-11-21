//funzioni

function randomNum(max, min){
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function randomNumArr(ext, maxN, minN){
    const arrNum= [];
    let num= randomNum(maxN, minN);
    while(arrNum.length<ext){
        let num= randomNum(maxN, minN);
        if(!arrNum.includes(num)){
            arrNum.push(num);
        }
    }   
    return arrNum;
}

function creazioneElemento(numEl, elType, elClass, elPadre){
    const newEl= document.createElement(elType);
    newEl.classList.add(elClass);
    newEl.innerHTML += numEl;
    elPadre.append(newEl);
}

function creazioneButton(id_title, placeholder, btnValue, btnID, inputID){
    const newTitle= document.createElement('h2', 'Pronto a giocare?');
    const newInp= document.createElement('input');
    const newBtn= document.createElement('button', 'Testa la tua memoria');
    newInp.id= btnID;
    newInp.setAttribute('placeholder', placeholder);
    newBtn.id= inputID;
    newBtn.innerHTML= btnValue;

    document.getElementById(id_title).append(newTitle, newInp, newBtn);
}


