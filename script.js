//ДЛЯ РЕШЕНИЯ ИСПОЛЬЗУЕМ ДВА СПОСОБА 1 - ЦИКЛЫ 2 - МЕТОДЫ МАССИВОВ

/**
 * Creates an array of integers from the specified start to end (inclusive).
 *
 * @param {number} start - The first number of an array.
 * @param {number} end - The last number of an array.
 * @return {number[]} - An array of integers.
 *
 * @example
 *    getIntervalArray(1, 5)  => [ 1, 2, 3, 4, 5 ]
 *    getIntervalArray(-2, 2)  => [ -2, -1, 0, 1, 2 ]
 *    getIntervalArray(0, 100) => [ 0, 1, 2, ..., 100 ]
 *    getIntervalArray(3, 3) => [ 3 ]
 */
function getIntervalArray(start, end) {
    let arr = [];
    let current = start;
    while (current <= end) {
        arr[arr.length] = current;
        current++;
    }
    return arr;
}

function getIntervalArray_2(start, end) {
    return Array.from({ length: Math.max(0, end - start + 1) }, (_, i) => start + i);
}


/**
 * Returns a new array where each element is the sum of the corresponding elements
 * from two arrays. Arrays can have different lengths.
 *
 * @param {number[]} arr1 - The first array.
 * @param {number[]} arr2 - The second array.
 * @return {number[]} - An array containing the sum of corresponding elements.
 *
 * @example
 *    sumArrays([1, 2, 3], [4, 5, 6]) => [5, 7, 9]
 *    sumArrays([10, 20, 30], [5, 10, 15]) => [15, 30, 45]
 *    sumArrays([-1, 0, 1], [1, 2, 3, 4]) => [0, 2, 4, 4]
 */
function sumArrays(arr1, arr2) {
    let result = [];
    let maxLength = Math.max(arr1.length, arr2.length);
    for (let i = 0; i < maxLength; i++) {
        let val1 = i < arr1.length ? arr1[i] : 0;
        let val2 = i < arr2.length ? arr2[i] : 0;
        result[result.length] = val1 + val2;
    }
    return result;
}

function sumArrays_2(arr1, arr2) {
    return Array.from({ length: Math.max(arr1.length, arr2.length) }, (_, i) => (arr1[i] ?? 0) + (arr2[i] ?? 0));
}


/**
 * Returns an index of the specified element in array or -1 if element is not found.
 *
 * @param {any[]} arr - The input array.
 * @param {any} value - Element to search.
 * @return {number} - An index of the specified element.
 *
 * @example
 *    findElement(['Ace', 10, true], 10) => 1
 *    findElement(['Array', 'Number', 'string'], 'Date') => -1
 *    findElement([0, 1, 2, 3, 4, 5], 5) => 5
 */
function findElement(arr, value) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === value) return i;
        i++;
    }
    return -1;
}

function findElement_2(arr, value) {
    let foundIndex = -1;
    arr.forEach((item, index) => {
        if (item === value && foundIndex === -1) {
            foundIndex = index;
        }
    });
    return foundIndex;
}


/**
 * Returns a number of all occurrences of the specified item in an array.
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - Element to search.
 * @return {number} - Number of found items.
 *
 * @example
 *    findAllOccurrences([ 0, 0, 1, 1, 1, 2 ], 1) => 3
 *    findAllOccurrences([ 1, 2, 3, 4, 5 ], 0) => 0
 *    findAllOccurrences([ 'a','b','c','c' ], 'c') => 2
 *    findAllOccurrences([ null, undefined, null ], null) => 2
 *    findAllOccurrences([ true, 0, 1, 'true' ], true) => 1
 */
function findAllOccurrences(arr, item) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === item) count++;
        i++;
    }
    return count;
}

function findAllOccurrences_2(arr, item) {
    return arr.reduce((acc, curr) => curr === item ? acc + 1 : acc, 0);
}


