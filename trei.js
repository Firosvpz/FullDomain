function heapify(arr, n, i) {
    let target = i
    let left = 2 * i + 1
    let right = 2 * i + 2
    if (left < n && arr[left] > arr[target]) {
        target = left
    }
    if (right < n && arr[right] > arr[target]) {
        target = right
    }
    if (target !== i) {
        [arr[i], arr[target]] = [arr[target], arr[i]]
        heapify(arr, n, target)
    }
}

function heapSort(arr) {
    let n = arr.length
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i)
    }   

    for (let i = n - 1; i > 0; i--) {
        [arr[0], arr[i]] = [arr[i], arr[0]]
        heapify(arr, i, 0)
    }

}
const arr = [12, 2, 34, 23, 45, 43]
heapSort(arr)
console.log(arr);
