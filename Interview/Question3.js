//Twitter Mülakat Sorusu

var maxOrder = 5;
var orders = [];

function Save(item){
    orders.push(item);
    console.log(orders);
}

function SearchIndex(index){
    for(var i = orders.length; i>=0; i--){
        if(index == i){
        console.log(`Sondan ${index}. eleman -> ${orders[i-1]}`);
        }
    }   
}

Save(1402);
Save(1330);
Save(4050);
SearchIndex(3);