/**
 * Removes falsy values from the specified array.
 * Falsy values: false, null, 0, "", undefined, and NaN.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array without falsy values.
 *
 * @example
 *    removeFalsyValues([ 0, false, 'cat', NaN, true, '' ]) => [ 'cat', true ]
 *    removeFalsyValues([ 1, 2, 3, 4, 5, 'false' ]) => [ 1, 2, 3, 4, 5, 'false' ]
 *    removeFalsyValues([ false, 0, NaN, '', undefined ]) => [ ]
 */
function removeFalsyValues(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (arr[i]) {
            result[result.length] = arr[i];
        }
        i++;
    }
    return result;
}

function removeFalsyValues_2(arr) {
    return arr.reduce((acc, curr) => {
        if (curr) acc.push(curr);
        return acc;
    }, []);
}


/**
 * Returns an array containing the lengths of each string in a specified array of strings.
 *
 * @param {string[]} arr - The input array.
 * @return {number[]} - The array of string lengths.
 *
 * @example
 *    getStringsLength([ '', 'a', 'bc', 'def', 'ghij' ]) => [ 0, 1, 2, 3, 4 ]
 *    getStringsLength([ 'angular', 'react', 'ember' ]) => [ 7, 5, 5 ]
 */
function getStringsLength(arr) {
    let lengths = [];
    let i = 0;
    while (i < arr.length) {
        lengths[lengths.length] = arr[i].length;
        i++;
    }
    return lengths;
}

function getStringsLength_2(arr) {
    return arr.reduce((acc, str) => {
        acc.push(str.length);
        return acc;
    }, []);
}


/**
 * Returns the average of all items in the specified array of numbers.
 * The result should be rounded to two decimal places.
 *
 * @param {number[]} arr - The input array
 * @return {number} - The average of all items
 *
 * @example
 *   getAverage([]) => 0
 *   getAverage([ 1, 2, 3 ]) => 2
 *   getAverage([ -1, 1, -1, 1 ]) => 0
 *   getAverage([ 1, 10, 100, 1000 ])  => 277,75
 *   getAverage([ 2, 3, 3 ])  => 2,67
 */
function getAverage(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    let i = 0;
    while (i < arr.length) {
        sum += arr[i];
        i++;
    }
    return +(sum / arr.length).toFixed(2);
}

function getAverage_2(arr) {
    if (arr.length === 0) return 0;
    let sum = 0;
    arr.forEach(num => sum += num);
    return +(sum / arr.length).toFixed(2);
}


/**
 * Checks if all strings in an array have the same length.
 *
 * @param {string[]} arr - The array of strings to be checked.
 * @return {boolean} - True if all strings have the same length, false otherwise.
 *
 * @example
 *    isSameLength(['orange', 'banana', 'cherry']) => true
 *    isSameLength(['cat', 'dog', 'elephant']) => false
 */
function isSameLength(arr) {
    if (arr.length <= 1) return true;
    let firstLen = arr[0].length;
    let i = 1;
    while (i < arr.length) {
        if (arr[i].length !== firstLen) return false;
        i++;
    }
    return true;
}

function isSameLength_2(arr) {
    if (arr.length === 0) return true;
    return arr.reduce((acc, curr) => acc && curr.length === arr[0].length, true);
}


/**
 * Checks if there are elements in the array where the value is equal to its index.
 *
 * @param {number[]} arr - The array of elements to be checked.
 * @return {boolean} - True if there are elements with value equal to their index, false otherwise.
 *
 * @example
 *    isValueEqualsIndex([0, 1, 2, 3, 4]) => true
 *    isValueEqualsIndex([2, 1, 0, 4, 5]) => true
 *    isValueEqualsIndex([10, 20, 30, 40, 50]) => false
 */
function isValueEqualsIndex(arr) {
    let i = 0;
    while (i < arr.length) {
        if (arr[i] === i) return true;
        i++;
    }
    return false;
}

function isValueEqualsIndex_2(arr) {
    return arr.reduce((found, value, index) => found || value === index, false);
}


