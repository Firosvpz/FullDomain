function heapify(arr, n, i) {
    let largest = i
    const left = 2 * i + 1
    const right = 2 * i + 2
    if (left < n && arr[left] > arr[largest]) {
        largest = left
    }
    if (right < n && arr[right] > arr[largest]) {
        largest = right
    }
    if (largest !== i) {
        [arr[i], arr[largest]] = [arr[largest] , arr[i]]
        heapify(arr, n, largest)
    }
}

function heapsort(arr) {
    const n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }
    for (let i = n - 1; i > 0; i--) {
        [arr[0],arr[i]] = [arr[i],arr[0]]
        heapify(arr, i, 0)
    }
}

const arr = [12, 34, 54, 12, 31, 23]
heapsort(arr)
console.log(arr);