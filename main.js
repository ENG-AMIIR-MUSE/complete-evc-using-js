


let balance  = 0;
let number  = 612353406;
let userPin  = 1122;


function getBalance(){
    return balance;
}



let userInput   = Number(prompt("-EVCPLUS \n Fadlan Geli Pinkaaga(Enter Your Pin ) :"))
if(userInput ==  userPin){
    let userSelection  = Number(prompt("1 . Haraagaaga Itus \n2 .  Kaarka Ku hadalka \n3 . Bixi Biilka\n4 . U wareeji EVCPLus\n5 . Warbixin kooban \n6 . Salaam Bank\n7 . Maaraynta\n8 . Taaj \n9 . Kabax"))
    switch(userSelection){
        case  1:
          alert("EVCPlus : \nHaraagaaga Waa "+ getBalance())
    }
}else{
    alert("EVCPLUS \n Pinkaaga Waa Qalad")
}

console.log(userInput)