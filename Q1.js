function findPairsWithSum(arr, targetSum) {
    const pairs = [];
  
    for (let i = 0; i < arr.length; i++) {
      for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] + arr[j] === targetSum) {
          pairs.push([arr[i], arr[j]]);
        }
      }
    }
  
    return pairs;
  }

  const integerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  const targetSum = 10;
  
  const result = findPairsWithSum(integerArray, targetSum);
  console.log(`Pairs with sum ${targetSum}:`, result);
  