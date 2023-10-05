// 0, 1, 1, 2, 3, 5
// 0  1  2  3  4  5

function info(text) {
  console.log(`${text} ${performance.now().toFixed(2)}`);
}

info('Program start');

setTimeout(() => info('Timeout'), 0);

function fib(index) {
  if (index === 0 || index === 1) {
    return index;
  }
  let fib1 = 0;
  let fib2 = 1;
  let sum;

  for (let i = 1; i < index; i++) {
    sum = fib1 + fib2;
    fib1 = fib2;
    fib2 = sum;
  }

  return sum;
}

console.log(fib(10));

info('Program end');
