//Similar to reduce, but acts upon the array from right-to-left instead.

[0, -1, -2, 5, -6].reduceRight(function(previousValue, currentValue, index, array) {
    return previousValue+currentValue;
  }); //-4