/**
 * Inserts the item into specified array at specified index
 *
 * @param {any[]} arr - The input array.
 * @param {any} item - The item to insert.
 * @param {number} index - Specified index.
 * @return {any[]}
 *
 * @example
 *    insertItem([ 1, 3, 4, 5 ], 2, 1)  => [ 1, 2, 3, 4, 5 ]
 *    insertItem([ 1, 'b', 'c'], 'x', 0) => [ 'x', 1, 'b', 'c' ]
 */
function insertItem(arr, item, index) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (i === index) result[result.length] = item;
        result[result.length] = arr[i];
        i++;
    }
    if (index >= arr.length) result[result.length] = item;
    return result;
}

function insertItem_2(arr, item, index) {
    if (index >= arr.length) return [...arr, item];
    return [...arr.slice(0, index), item, ...arr.slice(index)];
}


/**
 * Returns the n first items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getHead([ 1, 3, 4, 5 ], 2) => [ 1, 3 ]
 *    getHead([ 'a', 'b', 'c', 'd'], 3) => [ 'a', 'b', 'c' ]
 *    getHead([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getHead(arr, n) {
    let result = [];
    let i = 0;
    while (i < n && i < arr.length) {
        result[result.length] = arr[i];
        i++;
    }
    return result;
}

function getHead_2(arr, n) {
    return arr.filter((_, index) => index < n);
}


/**
 * Returns the n last items of the specified array.
 *
 * @param {any[]} arr - The input array.
 * @param {number} n - Number of items.
 * @return {any[]}
 *
 * @example
 *    getTail([ 1, 3, 4, 5 ], 2) => [ 4, 5 ]
 *    getTail([ 'a', 'b', 'c', 'd'], 3) => [ 'b', 'c', 'd' ]
 *    getTail([ 'a', 'b', 'c', 'd'], 0) => []
 */
function getTail(arr, n) {
    let result = [];
    let start = arr.length - n;
    if (start < 0) start = 0;
    let i = start;
    while (i < arr.length) {
        result[result.length] = arr[i];
        i++;
    }
    return result;
}

function getTail_2(arr, n) {
    return n === 0 ? [] : arr.filter((_, index) => index >= arr.length - n);
}


/**
 * Returns the doubled array - elements of the specified array
 * are repeated twice using original order.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The doubled array.
 *
 * @example
 *    doubleArray(['Ace', 10, true])  => ['Ace', 10, true, 'Ace', 10, true]
 *    doubleArray([0, 1, 2, 3, 4, 5]) => [0, 1, 2, 3, 4, 5, 0, 1, 2, 3, 4, 5]
 *    doubleArray([]) => []
 */
function doubleArray(arr) {
    if (arr.length === 0) return [];
    let result = [];
    let i = 0;
    while (i < arr.length * 2) {
        result[result.length] = arr[i % arr.length];
        i++;
    }
    return result;
}

function doubleArray_2(arr) {
    return arr.reduce((acc, curr) => {
        acc.push(curr);
        return acc;
    }, []).concat(arr);
}


/**
 * Concatenates all elements from specified array into single string with ',' delimiter.
 *
 * @param {any[]} arr - The input array.
 * @return {string} - The concatenated string.
 *
 * @example
 *    toStringList([0, false, 'cat', NaN, true, '']) => '0,false,cat,NaN,true,'
 *    toStringList([1, 2, 3, 4, 5]) => '1,2,3,4,5'
 *    toStringList(['rock', 'paper', 'scissors']) => 'rock,paper,scissors'
 */
function toStringList(arr) {
    if (arr.length === 0) return '';
    let str = '';
    let i = 0;
    while (i < arr.length) {
        str += arr[i];
        if (i < arr.length - 1) str += ',';
        i++;
    }
    return str;
}

function toStringList_2(arr) {
    return arr.reduce((acc, curr, idx) => acc + curr + (idx < arr.length - 1 ? ',' : ''), '');
}


/**
 * Returns array containing only unique values from the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The array with unique values.
 *
 * @example
 *   distinct([ 1, 2, 3, 3, 2, 1 ]) => [ 1, 2, 3 ]
 *   distinct([ 'a', 'a', 'a', 'a' ])  => [ 'a' ]
 *   distinct([ 1, 1, 2, 2, 3, 3, 4, 4]) => [ 1, 2, 3, 4]
 *   distinct([]) => []
 */
