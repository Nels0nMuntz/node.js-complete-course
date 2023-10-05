function info() {
  console.log(`[${performance.now().toFixed(2)}]`);
}

function fib(n) {
  if(n === 0 || n === 1) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

setTimeout(() => console.log("Timeout"), 10)

info()
console.log(fib(20));
info()