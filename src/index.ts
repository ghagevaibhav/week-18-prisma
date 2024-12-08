import express from 'express'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

const app = express()

app.use(express.json())

app.get('/users', async (req: any, res: any) => {
    const result = await prisma.user.findMany();
    return res.json(result)
})




app.listen(3000, () => {
    console.log('Server is running on http://localhost:3000')
})