var list = [10,22,22,21,22,23,22];

var arr = [];

var arrLength = [];

list.sort();

for(var i = 0; i < list.length; i++){
    for(var j = 0; j < list.length; j++){
        if(list[i] == list[j]){
            arr.push(list[j]);
         }
     }
     arrLength.push(arr.length);
     arr = [];
}

var sameValues = [];
var indexer = 0;

while(indexer <= arrLength.length){
for(var k = 0; k < arrLength.length; k++){
    if(arrLength[indexer] > arrLength[k]){
        sameValues.push(list[indexer]);
    }
    break;
}
indexer++;
}

function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
  }
  
  var unique = sameValues.filter(onlyUnique);
  
  console.log(unique);

