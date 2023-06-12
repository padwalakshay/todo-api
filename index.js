/* imports for setting up express app*/ 
import express from 'express';
import config from './config/config.js';
import todoroute from './routes/todo.route.js'
import httpStatus from 'http-status';
import cors from 'cors';
import {ValidationError} from 'express-validation'
const app = express()
const port = config.port;

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())
app.use('/api', todoroute)
app.get('/health-check', (req, res) => {
    res.status(httpStatus.OK).send('OK')
})

app.all('*', (req, res) => {
    res.status(httpStatus.NOT_FOUND).send('NOT FOUND')
})

app.listen(port, () => {
    console.log(`app started on port ${port}`)
})


app.use((err, req, res, next) => {
    res.status(httpStatus.INTERNAL_SERVER_ERROR).send('Something went wrong');
})

export default app;