function distinct(arr) {
    let result = [];
    let i = 0;
    while (i < arr.length) {
        if (result.indexOf(arr[i]) === -1) {
            result[result.length] = arr[i];
        }
        i++;
    }
    return result;
}

function distinct_2(arr) {
    return arr.reduce((acc, curr) => {
        if (!acc.includes(curr)) acc.push(curr);
        return acc;
    }, []);
}


/**
 * Creates an n-dimensional array and fills it with zeros.
 *
 * @param {number} n - Depth of outter array (n > 0).
 * @param {number} size - Length of all arrays (size > 0).
 * @return {any[]} - The n-dimensional array filled with zeros.
 *
 * @example
 *    createNDimensionalArray(2, 3) => [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
 *    createNDimensionalArray(3, 2) => [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]
 *    createNDimensionalArray(4, 2) => [[[[0, 0], [0, 0]], [[0, 0], [0, 0]]], [[[0, 0], [0, 0]], [[0, 0], [0, 0]]]]
 *    createNDimensionalArray(1, 1) => [0]
 */
function createNDimensionalArray(n, size) {
    if (n === 0) return 0;
    if (n === 1) {
        let arr = [];
        let i = 0;
        while (i < size) {
            arr[arr.length] = 0;
            i++;
        }
        return arr;
    }
    let res = [];
    let i = 0;
    while (i < size) {
        res[res.length] = createNDimensionalArray(n - 1, size);
        i++;
    }
    return res;
}

function createNDimensionalArray_2(n, size) {
    if (n === 0) return 0;
    return [...Array(size)].map(() => createNDimensionalArray(n - 1, size));
}


/**
 * Flattens a nested array into a single-level array.
 *
 * @param {any[]} nestedArray - The nested array to be flattened.
 * @return {any[]} - A single-level array.
 *
 * @example
 *    flattenArray([1, [2, [3, 4], 5], 6]) => [1, 2, 3, 4, 5, 6]
 *    flattenArray(['a', ['b', ['c', 'd'], 'e'], 'f']) => ['a', 'b', 'c', 'd', 'e', 'f']
 *    flattenArray([1, 2, 3, 4]) => [1, 2, 3, 4]
 */
function flattenArray(nestedArray) {
    let flatArray = [];
    let i = 0;
    while (i < nestedArray.length) {
        if (Array.isArray(nestedArray[i])) {
            let subFlat = flattenArray(nestedArray[i]);
            let j = 0;
            while (j < subFlat.length) {
                flatArray[flatArray.length] = subFlat[j];
                j++;
            }
        } else {
            flatArray[flatArray.length] = nestedArray[i];
        }
        i++;
    }
    return flatArray;
}

function flattenArray_2(nestedArray) {
    return nestedArray.reduce((acc, val) => acc.concat(Array.isArray(val) ? flattenArray_2(val) : val), []);
}


/**
 * Projects each element of the specified array to a sequence
 * and flattens the resulting sequences into one array.
 *
 * @param {any[]} arr - The input array
 * @param {Function} childrenSelector - A transform function to apply to each element
 *                                     that returns an array of children
 * @return {any[]} - The flatted array
 *
 * @example
 *   selectMany([[1, 2], [3, 4], [5, 6]], (x) => x) =>   [ 1, 2, 3, 4, 5, 6 ]
 *   selectMany(['one','two','three'], (x) => x.split('')) =>   ['o','n','e','t','w','o','t','h','r','e','e']
 */
function selectMany(arr, childrenSelector) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        let children = childrenSelector(arr[i]);
        let j = 0;
        while (j < children.length) {
            res[res.length] = children[j];
            j++;
        }
        i++;
    }
    return res;
}

function selectMany_2(arr, childrenSelector) {
    return arr.reduce((acc, val) => acc.concat(childrenSelector(val)), []);
}


