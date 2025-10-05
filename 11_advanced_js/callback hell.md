What is "callback hell"
    -Callback hell (aka the pyramid of doom) happens when asynchronous operations are nested inside callbacks repeatedly, producing deeply indented, hard-to-read, hard-to-maintain code. It makes reasoning about flow and error handling difficult.

Why it's bad
   - Poor readability (deep nesting).
   - Hard to handle errors consistently.
   - Hard to reuse or test individual steps.
   - Easy to introduce bugs when changing flow.

Minimal example (the "hell" shape)
```
doStep1(data, function(err, res1) {
  if (err) return handle(err);
  doStep2(res1, function(err, res2) {
    if (err) return handle(err);
    doStep3(res2, function(err, res3) {
      if (err) return handle(err);
      doStep4(res3, function(err, res4) {
        if (err) return handle(err);
        console.log('All done', res4);
      });
    });
  });
});
```

# Improve with Promises
  - Convert functions to return Promises and chain them. 
  Error handling becomes centralised with .catch().

  doStep1(data)
    .then(res1 => doStep2(res1))
    .then(res2 => doStep3(res2))
    .then(res3 => doStep4(res3))
    .then(final => console.log('All done', final))
    .catch(err => console.error('Something failed', err));

Even Cleaner with async/await
  - async/await lets you write asynchronous code in a linear style
   and use normal try/catch for errors.

async function runPipeline(data) {
  try {
    const res1 = await doStep1(data);
    const res2 = await doStep2(res1);
    const res3 = await doStep3(res2);
    const final = await doStep4(res3);
    console.log('All done', final);
  } catch (err) {
    console.error('Something failed', err);
  }
}

Practical ways to avoid callback hell
    Use Promises (or utilities that wrap callback APIs).
    Use async/await for linear flow.
    Break logic into small named functions (avoid anonymous, inline callbacks).

