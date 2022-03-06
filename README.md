# Overview

This GitHub project is a minimal repro case to demonstrate a bug with MUI Autocomplete and the
Karma test runner.

To repro, checkout the project and install npm deps:

```
npm install
```

Then, run the tests:

```
npx karma start karma.conf.js
```

If you allow the test to run the first time it should pass. If you modify the `App.test.js` file,
this will trigger a Karma re-run, and the test will fail.

On the failed run you should see Karma console.log output like:

```
LOG: 'input value: "H"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
LOG: 'input value: "e"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
LOG: 'input value: "l"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
LOG: 'input value: "l"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
LOG: 'input value: "o"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
LOG: 'input value: "!"'
LOG: 'reason: "input"'
LOG: 'input value: ""'
LOG: 'reason: "reset"'
```

This output is from two `console.log` statements in the `onInputChange` method in the Autocomplete.
Note how it resets the AC input on every keystroke. This only happens as the window karma runs in
has lost focus. In fact, if you set `client: { useIframe: false}` in `karma.conf.js`, the test
will always pass as this flag forces Karma to focus the window on every run.
