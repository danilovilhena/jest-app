const express = require('express');
const userRoutes = require('./routes/userRoutes');
const mathRoutes = require('./routes/mathRoutes');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/users', userRoutes);
app.use('/math', mathRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
