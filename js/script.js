const start= document.getElementById('start');

start.addEventListener('click', 
    function(){
        
        //numeri da memorizzare
        
        const numbers= document.getElementById('numbers');
        const answers= document.getElementById('answers');
        const risultato= document.getElementById('risultato');
        answers.classList.add('hidden');
        risultato.classList.add('hidden');

        const numArr= randomNumArr(5, 100, 1);
        console.log(numArr);

        for(let i=0; i<numArr.length; i++){
            creazioneElemento(numArr[i], "div", "memoria", numbers)
        }

        //Dopo 30 secondi

        setTimeout(
            function(){

                answers.classList.add('visible');
                numbers.classList.add('hidden');
                creazioneButton('answers', 'inserisci un numero alla volta', 'invia i tuoi numeri', 'numeriMemoria', 'sendIt');

                const testArr= [];
                let numeriTest= document.getElementById('sendIt');

                numeriTest.addEventListener('click',
                    function(){
                        let numeroNuovo= document.getElementById('numeriMemoria');
                        testArr.push(parseInt(numeroNuovo.value));
                        console.log(testArr);

                        let matches = 0;
                        for (let i=0; i<numArr.length; i++) {
                            if (testArr.indexOf(numArr[i]) != -1)
                            matches++;
                        }

                        if(numArr.length === testArr.length){
                            risultato.classList.add('visible');
                            let verdetto= `hai indovinato ${matches} numeri. Vuoi riprovare?`
                            return risultato.innerHTML= verdetto;
                        }
                        
                        
                    }

                    
                )

            }
            
            
        , 3000)


    }
)






