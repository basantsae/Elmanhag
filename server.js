const express = require('express');
const path = require('path'); // Ensure path is required to handle file paths
const login = require('./src/component/LoginAdmin/Login');

const app = express();

//Serve static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

app.use('/login', login);


// The "catchall" handler: for any request that doesn't
// match one above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