/**
 * Every month, you record your income and expenses.
 * Expenses may be greater than income.
 * You need to calculate the final balance.
 *
 * @param {number[][]} arr - The input array [[income, expence], ...]
 * @return {number} - The final balance.
 *
 * @example
 *   calculateBalance([ [ 10, 8 ], [ 5, 1 ] ]) => (10 - 8) + (5 - 1) = 2 + 4 = 6
 *   calculateBalance([ [ 10, 8 ], [ 1, 5 ] ])  => (10 - 8) + (1 - 5) = 2 + -4 = -2
 *   calculateBalance([]) => 0
 */
function calculateBalance(arr) {
    if (arr.length === 0) return 0;
    let balance = 0;
    let i = 0;
    while (i < arr.length) {
        balance += arr[i][0] - arr[i][1];
        i++;
    }
    return balance;
}

function calculateBalance_2(arr) {
    return arr.reduce((bal, record) => bal + record[0] - record[1], 0);
}


/**
 * Breaks an array into chunks of the specified size.
 *
 * @param {any[]} arr - The array to be broken into chunks.
 * @param {number} chunkSize - The size of each chunk.
 * @return {any[]} - An array of chunks.
 *
 * @example
 *    createChunks([1, 2, 3, 4, 5, 6, 7], 3) => [[1, 2, 3], [4, 5, 6], [7]]
 *    createChunks(['a', 'b', 'c', 'd', 'e'], 2) => [['a', 'b'], ['c', 'd'], ['e']]
 *    createChunks([10, 20, 30, 40, 50], 1) => [[10], [20], [30], [40], [50]]
 */
function createChunks(arr, chunkSize) {
    let chunks = [];
    let i = 0;
    while (i < arr.length) {
        let chunk = [];
        let j = 0;
        while (j < chunkSize && i + j < arr.length) {
            chunk[chunk.length] = arr[i + j];
            j++;
        }
        chunks[chunks.length] = chunk;
        i += chunkSize;
    }
    return chunks;
}

function createChunks_2(arr, chunkSize) {
    return arr.reduce((acc, curr, index) => {
        if (index % chunkSize === 0) acc.push([]);
        acc[acc.length - 1].push(curr);
        return acc;
    }, []);
}


/**
 * Generates an array of odd numbers of the specified length.
 *
 * @param {number} len - The length of an array.
 * @return {number[]} - An array of odd numbers.
 *
 * @example
 *    generateOdds(0) => []
 *    generateOdds(1) => [ 1 ]
 *    generateOdds(2) => [ 1, 3 ]
 *    generateOdds(5) => [ 1, 3, 5, 7, 9 ]
 */
function generateOdds(len) {
    let result = [];
    let i = 0;
    while (i < len) {
        result[result.length] = i * 2 + 1;
        i++;
    }
    return result;
}

function generateOdds_2(len) {
    return [...Array(len)].map((_, i) => i * 2 + 1);
}


/**
 * Returns an element from the multidimensional array by the specified indices.
 *
 * @param {any[]} arr - The input multidimensional array
 * @param {number[]} indices - The array of indices
 * @return {any} - An element from the array
 *
 * @example
 *   getElementByIndices([[1, 2], [3, 4], [5, 6]], [0,0]) => 1        (arr[0][0])
 *   getElementByIndices(['one','two','three'], [2]) => 'three'  (arr[2])
 *   getElementByIndices([[[ 1, 2, 3]]], [ 0, 0, 1 ]) => 2        (arr[0][0][1])
 */
function getElementByIndices(arr, indices) {
    let current = arr;
    let i = 0;
    while (i < indices.length) {
        current = current[indices[i]];
        i++;
    }
    return current;
}

function getElementByIndices_2(arr, indices) {
    return indices.reduce((level, idx) => level[idx], arr);
}


/**
 * Returns the number of all falsy values in the specified array.
 *
 * @param {any[]} arr - The input array.
 * @return {number} - The number of all falsy values.
 *
 * @example
 *  getFalsyValuesCount([]) => 0
 *  getFalsyValuesCount([ 1, '', 3 ]) => 1
 *  getFalsyValuesCount([ -1, 'false', null, 0 ]) => 2
 *  getFalsyValuesCount([ null, undefined, NaN, false, 0, '' ]) => 6
 */
