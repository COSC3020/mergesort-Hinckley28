
function mergeInPlace(arr, left, mid, right) {
  let i = left, j = mid + 1;
  
  while (i <= mid && j <= right) {
      if (arr[i] <= arr[j]) {
          i++;
      } else {
          let index = j;
          const value = arr[j];
          while (index !== i) {
              arr[index] = arr[index - 1];
              index--;
          }
          arr[i] = value;
          i++;
          j++;
          mid++;
      }
  }
}
function mergesort(arr) {
  let width;
  let left;

  for (width = 1; width < arr.length ; width *= 2) {
      for (left = 0; left < arr.length - 1; left += 2 * width) {
          const mid = Math.min(left + width - 1, arr.length - 1);
          const right = Math.min(left + 2 * width - 1, arr.length - 1);
          mergeInPlace(arr, left, mid, right);
      }
  }
  return arr;
}
