const prompt = require("prompt-sync")({sigint:true});
var rnd;
var userGuess;
var count = 1;
var isCorrect = false;
var again;
var againCheck = true;
var level = 1;

do{
    if(level == 1){
        rnd = Math.floor(Math.random() * 26);
    }
    else if(level == 2){
        rnd = Math.floor(Math.random() * 51);
    }
    while(count <= 5){
        userGuess = parseInt(prompt("Sayı Tahmin Edin : "));
        if(userGuess < 0 || userGuess > 25 && level == 1){
         console.log("İstenen aralıkta sayı girin!");
         count -= 1;   
        }
        if(userGuess < 0 || userGuess > 50 && level == 2){
            console.log("İstenen aralıkta sayı girin!");
        }
        else{
            if(userGuess != rnd){
                console.log(`Hatalı giriş yaptınız. Kalan deneme hakkınız :${5-count}`);
                count++;
                if(count == 0){
                    isCorrect = true;
                    break;
                }
                console.log(rnd);
            }
            else{
                console.log(`Tebrikler bildiniz. Sayı ${rnd} idi.`);
                isCorrect = true;
                level = 2;
                count = 1;
                break;
            }
        }
    }

    if(isCorrect == true){
        console.log("Tekrar oynamak ister misiniz ? (y/n)");
        again = prompt("");
        if(again == "n"){
            againCheck = false;
            count = 1;
        }
    }
}while(againCheck == true);

