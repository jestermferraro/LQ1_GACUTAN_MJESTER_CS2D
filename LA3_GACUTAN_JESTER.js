let s = parseInt(prompt("Enter your score: "));
let g = (sc >= 97) ? "1.00" : (s >= 94) ? "1.25" : (s >= 91) ? "1.50" : (s >= 88) ? "1.75" : (s >= 85) ? "2.00" : (s >= 82) ? "2.25" : (s >= 79) ? "2.50" : (s >= 76) ? "2.75" : (s >= 75) ? "3.00" : (s >= 72) ? "4.00" : "5.00";
let g2 = (sc >= 97) ? "Average" : (s >= 94) ? "Excellent" : (s >= 91) ? "Above Average" : (s >= 88) ? "Above Average" : (s >= 85) ? "Average" : (s >= 82) ? "Average" : (s >= 79) ? "Below Average" : (s >= 76) ? "Below Average" : (s >= 75) ? "Below Average" : (s >= 72) ? "Poor" : "Poor";

console.log(`Your equivalent Grade is: "${g}" ${g2}`);

let rm = s 
if (rm >= 90) {
    console.log("Final remarks: HIGH PASS, Candidate for Cum Laude");
} else if (s >= 80) {
    console.log("Final remarks: AVERAGE PASS");
} else if (s >= 75) {
    console.log("Final remarks: LOW PASS");
} else {
    console.log("Final remarks: FAILED, Needs Improvement");
}
let ml = parseInt(prompt("Enter the Limit of the Double Loop: "));
let fc = 0;
let sc = 0;
let av = 0;
while (sc < ml) {
  fc = 0;
  while (fc < ml) {
    av = s + fc;
    console.log(`[${s}] [${fc}] Added value is ${av}`);
    fc++;
  }
  s++;
}