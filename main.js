
let balance = 10;
let number = 612353406;
let userPin = 1122;
function getBalance() {
    return balance;
}
// display function 
function displayOptions() {
    let userSelection = Number(prompt("1 . Haraagaaga Itus \n2 .  Kaarka Ku hadalka \n3 . Bixi Biilka\n4 . U wareeji EVCPLus\n5 . Warbixin kooban \n6 . Salaam Bank\n7 . Maaraynta\n8 . Taaj \n0 . Kabax"))
    return userSelection
}
function exit() {
    return "EVCPLus \nMacslaama !!!"

}
// wrong message when user enter invalid  input 
function displayErrorMessage() {
    return "EVCPLus \ninvalid !!"
}
// kushubo internet 
function kushuboInternet(type) {
    let lacag = Number(prompt("EVCPLus \nFadlan Geli Lacagta :"))
    if (isNaN(lacag)) {
        alert(displayErrorMessage())

    } else {
        if (confirm("EVCPlus \n Mahubtaa Inaad $" + lacag + " Ugu shubatid " + type + " internet")) {
            if (lacag <= balance) {
                alert(`Waxaad ${lacag} ku shubutay  ${type} internet \nHaraagaaga Waa ${balance - lacag} `)
            } else {
                alert("EVCPLUS \nHaraagaaga Kuguma Filna ");
            }
        } else {
            exit()
        }
    }
}
function kuShuboAirtime() {
    // alert()
    let lacag = Number(prompt("EVCPLus \nFadlan Geli Lacagta :"))
    if (isNaN(lacag)) {
        alert(displayErrorMessage())
    } else {
        if (confirm("EVCPlus \n Mahubtaa Inaad $" + lacag + " Ugu shubatid  unDefined\nOk \ncancel")) {
            if (lacag <= balance) {
                alert(`Waxaad ${lacag} ku shubutay  Airtime \nHaraagaaga Waa ${balance - lacag} `)
            } else {
                alert("EVCPLUS \nHaraagaaga Kuguma Filna ");
            }
        } else {
            exit()
        }
    }
}
function validateNumber(number) {
    // console.log(n)
    const validatePhone = number.toString();
    let message = ""
    if (!isNaN(number)) {
        if (Number(validatePhone.length) === 9 || Number(validatePhone.length) === 10) {
            if (validatePhone.startsWith("061") || validatePhone.startsWith("61")) {
                message = true
            } else {
                message = "number should start with 061 or 61"
            }
        } else {
            message = `invalid Number , number length should be 9 or 10 , your number is length is  ${validatePhone.length}`
        }
    } else {
        message = "please enter a valid phone number"
    }
    return message
}
function uguShubAirtime() {
    // alert()
    let userNumber = Number(prompt("EVCPLus \nFadlan Geli Mobile-ka :"))

    if (validateNumber(userNumber) === true) {
        let lacag = Number(prompt("EVCPLus \nFadlan Geli Lacagta :"))
        if (lacag >= 1) {
            if (confirm("EVCPlus \n Mahubtaa Inaad $" + lacag + " Ugu shubatid  unDefined")) {
                if (lacag <= balance) {
                    alert(`Waxaad ${lacag} ku shubutay  Airtime \nHaraagaaga Waa ${balance - lacag} `)
                } else {
                    alert("EVCPLUS \nHaraagaaga Kuguma Filna ");
                }
            } else {
                exit()
            }
        }

        else {
            alert("invalid Money !, ")
        }

    } else {
        alert(validateNumber(userNumber))
    }
}
function cases() {
    switch (displayOptions()) {
        case 1:
            alert("EVCPlus : \nHaraagaaga Waa " + getBalance())
            break; // case one ends here 
        case 2:
            let caseTwoSelections = Number(prompt("1 . Ku Shubo Airtime \n2 .  Ugu Shun Airtime \n3 . Ku Shubo Internet\n0 . Kabax"))
            switch (caseTwoSelections) {
                case 1:
                    kuShuboAirtime()
                    break; // caseTwoSelection of 1  ends here
                case 2:
                    uguShubAirtime();
                    break;
                case 3:
                    let caseThreeSelections = Number(prompt("Fadlan Dooro number-ka ku shubayso \n1 . Isbuucle (Weakly) \n2 . Maalinle (daily)  \n3 . Bile (monthly) \n0 . Kabax"))
                    if (caseThreeSelections == 1) {
                        kushuboInternet("Weakly (isbuucle )")

                    } else if (caseThreeSelections == 2) {
                        kushuboInternet("Daily (Maalinle ) ")
                    }
                    else if (caseThreeSelections == 3) {
                        kushuboInternet("Bile")
                    } else {
                        alert(displayErrorMessage())
                    }
                    switch (caseThreeSelections) {
                        case 0:
                            alert(exit())
                            break;
                    }
                    break;// caseTwoSelection of  4 : ends here 
                case 0:
                    alert(exit())
                    break// caseTwoSelection 0 : ends here 
            }
            break; // case two ends here 
        case 3:

            break;

        case 4:
            break;

        case 5:
            break;
        case 6:
            break;
        case 7: break;

        case 0:
            alert(exit())
            break;
    }
}
let userInput = Number(prompt("-EVCPLUS \n Fadlan Geli Pinkaaga(Enter Your Pin ) :"))
if (userInput == userPin) {
    cases()
} else {
    alert("EVCPLUS \n Pinkaaga Waa Qalad")
}

console.log(userInput)