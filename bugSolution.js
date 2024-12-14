```javascript
const query = { name: /^John$/i }; // Case-insensitive match at beginning of string

db.collection('users').find(query).toArray((err, users) => {
  if (err) throw err;
  console.log(users); 
});

//Alternative using MongoDB's $regex operator
const query2 = { name: { $regex: '^John$', $options: 'i' } };
db.collection('users').find(query2).toArray((err, users) => {
  if (err) throw err;
  console.log(users);
});
```
This corrected version uses `/^John$/i` to ensure that the match occurs only at the beginning of the string and is case-insensitive. The alternative shows MongoDB's built in $regex operator to achieve the same result.