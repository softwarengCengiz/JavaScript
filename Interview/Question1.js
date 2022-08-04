var str = '1000100100000101000001000000001001001000100000000000000010000000000000101010100001000101';
var biggest = 0;
var dizi = [];
var arrBiggest = [];

for(var i = 0; i < str.length; i++){

    if(str[i] == '1'){
        arrBiggest.push(isBiggest(biggest,dizi.length));
        dizi = [];    
    }

    if(str[i] == '0'){
        dizi.push(str[i]);        
    }

}

function isBiggest(x,y){
    if(x>y){
        return x;
    }
    else{
        return y;
    }
}

var biggestValue = 0;

for(var i = 0; i< arrBiggest.length; i++){
    if(arrBiggest[i]>biggestValue){
        biggestValue = arrBiggest[i];
    }
}

 console.log(arrBiggest);

 console.log(biggestValue);