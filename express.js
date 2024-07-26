console.time('cold-start');

import express from 'express';
const app = express();
app.disable('etag');
app.disable('x-powered-by');

app.get('/hello', function (req, res) {
  res.send('Hello, World!');
});

app.listen(process.env.PORT, () => {
  console.timeEnd('cold-start');
  console.log('Express started on port '+ V);
});