function getFalsyValuesCount(arr) {
    let count = 0;
    let i = 0;
    while (i < arr.length) {
        if (!arr[i]) count++;
        i++;
    }
    return count;
}

function getFalsyValuesCount_2(arr) {
    return arr.reduce((count, item) => !item ? count + 1 : count, 0);
}


/**
 * Creates an identity matrix of the specified size.
 *
 * @param {number} n - A size of the matrix.
 * @return {number[][]} - An identity matrix.
 *
 * @example
 *     getIdentityMatrix(1)  => [[1]]
 *
 *     getIdentityMatrix(2) => [[1,0],
 *                             [0,1]]
 *
 *                              [[1,0,0,0,0],
 *                              [0,1,0,0,0],
 *     getIdentityMatrix(5) =>  [0,0,1,0,0],
 *                              [0,0,0,1,0],
 *                              [0,0,0,0,1]]
 */
function getIdentityMatrix(n) {
    let matrix = [];
    let row = 0;
    while (row < n) {
        let currentRow = [];
        let col = 0;
        while (col < n) {
            currentRow[currentRow.length] = row === col ? 1 : 0;
            col++;
        }
        matrix[matrix.length] = currentRow;
        row++;
    }
    return matrix;
}

function getIdentityMatrix_2(n) {
    return [...Array(n)].map((_, row) => [...Array(n)].map((_, col) => row === col ? 1 : 0));
}


/**
 * Returns an array containing indices of odd elements in the input array.
 *
 * @param {number[]} numbers - The array of numbers.
 * @return {number[]} - An array containing indices of odd elements.
 *
 * @example
 *    getIndicesOfOddNumbers([1, 2, 3, 4, 5]) => [0, 2, 4]
 *    getIndicesOfOddNumbers([2, 4, 6, 8, 10]) => []
 *    getIndicesOfOddNumbers([11, 22, 33, 44, 55]) => [0, 2, 4]
 */
function getIndicesOfOddNumbers(numbers) {
    let indices = [];
    let i = 0;
    while (i < numbers.length) {
        if (numbers[i] % 2 !== 0) {
            indices[indices.length] = i;
        }
        i++;
    }
    return indices;
}

function getIndicesOfOddNumbers_2(numbers) {
    return numbers.reduce((acc, val, idx) => {
        if (Math.abs(val) % 2 === 1) acc.push(idx);
        return acc;
    }, []);
}


/*
 * Returns the array of RGB Hex strings from the specified array of numbers.
 *
 * @param {number[]} arr - The input array.
 * @return {string[]} - The array of RGB Hex strings.
 *
 * @example
 *    getHexRGBValues([ 0, 255, 16777215]) => [ '#000000', '#0000FF', '#FFFFFF' ]
 *    getHexRGBValues([]) => []
 */
function getHexRGBValues(arr) {
    let hexArr = [];
    let i = 0;
    while (i < arr.length) {
        let hex = arr[i].toString(16).toUpperCase();
        while (hex.length < 6) {
            hex = '0' + hex;
        }
        hexArr[hexArr.length] = '#' + hex;
        i++;
    }
    return hexArr;
}

function getHexRGBValues_2(arr) {
    return arr.map(num => '#' + num.toString(16).toUpperCase().padStart(6, '0'));
}


/**
 * Returns the n largest values from the specified array
 *
 * @param {number[]} arr - The input array
 * @param {number} n - Number of maximum values.
 * @return {number[]} - n largest values.
 *
 * @example
 *   getMaxItems([], 5) => []
 *   getMaxItems([ 1, 2 ], 1) => [ 2]
 *   getMaxItems([ 2, 3, 1 ], 2) => [ 3, 2]
 *   getMaxItems([ 10, 2, 7, 5, 3, -5 ], 3) => [ 10, 7, 5 ]
 *   getMaxItems([ 10, 10, 10, 10 ], 3) => [ 10, 10, 10 ]
 */
