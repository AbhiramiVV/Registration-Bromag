import express from 'express'
import { postAddEmployee } from '../controllers/employeeController.js'



const router=express.Router()

router.post('/addEmployee',postAddEmployee)


export default router