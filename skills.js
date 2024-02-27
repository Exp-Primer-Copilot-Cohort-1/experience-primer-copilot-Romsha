function pow(var1, var2) {
  return Math.pow(var1, var2);
}

function sqrt(var1) { 
  return Math.sqrt(var1);
}

function test() {
    const array = Array.from({ length: 100 }, (_, i) => i + 1);
    for (let i = 0; i < array.length; i++) {
        console.log(array[i]);
    }
}