function getMaxItems(arr, n) {
    if (arr.length === 0) return [];
    let result = [];
    let workingArr = arr.slice();
    let count = 0;
    while (count < n && workingArr.length > 0) {
        let maxIdx = 0;
        let j = 1;
        while (j < workingArr.length) {
            if (workingArr[j] > workingArr[maxIdx]) maxIdx = j;
            j++;
        }
        result[result.length] = workingArr.splice(maxIdx, 1)[0];
        count++;
    }
    return result;
}

function getMaxItems_2(arr, n) {
    return arr.slice().sort((a, b) => b - a).slice(0, n);
}


/**
 * Finds and returns an array containing only the common elements found in two arrays.
 *
 * @param {any[]} arr1 - The first array.
 * @param {any[]} arr2 - The second array.
 * @return {any[]} - An array containing common elements.
 *
 * @example
 *    findCommonElements([1, 2, 3], [2, 3, 4]) => [ 2, 3 ]
 *    findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd']) => [ 'b', 'c' ]
 *    findCommonElements([1, 2, 3], ['a', 'b', 'c']) => []
 */
function findCommonElements(arr1, arr2) {
    let common = [];
    let i = 0;
    while (i < arr1.length) {
        let found = false;
        let j = 0;
        while (j < arr2.length) {
            if (arr1[i] === arr2[j]) {
                found = true;
                break;
            }
            j++;
        }
        if (found && !common.includes(arr1[i])) {
            common[common.length] = arr1[i];
        }
        i++;
    }
    return common;
}

function findCommonElements_2(arr1, arr2) {
    return arr1.filter((item, idx) => arr2.includes(item) && arr1.indexOf(item) === idx);
}


/**
 * Finds the length of the longest increasing and uninterrupted subsequence of a given array of integers.
 *
 * @param {number[]} nums - The array of integers.
 * @return {number} - The length of the longest increasing subsequence.
 *
 * @example
 *    findLongestIncreasingSubsequence([10, 22, 9, 33, 21, 50, 41, 60, 80]) => longest is [41, 60, 80] => 3
 *    findLongestIncreasingSubsequence([3, 10, 2, 1, 20]) => longest is [3, 10] and [1, 20] => 2
 *    findLongestIncreasingSubsequence([50, 3, 10, 7, 40, 80]) => longest is [7, 40, 80] => 3
 */
function findLongestIncreasingSubsequence(nums) {
    if (nums.length === 0) return 0;
    let maxLen = 1, curLen = 1, i = 1;
    while (i < nums.length) {
        if (nums[i] > nums[i - 1]) {
            curLen++;
        } else {
            curLen = 1;
        }
        if (curLen > maxLen) maxLen = curLen;
        i++;
    }
    return maxLen;
}


/**
 * Propagates every item in sequence its position times
 * Returns an array that consists of: one first item, two second items, three third items etc.
 *
 * @param {any[]} arr - The input array
 * @return {any[]}
 *
 * @example :
 *  propagateItemsByPositionIndex([]) => []
 *  propagateItemsByPositionIndex([ 1 ]) => [ 1 ]
 *  propagateItemsByPositionIndex([ 'a', 'b' ]) => [ 'a', 'b','b' ]
 *  propagateItemsByPositionIndex([ 'a', 'b', 'c', null ]) => [ 'a', 'b', 'b', 'c', 'c', 'c',  null, null, null, null ]
 *  propagateItemsByPositionIndex([ 1,2,3,4,5 ]) => [ 1, 2, 2, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 5 ]
 */
function propagateItemsByPositionIndex(arr) {
    let res = [];
    let i = 0;
    while (i < arr.length) {
        let j = 0;
        while (j <= i) {
            res[res.length] = arr[i];
            j++;
        }
        i++;
    }
    return res;
}

function propagateItemsByPositionIndex_2(arr) {
    return arr.reduce((acc, item, i) => acc.concat(Array(i + 1).fill(item)), []);
}


