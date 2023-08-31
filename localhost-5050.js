const cors = require('cors');
const express = require('express');
const path = require('path');

// -------------------------------------------------------------------------------------------------

const port = getPort();
if (!port) {
  return;
}
const filepath = getFilepath();

const app = express();
app.use(cors());
app.use(express.json());

// -------------------------------------------------------------------------------------------------

// Will show './index.html' at 'http://localhost:<PORT>'
// Will show './index.html' at 'http://localhost:<PORT>/index.html'
// Will show './myfile.txt' at 'http://localhost:<PORT>/myfile.txt'
app.use('/', express.static(filepath));

// Will show '/public/index.html' at 'http://localhost:<PORT>'
// Will show '/public/index.html' at 'http://localhost:<PORT>/index.html'
// Will show '/public/myfile.txt' at 'http://localhost:<PORT>/myfile.txt'
// app.use('/', express.static(filepath + '/public'));

// Will show '/public/myfile.txt' at 'http://localhost:<PORT>'
// app.get('/', (req, res) => {
  // res.sendFile(filepath + '/public/myfile.txt');
// });

// Will show '/public/myfile.txt' at 'http://localhost:<PORT>/myfile'
// app.get('/myfile', (req, res) => {
  // res.sendFile(filepath + '/public/myfile.txt');
// });

app.listen(port, () => {
  console.log(`Micro-server running on port ${port}`);
  console.log(`To view ${filepath}/my-file, visit http://localhost:${port}/my-file in your web browser`);
  console.log('Press Ctrl-C or close the terminal to quit');
});

// -------------------------------------------------------------------------------------------------

// Find the port number from this file name (either code file or executable file, depending on what's running):
function getPort() {
  let port;

  if (process.pkg) {
    port = process.execPath.split('/').at(-1).split(/[-.]/)[1];
  }
  else if (require.main) {
    port = require.main.filename.split('/').at(-1).split(/[-.]/)[1];
  }
  else {
    port = process.argv[1].split('/').at(-1).split(/[-.]/)[1];
  }

  if (port.length != 4 || !Number(port)) {
    console.log(
      'This file name must begin with "xxxx-yyyy", in which "xxxx" can technically be anything, but, unless ' +
      'there is a real need to do otherwise, it can be left as "localhost". More importantly, "yyyy" must ' +
      'be a 4-digit number that defines the port number the micro-server will run on. Try another 4-digit ' +
      'number by modifying the file name itself and running again.'
    );
    return undefined;
  }
  else {
    return port;
  }
}

// -------------------------------------------------------------------------------------------------

// Find the path that contains this file:
function getFilepath() {
  if (process.pkg) {
    return path.resolve(path.join(process.execPath, '/..'));
  }
  else if (require.main) {
    return path.resolve(path.join(require.main.path));
  }
  else {
    return path.resolve();
  }
}
