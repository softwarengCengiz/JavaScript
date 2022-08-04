var list = [3,4,9,6,1,3,6,4];

var dizi = [];

var lengthDizi = [];

var indexer = 0;


while(list.length != 0){
    for(var i = 0; i < list.length; i++){
         if(list[indexer] > list[i]){
             dizi.push(list[i]);
         }        
    }
    lengthDizi.push(dizi.length);
    dizi = [];
    list.shift();
}

console.log(lengthDizi);
