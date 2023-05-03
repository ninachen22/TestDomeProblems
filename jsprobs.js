// Malware Analysis
// X is compared to T
// T, _, _, X, _, _, _, T
// If X is smaller or equal to either T's, 
// X is replaced with 0
function simulate(entries) {
    // Write your code here
    for (let index = 0; index < entries.length; index++) {
        var x = entries[index];
        var t1 = entries[index - 3];
        var t2 = entries[index + 4];
        if ((index - 3) >= 0 && (index + 4) < entries.length) {
            if (x <= t1 || x <= t2) {
                entries[index] = 0;
            }
        } if ((index - 3) < 0 && (index + 4) < entries.length) {
            if (x <= t2) {
                entries[index] = 0;
            }
        } if ((index - 3) >= 0 && (index + 4) >= entries.length) {
            if (x <= t1) {
                entries[index] = 0;
            }
        }
    }
    return entries;
  }
  
  const records = [19, 2, 0, 87, 1, 40, 80, 77, 77, 77, 77];
  console.log(simulate(records));
  // Expected output
  // [19, 0, 0, 87, 0, 0, 0, 77, 77, 0, 0]