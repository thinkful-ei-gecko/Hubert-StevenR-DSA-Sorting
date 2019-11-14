const LinkedList = require('./linkedList')
/*
Drill #1 - Understanding merge sort
---------------------------------------------------------------------
[21, 1, 26, 45, 29, 28, 2, 9, 16, 49, 39, 27, 43, 34, 46, 40]
-What is the resulting list will be sorted after 3 recursive calls to mergesort?

Midpoint = 16
1. left = [21, 1, 26, 45, 29, 28, 2, 9], right = [16, 49, 39, 27, 43, 34, 46, 40]
2. left = [21, 1, 26, 45] [29, 28, 2, 9]
3. left = [21, 1] [26, 45]
4. left = [21] [1] array = [1, 21]
5. array = [1, 21, 26, 45];
6. left = [29, 28] [2, 9]
7. array = [2, 9]
8. array = [2, 9, 28, 29];
9. array = [1, 2, 9, 21, 26, 28, 29, 45];
10. right = [16, 49]
11. array = [16, 27, 39, 49]
12. right = [34, 43]
13. right = [40, 46]
14. array = [34, 40, 43, 46]
15. right = [16, 27, 34, 39, 40, 43, 46, 49]
16. array = [1, 2, 9, 16, 21, 26, 27, 28, 29, 34, 39, 40, 43, 45, 46, 49]

-What are the first 2 lists to be merged?
The two left arrays that were divided in half were being merged.

-Which two lists would be merged on the 7th merge?
The last two arrays of the left arrays will be merged

Drill #2 - Understanding quicksort
------------------------------------------------------------------------
1. [3, 9, 1, 14, 17, 24, 22, 20];

[9, 1, 3, 20, 17, 24, 22, 14]
[9, 1, 14, 20, 3, 24, 22, 17]

Neither 14 nor 17 could have been the pivot because the 2nd element in the array is both
less than 14 and 17, so they should have been swapped instead.

2. [14, 17, 13, 15, 19, 10, 3, 16, 9, 12]

- pivot = 12
1st partition - [10, 17, 13, 15, 19, 14, 3, 16, 9, 12]
2nd partition - [10, 3, 13, 15, 19, 14, 17, 16, 9, 12]

pivot = 14
1st partition - [14, 17, 13, 15, 19, 10, 3, 12, 9, 16]
2nd partition - [14, 17, 13, 15, 16, 10, 3, 12, 9, 19]
*/

// Drill #3 - Implementing quicksort
function swap(array, i, j) {
  // array = [1,2,3,4]
  const tmp = array[i];
  array[i] = array[j];
  array[j] = tmp;
};

function quickSort(array, start = 0, end = array.length) {
  if (start >= end) {
    return array;
  }
  const middle = partition(array, start, end);
  array = quickSort(array, start, middle);
  array = quickSort(array, middle + 1, end);
  return array;
}

function partition(array, start, end) {
  const pivot = array[end - 1];
  let j = start;
  for (let i = start; i < end - 1; i++) {
    if (array[i] <= pivot) {
      swap(array, i, j);
      j++;
    }
  }
  swap(array, end-1, j);
  return j;
};

let dataset = 
[89, 30, 25, 32, 72, 70, 51, 42, 25, 24, 53, 55, 78, 
  50, 13, 40, 48, 32, 26, 2, 14, 33, 45, 72, 56, 44, 21, 
  88, 27, 68, 15, 62, 93, 98, 73, 28, 16, 46, 87, 28, 65, 
  38, 67, 16, 85, 63, 23, 69, 64, 91, 9, 70, 81, 27, 97, 
  82, 6, 88, 3, 7, 46, 13, 11, 64, 76, 31, 26, 38, 28, 13, 
  17, 69, 90, 1, 6, 7, 64, 43, 9, 73, 80, 98, 46, 27, 22, 
  87, 49, 83, 6, 39, 42, 51, 54, 84, 34, 53, 78, 40, 14, 5];

//console.log(quickSort(dataset));

// Drill #4 - Implementing merge sort
function mergeSort(array) {
  if (array.length <= 1) {
    return array;
  }

  const middle = Math.floor(array.length / 2);
  let left = array.slice(0, middle);
  let right = array.slice(middle, array.length);

  left = mergeSort(left);
  right = mergeSort(right);
  return merge(left, right, array);
};

function merge(left, right, array) {
  let leftIndex = 0;
  let rightIndex = 0;
  let outputIndex = 0;
  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      array[outputIndex++] = left[leftIndex++];
    }
    else {
      array[outputIndex++] = right[rightIndex++];
    }
  }

  for (let i = leftIndex; i < left.length; i++) {
    array[outputIndex++] = left[i];
  }

  for (let i = rightIndex; i < right.length; i++) {
    array[outputIndex++] = right[i];
  }
  return array;
};

//console.log(mergeSort(dataset))

// Drill #5 - Sorting a linked list using merge sort

function merged() {
  let list = new LinkedList();

}