let delay = 100;
let arrayOfCharacters = ['\r|   ', '\r/   ', '\r-   ', '\r\\   ']
let i = 0;

do {
  for (let char of arrayOfCharacters) {
    setTimeout(() => {
      process.stdout.write(char);
    }, delay);
    delay += 200
    i++
  };
}
while (i < 24);