const express= require('express')
const router = express.Router();
const User = require('../models/user')

router.get('/getUsers',async (req,res)=>{
    
    try{
        const user = await User.find({})
        res.status(200).send(user)
    }catch(e){
        res.status(401).send(e)
    }
})

router.post('/addUser',async (req,res)=>{
    const user = new User(req.body);
    try {
        await user.save();
        res.status(201).send(user)
    } catch (error) {
        res.status(401).send(error)
    }
})


router.put('/updateUser/:id',async (req,res)=>{
    const updates = Object.keys(req.body);
    console.log(req.params.id,req.body)
    const allowedUpdates = ['name','email','gender','status']
    const isValidOperation = updates.every((update)=>{
        return allowedUpdates.includes(update)
    })
    if(!isValidOperation){
        return res.status(400).send({error:"Invalid Updates"})
    }
    try {
        const user = await User.findByIdAndUpdate(req.params.id,req.body,{new:true,runValidators:true})
        if(!user){
           return res.status(404).send({error:'something went wrong'})
        }
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete('/deleteUser/:id',async (req,res)=>{
    try {
        const user = await User.findByIdAndDelete(req.params.id)
        if(!user){
            res.status(404).send()
        }
        res.status(200).send()
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router