var list1 = [11,8,1,4,17,21,14,30,22];

var list2 = [15,4,8,21,10,7];

var isAvailable;

for(var i = 0; i < list2.length; i++){
    isAvailable = false;
    for(var j = 0; j < list1.length; j++){
        if(list1[j] == list2[i]){
            isAvailable = true;
        }
    }
    if(isAvailable == true){
        console.log("VAR");
    }
    else{
        console.log("YOK");
    }
}