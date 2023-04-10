// Import the express in typescript file
import express from 'express';
import path from 'path';

// Initialize the express engine
const app: express.Application = express();

// Take a port 3000 for running server.
const port: number = 3000;

// Handling '/' Request
app.get('/', (_req, _res) => {
  _res.send('TypeScript With Express');
});

// Server setup
app.listen(port, () => {
  console.log(`TypeScript with Express http://localhost:${port}/`);
  // console.log(path.join(__dirname, 'redhat-event-driven-architecture.pdf'));
  console.log(
    path.resolve(process.cwd(), 'src', 'redhat-event-driven-architecture.pdf'),
    process.cwd(),
    'attachments',
    'redhat-event-driven-architecture.pdf'
  );
});

const user = {
  'Hola este un caso message': [
    { payload: 'Primer reply', type: 'text' },
    { payload: '/path/to/file', type: 'file' },
    { payload: '/path/to/image', type: 'image' },
  ],
  'Hola este otro caso message': [
    { payload: 'Primer reply', type: 'text' },
    { payload: '/path/to/file', type: 'file' },
    { payload: '/path/to/image', type: 'image' },
  ],
};
