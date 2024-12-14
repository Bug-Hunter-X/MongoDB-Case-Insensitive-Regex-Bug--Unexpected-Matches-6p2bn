# MongoDB Case-Insensitive Regex Bug

This repository demonstrates a common bug related to case-insensitive regular expression searches in MongoDB.  The `i` flag in a regular expression intended for case-insensitive matching can lead to unintended matches when not used correctly.

The `bug.js` file shows the problematic code, which uses a case-insensitive regex `/John/i`. While this aims for case-insensitive matching, it might also unexpectedly match names like 'john123', as the regex matches anywhere within the string, not just at the beginning. The `bugSolution.js` file provides a corrected version. 

**How to Reproduce:**
1. Clone this repository.
2. Ensure you have MongoDB and a Node.js environment set up.
3. Run `bug.js`. Observe the unexpected results.
4. Run `bugSolution.js` to see the corrected version in action.

**Discussion:** 
The issue stems from a misunderstanding of how the `/i` flag works with regular expressions. For precise case-insensitive matching at the beginning of a string, use a more specific regex such as `/^John$/i`  or use the $regex operator with options for case-insensitive searching in the MongoDB query directly.