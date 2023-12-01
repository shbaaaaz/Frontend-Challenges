/*
Question:
    Implement insertionSort function that takes an array and sorts it in ascending order.

Sample Input:
    insertionSort([2,4,1,12, 8]) // [1, 2, 4, 8, 12]

*/

// Approach 1
const insertionSort = arr => {
    if (arr.length === 0) return arr;
    for (let i = 1; i < arr.length; i++) {
        let currentValue = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > currentValue; j--) {
            arr[j + 1] = arr[j];          
        }
        arr[j + 1] = currentValue;
    }
    return arr;
}


// Approach 2

const swap = (arr, i, j) => [arr[i], arr[j]] = [arr[j], arr[i]];


for (let previous = 0; previous < nums1.length - 1; previous++) {
    let next = previous + 1;
    if (nums1[previous] > nums2[next]) {
        for (let current = previous; current >= 0 && nums1[current] > nums1[next]; current--) {
            swap(nums1, current, next);
            next--;  
        }
    }
}

