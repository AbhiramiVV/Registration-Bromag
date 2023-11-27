import express from 'express'
import { getEmployee, postAddEmployee } from '../controllers/employeeController.js'
import upload from '../config/multiUpload.js'
import multipleUpload from '../config/multiUpload.js'


const router=express.Router()

router.post('/addEmployee',postAddEmployee);
router.get('/getEmployee',getEmployee)


export default router