/**
 * Shifts an array by n positions. If n is negative, the array is shifted to the left;
 * if positive, it is shifted to the right.
 *
 * @param {any[]} arr - The array to be shifted.
 * @param {number} n - The number of positions to shift the array elements
 * @return {any[]} - The shifted array.
 *
 * @example
 *    shiftArray([1, 2, 3, 4, 5], 2) => [4, 5, 1, 2, 3]
 *    shiftArray(['a', 'b', 'c', 'd'], -1) => ['b', 'c', 'd', 'a']
 *    shiftArray([10, 20, 30, 40, 50], -3) => [40, 50, 10, 20, 30]
 */
function shiftArray(arr, n) {
    let res = arr.slice();
    let len = res.length;
    let shift = ((n % len) + len) % len;
    if (shift === 0) return res;
    
    let i = 0;
    while (i < shift) {
        let last = res.pop();
        res.unshift(last);
        i++;
    }
    return res;
}

function shiftArray_2(arr, n) {
    let len = arr.length;
    let shift = ((n % len) + len) % len;
    return arr.reduce((acc, _, i) => {
        acc.push(arr[(i - shift + len) % len]);
        return acc;
    }, []);
}


/**
 * Sorts digit names.
 *
 * @param {string[]} arr - The input array.
 * @return {string[]} - Sorted array.
 *
 * @example
 *   sortDigitNamesByNumericOrder([]) => []
 *   sortDigitNamesByNumericOrder([ 'nine','one' ]) => [ 'one', 'nine' ]
 *   sortDigitNamesByNumericOrder([ 'one','two','three' ]) => [ 'one','two', 'three' ]
 *   sortDigitNamesByNumericOrder([ 'nine','eight','nine','eight' ]) => [ 'eight','eight','nine','nine']
 *   sortDigitNamesByNumericOrder([ 'one','one','one','zero' ]) => [ 'zero','one','one','one' ]
 */
function sortDigitNamesByNumericOrder(arr) {
    let map = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
    let copy = arr.slice();
    let i = 0;
    while (i < copy.length) {
        let j = 0;
        while (j < copy.length - 1 - i) {
            if (map[copy[j]] > map[copy[j + 1]]) {
                let t = copy[j];
                copy[j] = copy[j + 1];
                copy[j + 1] = t;
            }
            j++;
        }
        i++;
    }
    return copy;
}

function sortDigitNamesByNumericOrder_2(arr) {
    let map = { 'zero': 0, 'one': 1, 'two': 2, 'three': 3, 'four': 4, 'five': 5, 'six': 6, 'seven': 7, 'eight': 8, 'nine': 9 };
    return arr.slice().sort((a, b) => map[a] - map[b]);
}


/**
 * Swaps the head and tail of the specified array:
 * the head (first half) of array move to the end, the tail (last half) move to the start.
 * The middle element (if exists) leave on the same position. *
 *
 * @param {any[]} arr - The input array.
 * @return {any[]} - The swapped array.
 *
 * @example
 *   [ 1, 2, 3, 4, 5 ]   =>  [ 4, 5, 3, 1, 2 ]
 *    \----/   \----/
 *     head     tail
 *
 *   swapHeadAndTail([ 1, 2 ]) => [ 2, 1 ]
 *   swapHeadAndTail([ 1, 2, 3, 4, 5, 6, 7, 8 ]) =>  [ 5, 6, 7, 8, 1, 2, 3, 4 ]
 *   swapHeadAndTail([ 1 ]) => [ 1 ]
 *   swapHeadAndTail([]) => []
 *
 */
function swapHeadAndTail(arr) {
    let len = arr.length;
    if (len < 2) return arr.slice();
    let half = Math.floor(len / 2);
    let res = [];
    let i = half;
    while (i < len) {
        res[res.length] = arr[i];
        i++;
    }
    if (len % 2 !== 0) {
        res[res.length] = arr[half];
    }
    i = 0;
    while (i < half) {
        res[res.length] = arr[i];
        i++;
    }
    return res;
}

function swapHeadAndTail_2(arr) {
    if (arr.length < 2) return arr.slice();
    let half = Math.floor(arr.length / 2);
    return arr.slice(arr.length - half)
        .concat(arr.length % 2 !== 0 ? [arr[half]] : [])
        .concat(arr.slice(0, half));
}