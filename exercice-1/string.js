function isEmpty(string){
    if(!string || typeof string != "string" || string == ""){
        return true;
    }
    return false;
}

function ucFirst(string){
    if(isEmpty(string)){
        return "Empty string"
    }
    const c = string[0].toUpperCase();
    string = string.substring(1);
    string = c + string;
    return string;
}

function capitalize(string, separator){
    if(isEmpty(string)){
        return "Empty string"
    }
    let str = string.split(" ");
    let strf = [];
    for(let test of str){
        strf.push(ucFirst(test))
    }
    return strf.join(separator);
}

function camelCase(string){
    if(isEmpty(string)){
        return "Empty"
    }
    return capitalize(string, "");
}

function snake_case(string){
    if(isEmpty(string)){
        return "Empty"
    }
    let str = string.split(" ");
    return str.join("_");
}

function leet(string){
    if(isEmpty(string)){
        return "Empty"
    }
    let letters = string.split("");
    for(var i=0;i<letters.length;i++){
        switch(letters[i].toLowerCase()){
            case "a":
            letters[i] = "4";
            break;
            case "e":
            letters[i] = "3";
            break;
            case "i":
            letters[i] = "1";
            break;
            case "o":
            letters[i] = "0";
            break;
            case "u":
            letters[i] = "(_)";
            break;
            case "y":
            letters[i] = "7";
            break;
        }
    }
    return letters.join("");
}
