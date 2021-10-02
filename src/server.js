import 'dotenv/config'
import express from 'express';
import { UserController } from './controllers/UserController.js'
import { createBullBoard } from '@bull-board/api'
import { BullAdapter } from '@bull-board/api/bullAdapter.js'
import { ExpressAdapter } from '@bull-board/express'
import Queue from './providers/Queue.js'

const serverAdapter = new ExpressAdapter();

const app = express()
app.use(express.json())

const userController = new UserController()

createBullBoard({
    queues: Queue.queues.map(q => new BullAdapter(q.bull)),
    serverAdapter: serverAdapter
})
serverAdapter.setBasePath('/admin/queues')
app.use('/admin/queues', serverAdapter.getRouter());
  
app.post('/users', userController.post)

app.listen(8080, () => {
    console.log(`APP running in port 8080`)
})