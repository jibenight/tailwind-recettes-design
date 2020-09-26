const express = require('express');

const app = express();
const PORT = process.env.PORT || 4000;

//api route
const apiRouter = require('./api/api');
app.use('/api', apiRouter);

app.listen(PORT, () => {
  console.log(`Server is ready at http://localhost:${PORT}`);
});
