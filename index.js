"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Encryptor = void 0;
//Classes
class Encryptor {
    constructor() {
        //Declarations
        this.chars_letters_lower = "abcdefghijklmnopqrstuvwxyz";
        this.chars_letters_upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        this.chars_numbers = "0123456789";
        this.chars_password = ",.-;:_/*+{}[]()<>&?`'^!@#|$£€öÖäÄüÜ";
        this.chars_password_exclude = "\\%=\"";
    }
    //Methods
    countUsed(used) {
        let count = 0;
        for (let use of used) {
            if (use) {
                count++;
            }
        }
        return count;
    }
    getChars(lower, upper, numbers, password) {
        let chars = "";
        lower ? chars += this.chars_letters_lower : undefined;
        upper ? chars += this.chars_letters_upper : undefined;
        numbers ? chars += this.chars_numbers : undefined;
        password ? chars += this.chars_password : undefined;
        return chars.split("");
    }
    getCharsRandomized(lower, upper, numbers, password) {
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
    getRandomInt(min, max) {
        if (max < min) {
            let temp = min;
            min = max;
            max = temp;
        }
        max++;
        let difference = max - min;
        let ints = [];
        for (let i = min; i < difference + min; i++) {
            ints.push(i);
        }
        this.randomizeArray(ints);
        return ints[this.getRandomIntPseudo(0, ints.length - 1)];
    }
    getRandomIntPseudo(min, max) {
        if (max < min) {
            let temp = min;
            min = max;
            max = temp;
        }
        max++;
        let difference = max - min;
        let random = Math.floor(Math.random() * difference);
        random += min;
        return random;
    }
    getUID(parts, length) {
        let chars = this.getCharsRandomized(true, true, true, false);
        let uuid = "";
        for (let i = 0; i < parts; i++) {
            let part = "";
            while (part.length < length) {
                let random = this.getRandomInt(0, chars.length - 1);
                part += chars[random];
            }
            uuid += part;
            if (i < 7) {
                uuid += "-";
            }
        }
        return uuid;
    }
    isChar(char) {
        if (char.length === 1) {
            return true;
        }
        else {
            return false;
        }
    }
    randomizeArray(values) {
        let used = new Array(values.length);
        for (let i = 0; i < used.length; i++) {
            used[i] = false;
        }
        while (this.countUsed(used) < values.length) {
            let id1 = -1;
            while (id1 < 0) {
                if (this.countUsed(used) < (values.length * 0.8)) {
                    let rnd = this.getRandomIntPseudo(0, values.length - 1);
                    if (!used[rnd]) {
                        used[rnd] = true;
                        id1 = rnd;
                    }
                }
                else {
                    for (let i = 0; i < used.length; i++) {
                        if (!used[i]) {
                            used[i] = true;
                            id1 = i;
                            break;
                        }
                    }
                }
            }
            let id2 = -1;
            while (id2 < 0) {
                let rnd = this.getRandomIntPseudo(0, values.length - 1);
                if (rnd !== id1) {
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
    validateChar(char, lower, upper, numbers, password) {
        if (this.isChar(char)) {
            let chars = "";
            lower ? chars += this.chars_letters_lower : undefined;
            upper ? chars += this.chars_letters_upper : undefined;
            numbers ? chars += this.chars_numbers : undefined;
            password ? chars += this.chars_password : undefined;
            if (chars.indexOf(char) > -1) {
                return true;
            }
            else {
                return false;
            }
        }
        else {
            return false;
        }
    }
    validateString(str, lower, upper, numbers, password) {
        let split = str.split("");
        for (let char of split) {
            if (!this.validateChar(char, lower, upper, numbers, password)) {
                return false;
            }
        }
        return true;
    }
}
exports.Encryptor = Encryptor;
//# sourceMappingURL=index.js.map