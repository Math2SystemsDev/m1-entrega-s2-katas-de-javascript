//exercício 01
function cubicSquare(){
    for(n = 0; n < 10; n++){
        x = Math.pow(n, 3)
        console.log(x)
    }
}
cubicSquare();

//exercício 02
function divisiblesFor(number, number2){
    for(c = 1; c < number; c++){
        if(c % number2 == 0){
            console.log(c);
        }
    }
}
divisiblesFor(100,10);

//exercício 03
function stringElement(stringg, numb){
    console.log(stringg[numb].toUpperCase())
}
stringElement('algoritmo',7);



//exercício 04
function stringSlicer(stringg3, numb3){
    console.log(stringg3.slice(0,[numb3]))
}
stringSlicer('Algoritmo', 4);


//exercício 05
function stringRest(stringg4, numn4){
    console.log(stringg4.slice([numn4]))
}
stringRest('Algoritmo',2);


//exercício 06 
function countVowels(stringg7){
    let contador = 0;
    for(let g = 0; g <= stringg7.length; g++){
        if(stringg7[g] === 'a'){
            contador++;
        }else if(stringg7[g] == 'e'){
            contador++;
        }else if(stringg7[g] == 'i'){
            contador++;
        }else if(stringg7[g] == 'o'){
            contador++;
        }else if(stringg7[g] == 'u'){
            contador++;
        } 
    }
        console.log(contador)
}
countVowels('abacaxi');

//exercício 07
function countTextOccurrences(stringx, letra){
    let contador2 = 0;
    for(let p = 0; p <= stringx.length; p++){
        if(stringx[p] == letra){
            contador2++
        }
    }
    console.log(contador2)
}
countTextOccurrences('abacaxi','a')

//exercício 08 
function textBackwards(str){
    for (let i = str.length - 1; i >= 0; i--) { 
        var newString = newString + str[i];
    }
    console.log(newString)
}
textBackwards('abacaxi')


//exercício 09
function removeBlank(stringg9){
    let retorno2 = ''    
    for(let i=0; i < stringg9.length; i++){
            if(stringg9[i] == ' '){
                
            }else{
                retorno2 += stringg9[i]
            }
        }
        console.log(retorno2)
}
removeBlank('abac axi');



//exercício 10
function encryptText(stringg10){
    let retorno = ''
    for(let v=0; v <= stringg10.length; v++){
        if(stringg10[v] == 'a'){
            retorno += 'x';
        }else if(stringg10[v] == 'e'){
            retorno += 'y';
        }else if(stringg10[v] == 'i'){
            retorno += 'w';
        }else if(stringg10[v] == 'o'){
            retorno += 'k';
        }else if(stringg10[v] == 'u'){
            retorno += 'z'
        }else{ retorno += stringg10[v] } 
        
    }
    console.log(retorno)
}
encryptText('uma frase ultra secreta que precisa ser criptografada') 
