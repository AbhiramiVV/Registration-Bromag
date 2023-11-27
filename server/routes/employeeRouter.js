import express from 'express'
import { postAddEmployee } from '../controllers/employeeController.js'
import upload from '../config/multiUpload.js'
import multipleUpload from '../config/multiUpload.js'


const router=express.Router()

router.post('/addEmployee',postAddEmployee)


export default router