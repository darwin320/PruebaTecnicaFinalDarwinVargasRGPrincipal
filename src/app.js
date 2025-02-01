const express = require('express');
const { connectDB } = require('./database');
const cors = require('cors');
const { syncDB } = require('./models');
const setupSwagger = require('./swagger');

require('dotenv').config();
connectDB();

const app = express();

app.use(express.json());
app.use(cors());

app.use('/api', require('./routes/productsRoutes'));
app.use('/api', require('./routes/ordersRoutes'));

const errorHandler = require('./middleware/errorHandler');
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const startServer = async () => {
    await syncDB();
    setupSwagger(app); 
    app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
};

startServer();
