// receive process.argv [] for timer
const timers = process.argv.slice(2);

// for each value in argv[]
for (let timer of timers) {
  timer = Number(timer) * 1000;
  // setTimeout(() => to beep, at each * 1000)
  if (timer > 0) {
    setTimeout(() => {
      // test log: to see what timers going off.
      // console.log('timer: ', timer);
      
      // TIMER BEEP
      process.stdout.write('\x07')
    }, timer);
  }
}


// EDGE CASES

// No numbers are provided: Easy. It should just not beep at all and end immediately since no beeps should get scheduled.

// An input is a negative number: Ignore/skip any numbers that are negative. We can't schedule anything in the past.

// An input is not a number: Ignore/skip these as well, instead of attempting to call setTimeout with a non-number.