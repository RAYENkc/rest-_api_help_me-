const express = require('express');

const router = express.Router()
const User = require('../models/User')

router.get('/',async(req,res) => {
    try{
        const users = await User.find();
        res.json(users) 
        
    }catch(err){
        res.json({message:err})
    }
})

router.get('/:userId',async  (req,res) => {
    try{
        const user = await User.findById(req.params.userId)
        res.json(user);
    }catch(err){
        res.json({message : err})
    }
 
 
})



router.post('/',async (req,res) => {
  const user = new User({
      nom : req.body.nom,
      prenom: req.body.prenom,
      age : req.body.age,
      profession: req.body.profession,
      role : req.body.role,
      niveaux: req.body.niveaux,
  })
  try{
    const saveUser = await  user.save()
    res.json(saveUser)
  }catch(err){
      res.json({message : err})
  }

  
 console.log(req.body)
})

router.delete('/:userId',async  (req,res) => {
    try{
        const removeUser = await User.remove({_id : req.params.userId })
        res.json(removeUser);
    }catch(err){
        res.json({message : err})
    }
 
 
})

//update
router.patch('/:userId',async  (req,res) => {
    try{
        const updateUser = await User.updateOne(
            {_id : req.params.userId },
            {$set : { 
                nom : req.body.nom,
                prenom: req.body.prenom,
                age : req.body.age,
                profession: req.body.profession,
                role : req.body.role,
                niveaux: req.body.niveaux,
            }}
            )
            
        res.json(updateUser);
    }catch(err){
        res.json({message : err})
    }
 
 
})
module.exports = router