const router = require('express').Router()
const Task = require('../models/Task')


//@desc     GET All tasks
router.get('/', async (req, res) => {
    try {
        //const task = new Task()
        const data = await Task.find({})
        res.status(200).json({type:'success', message:'OK', data})
       } catch (error) {
           console.log("error when getting Tasks")
           console.log(error)
       }
})


//@desc     Delete One task
router.delete('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result = await Task.findByIdAndDelete(id)
        if(result)
            return res.status(200).json({msg:'delete OK'})
        return res.status(400).json({msg:'ID invalid'})
    } catch (error) {
        res.status(500).json({msg:'server error'})
    }
    })


//@desc Add a task
router.post('/', async (req, res) => {
    const {name} = req.body
    if(!name){
        res.status(400).json({type:'error', msg:'Name is undefined'})
    }
   try {
    const newTask = {name}
    console.log(newTask)
    const task = new Task(newTask)
    const data = await task.save()
    res.status(200).json({type:'success', msg:'OK', data})
   } catch (error) {
       console.log("error when adding new Task")
       console.log(error)
   }
})


//@desc     UPDATE task
router.put('/:id', async (req, res) => {
    const id = req.params.id
    try {
        const result  = await Task.findOneAndUpdate({_id:id}, {status:true})
        if (result){
            return res.status(200).json(result)
        } else {
            res.status(400).json({type:'error', message:'Task Inexistant'})
        }
    } catch (error) {
        
    }
    })


module.exports = router