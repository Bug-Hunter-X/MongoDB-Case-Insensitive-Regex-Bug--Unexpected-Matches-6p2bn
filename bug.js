```javascript
const query = { name: /John/i }; // Case-insensitive search

db.collection('users').find(query).toArray((err, users) => {
  if (err) throw err;
  console.log(users); 
});
```
This code snippet attempts a case-insensitive search for the name 'John'. However, if the `name` field contains a value like 'john123', this regex will match it unexpectedly.  This is because the `/i` flag matches anywhere within the string, not just the beginning.