const express = require('express');
const app = express();

app.use(express.json());

const authRouter = require('./router/auth-router');
app.use('/api/auth', authRouter);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
