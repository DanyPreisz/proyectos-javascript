self.onmessage = (event) => {
  const max = event.data;
  let n = 0;
  for (let i = 2; i <= max; i += 1) {
    let ok = true;
    for (let j = 2; j * j <= i; j += 1) {
      if (i % j === 0) {
        ok = false;
        break;
      }
    }
    if (ok) n += 1;
  }
  self.postMessage(n);
};
