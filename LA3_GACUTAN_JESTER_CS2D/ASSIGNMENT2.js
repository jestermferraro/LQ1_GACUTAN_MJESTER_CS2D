let ml = parseInt(prompt("Enter the Limit of the Double Loop: ")); 
let fc = 0;
let sc = 0;
let av = 0;

while (sc < ml) {
  fc = 0;
  while (fc < ml) {
    av = sc + fc;
    console.log(`[${sc}] [${fc}] Added value is ${av}`);
    fc++;
  }
  sc++;
}