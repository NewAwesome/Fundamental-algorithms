/*
 * @Description:
 * @Author: jiayufei
 * @Date: 2019-12-25 23:17:07
 * @LastEditors  : jiayufei
 * @LastEditTime : 2019-12-25 23:30:56
 */
function insertSort(arr, n) {
  for (var i = 1; i < n; i++) {
    for (var j = i; j > 0; j--) {
      if (arr[j - 1] > arr[j]) {
        arr[j] = [arr[j - 1], (arr[j - 1] = arr[j])][0];
      } else break;
    }
  }
}
var arr = [17, 9, 23, 1, 5, 99];
insertSort(arr, arr.length);
console.log(arr);
