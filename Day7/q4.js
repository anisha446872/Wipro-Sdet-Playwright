// 1. Find Largest and Smallest Number in an Array
const numbers = [12, 45, 7, 89, 23, 5];

const largest = Math.max(...numbers);
const smallest = Math.min(...numbers);

console.log("Largest Number:", largest);
console.log("Smallest Number:", smallest);




// 2. Remove Duplicate Elements from an Array
const duplicateArray = [1, 2, 3, 2, 4, 1, 5, 3];

const uniqueArray = [...new Set(duplicateArray)];

console.log("\nArray After Removing Duplicates:");
console.log(uniqueArray);



// 3. Sort Array Without Using Built-in sort()
// Bubble Sort (Optimized)

const arr = [5, 2, 9, 1, 7];

for (let i = 0; i < arr.length - 1; i++) {

    let swapped = false;

    for (let j = 0; j < arr.length - 1 - i; j++) {

        if (arr[j] > arr[j + 1]) {

            [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
            swapped = true;
        }
    }

    if (!swapped) break;
}

console.log("\nSorted Array:");
console.log(arr);



// 4. Find Second Largest Number in an Array
const values = [10, 50, 30, 90, 70];

const firstLargest = Math.max(...values);

const filteredArray = values.filter(num => num !== firstLargest);

const secondLargest = Math.max(...filteredArray);

console.log("\nSecond Largest Number:", secondLargest);




// 5. Merge Two Arrays and Remove Duplicates
const array1 = [1, 2, 3, 4];
const array2 = [3, 4, 5, 6];

const mergedArray = [...new Set([...array1, ...array2])];

console.log("\nMerged Array Without Duplicates:");
console.log(mergedArray);

