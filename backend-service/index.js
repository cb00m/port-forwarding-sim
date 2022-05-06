const app = require('./app/app');

// Listening port
const port = process.env.PORT || 1234;

app.listen(port, () => {
    console.log(`Service listening at port ${port}`);
});