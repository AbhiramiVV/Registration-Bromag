import express from 'express'
import { getEmployee, getSingleEmployee, postAddEmployee, putEditEmployee, removeEmployee } from '../controllers/employeeController.js'


const router=express.Router()

router.post('/addEmployee',postAddEmployee);
router.get('/getEmployee',getEmployee)
router.get('/singleEmployee/:id',getSingleEmployee);
router.put('/employeeEdit/:id',putEditEmployee)
router.delete('/removeEmployee/:id',removeEmployee)
export default router