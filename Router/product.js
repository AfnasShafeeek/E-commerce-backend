import express from 'express'
import {fetchData,putData} from '../Controller/product.js'

const router = express.Router()

router.get('/lists',fetchData)
router.post('/add',putData)

export default router;
