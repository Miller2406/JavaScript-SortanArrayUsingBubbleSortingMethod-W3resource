// Write a bubble sort algorithm in JavaScript.
//     Note: Bubble sort is a simple sorting algorithm that works by repeatedly stepping through the list to be sorted,
//         Sample Data: [6, 4, 0, 3, -2, 1]
// Expected Output: [-2, 0, 1, 3, 4, 6]


function bubbleSort(arrInput) { // ตั้ง
    let swapped
    do {
        swapped = false
        for (let i = 0; i < arrInput.length - 1; i++) {
            if (arrInput[i] > arrInput[i + 1]) {
                let temp = arrInput[i]
                arrInput[i] = arrInput[i + 1]
                arrInput[i + 1] = temp
                swapped = true
            }
        }
    } while (swapped);
}


const arrInput = [6, 4, 0, 3, -2, 1]
bubbleSort(arrInput)
console.log(arrInput)