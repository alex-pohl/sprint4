
const express = require('express'); // Importem express
const app = express(); // inicialitzem el servidor
const tasks = require('./routes/tasks') // importem el router
const connectDB = require('./db/connect');
require('dotenv').config()


// middleware
app.use(express.json())


//routes
app.get('/hello', (req, res)=>{
    res.send('Task Manager App')
})

app.use('/api/v1/tasks', tasks)




// app.get('/api/v1/tasks')         - get all the tasks
// app.post('/api/v1/tasks')        - create a new task
// app.get('/api/v1/tasks/:id')     - get a single task
// app.patch('/api/v1/tasks/:id')   - update task
// app.delte('/api/v1/tasks/:id')   - delete task


const port = 3000; // Port



const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}...`));

    } catch (error) {
        console.log(error)
    }
}

start()