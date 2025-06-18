// const express = require('express');
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//   res.send('Hello from Node.js Web App!');
// });

// app.listen(PORT, () => {
//   console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample API endpoint
app.get('/api/message', (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
