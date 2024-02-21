
  function mergeInPlace(arr, left, mid, right) {
    let i = left, j = mid, k = 0;
    const temp = [];
  
    while (i < mid && j < right) {
      if (arr[i] <= arr[j]) {
        temp[k++] = arr[i++];
      } else {
        temp[k++] = arr[j++];
      }
    }
  
    while (i < mid) {
      temp[k++] = arr[i++];
    }
  
    while (j < right) {
      temp[k++] = arr[j++];
    }
  
    for (let i = left; i < right; i++) {
      arr[i] = temp[i - left];
    }
  }

function mergesort(arr) {
    let width = 1;
  
    while (width < arr.length) {
      for (let left = 0; left < arr.length; left += 2 * width) {
        const mid = left + width;
        const right = Math.min(left + 2 * width, arr.length);
  
        mergeInPlace(arr, left, mid, right);
      }
  
      width *= 2;
    }

    return arr;
}
