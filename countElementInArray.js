function countElementInArray() {
    let array = ["apple", "banana", "apple", "orange", "banana", "apple"];
    let elementToCount = "apple";

    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elementToCount) {
            count++;
        }
    }

    console.log(`The element "${elementToCount}" appears ${count} times in the array.`);
}

countElementInArray();