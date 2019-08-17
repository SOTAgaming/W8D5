const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {
  
  if (numsLeft > 0 ) {
    reader.question("Enter a number:", answer => {
      let ans = parseInt(answer);
      sum += ans;
      numsLeft -= 1;
      if (numsLeft === 0) {

        completionCallback(sum);
        reader.close();
      }

      addNumbers(sum, numsLeft, completionCallback);

    });
  }
}

function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`is ${el1} > ${el2} greater?`, answer => {
    let ans;
    if (answer === "true") {
      ans = true;
    } else if (answer === "false") {
      ans = false;
    }

    let res = (el1 > el2);
    let output = (ans === res);
    callback(output);
    reader.close();
  });
}

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
    if(i === arr.length - 1) {
      outerBubbleSortLoop(madeAnySwaps)
    }
  if (askIfGreaterThan(arr[i], arr[i + 1], output => return output;)) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    madeAnySwaps = true;
  }

  innerBubbleSortLoop(arr, i + 1, )


    askIfGreaterThan(arr[i], arr[i + 1])
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
}

// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    if (madeAnySwaps === true) {
      i = 0;
      outerBubbleSortLoop(false);
      
    } else {
      return arr;
    }
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});

// addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));

askIfGreaterThan(5, 3, output => console.log(`${output}`));

