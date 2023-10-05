// 0, 1, 1, 2, 3, 5
// 0  1  2  3  4  5

setTimeout(() => console.log("Timeout"), 0);

const cache = new Map()

function fib(index) {
  return new Promise(resolve => {
    if (index === 0 || index === 1) {
      return resolve(index);
    }
    if (cache.has(index)) {
      resolve(cache.get(index));
    }
    setImmediate(() =>
      fib(index - 1)
        .then(fib1 => fib(index - 2)
          .then(fib2 => {
            const number = fib1 + fib2;
            cache.set(index, number)
            resolve(number);
          }))
    )
  })
}

fib(100).then(res => console.log(res))