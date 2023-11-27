import express from 'express'
import { getEmployee, getSingleEmployee, postAddEmployee, putEditEmployee } from '../controllers/employeeController.js'
import upload from '../config/multiUpload.js'
import multipleUpload from '../config/multiUpload.js'


const router=express.Router()

router.post('/addEmployee',postAddEmployee);
router.get('/getEmployee',getEmployee)
router.get('/singleEmployee/:id',getSingleEmployee);
router.put('/employeeEdit/:id',putEditEmployee)

export default router