//Classes
export class Encryptor{
    
}

/*
export const chars:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o",
                                "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "A", "B", "C", "D",
                                "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S",
                                "T", "U", "V", "W", "X", "Y", "Z", "0", "1", "2", "3", "4", "5", "6", "7",
                                "8", "9"];
export const chars_password:string[] = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m",
                                        "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",
                                        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
                                        "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z",
                                        "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "+", "-",
                                        "*", "/", "<", ">", "ç", "%", "&", "(", ")", "?", "!", "[", "]",
                                        ":", ",", "$", "£", "@", "#", "|", "¢", "ä", "Ä", "ö", "Ö", "ü",
                                        "Ü", "_"];
 */
/*

export function getRandomInt(min:number, max:number):number{
    if(max < min){
        let temp:number = min;
        min = max;
        max = temp;
    }
    max++;
    let difference:number = max - min;
    let ints:number[] = [];
    for(let i:number = min; i < difference + min; i++){
        ints.push(i);
    }
    for(let i:number = 0; i < difference; i++){
        let random:number = getRandomIntPseudo(0, ints.length - 1);
        let random2:number = -1;
        while(random2 === -1){
            random2 = getRandomIntPseudo(0, ints.length - 1);
            if(random2 === random){
                random2 = -1;
            }
        }
        let temp:number = ints[random];
        ints[random] = ints[random2];
        ints[random2] = temp;
    }
    return ints[getRandomIntPseudo(0, ints.length - 1)];
}

function getRandomIntPseudo(min:number, max:number):number{
    if(max < min){
        let temp:number = min;
        min = max;
        max = temp;
    }
    max++;
    let difference:number = max - min;
    let random:number = Math.floor(Math.random() * difference);
    random += min;
    return random;
}


export function getUUID():string{
    let uuid:string = "";
    for(let i:number = 0; i < chars.length; i++){
        let random:number = getRandomInt(0, chars.length - 1);
        let random2:number = -1;
        while(random2 === -1){
            random2 = getRandomInt(0, chars.length - 1);
            if(random2 === random){
                random2 = -1;
            }
        }
        let temp:string = chars[random];
        chars[random] = chars[random2];
        chars[random2] = temp;
    }
    for(let i:number = 0; i < 8; i++){
        let part = "";
        while(part.length < 8){
            let random = getRandomInt(0, chars.length - 1);
            part += chars[random];
        }
        uuid += part;
        if(i<7){
            uuid += "-";
        }
    }
    return uuid;
}
 */