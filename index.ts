//Classes
export class Encryptor{
    //Declarations
    private readonly chars_letters_lower:string = "abcdefghijklmnopqrstuvwxyz";
    private readonly chars_letters_upper:string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    private readonly chars_numbers:string = "0123456789";
    private readonly chars_password:string = ",.-;:_/*+{}[]()<>&?`'^!@#|$£€öÖäÄüÜ";
    private readonly chars_password_exclude:string = "\\%=\"";

    //Methods
    private countUsed(used:Boolean[]):number{
        let count:number = 0;
        for(let use of used){
            if(use){
                count++;
            }
        }
        return count;
    }

    getChars(lower:Boolean, upper:Boolean, numbers:Boolean, password:Boolean):string[]{
        let chars:string = "";
        lower ? chars += this.chars_letters_lower : undefined;
        upper ? chars += this.chars_letters_upper : undefined;
        numbers ? chars += this.chars_numbers : undefined;
        password ? chars += this.chars_password : undefined;
        return chars.split("");
    }

    getCharsRandomized(lower:Boolean, upper:Boolean, numbers:Boolean, password:Boolean):string[]{
        return this.randomizeArray(this.getChars(lower, upper, numbers, password));
    }

    /*getKey(length:number):string{
        let chars:string[] = this.getCharsRandomized(true, true, true, false);
        let key:string = "";
        while(key.length < length){
            let random = this.getRandomInt(0, chars.length - 1);
            key += chars[random];
        }
        return key;
    }*/

    getRandomInt(min:number, max:number):number{
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
        this.randomizeArray(ints);
        return ints[this.getRandomIntPseudo(0, ints.length - 1)];
    }

    getRandomIntPseudo(min:number, max:number):number{
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

    getUID(parts:number, length:number){
        let chars:string[] = this.getCharsRandomized(true, true, true, false);
        let uuid:string = "";
        for(let i:number = 0; i < parts; i++){
            let part = "";
            while(part.length < length){
                let random = this.getRandomInt(0, chars.length - 1);
                part += chars[random];
            }
            uuid += part;
            if(i<7){
                uuid += "-";
            }
        }
        return uuid;
    }

    isChar(char:string):Boolean{
        if(char.length === 1){
            return true;
        }else{
            return false;
        }
    }

    randomizeArray(values:any[]):any[]{
        let used:Boolean[] = new Array(values.length);
        for(let i:number = 0; i < used.length; i++){
            used[i] = false;
        }
        while(this.countUsed(used) < values.length){
            let id1:number = -1;
            while(id1 < 0){
                if(this.countUsed(used) < (values.length * 0.8)){
                    let rnd:number = this.getRandomIntPseudo(0, values.length - 1);
                    if(!used[rnd]){
                        used[rnd] = true;
                        id1 = rnd;
                    }
                }else{
                    for(let i:number = 0; i < used.length; i++){
                        if(!used[i]){
                            used[i] = true;
                            id1 = i;
                            break;
                        }
                    }
                }
            }
            let id2:number = -1;
            while(id2 < 0){
                let rnd:number = this.getRandomIntPseudo(0, values.length - 1);
                if(rnd !== id1){
                    used[id2] = true;
                    id2 = rnd;
                }
            }
            this.getRandomIntPseudo(0, values.length - 1);
            let temp = values[id1];
            values[id1] = values[id2];
            values[id2] = temp;
        }
        return values;
    }

    validateChar(char:string, lower:Boolean, upper:Boolean, numbers:Boolean, password:Boolean):Boolean{
        if(this.isChar(char)){
            let chars:string = "";
            lower ? chars += this.chars_letters_lower : undefined;
            upper ? chars += this.chars_letters_upper : undefined;
            numbers ? chars += this.chars_numbers : undefined;
            password ? chars += this.chars_password : undefined;
            if(chars.indexOf(char) > -1){
                return true;
            }else{
                return false;
            }
        }else{
            return false;
        }
    }

    validateString(str:string, lower:Boolean, upper:Boolean, numbers:Boolean, password:Boolean):Boolean{
        let split:string[] = str.split("");
        for(let char of split){
            if(!this.validateChar(char, lower, upper, numbers, password)){
                return false;
            }
        }
        return true;
    }
}