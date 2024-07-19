function main() {
    let str = "Welcome to India";
    console.log(str);
    
    let len = str.length;
    console.log(len);
    
    let strArray = str.split('');
    for (let i = 0, j = len - 1; i <= j; i++, j--) {
        // swapping characters
        let c = strArray[i];
        strArray[i] = strArray[j];
        strArray[j] = c;
    }
    let reversedStr = strArray.join('');
    console.log("Reversed String: " + reversedStr);
}

main();