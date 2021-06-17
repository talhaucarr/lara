const express = require('express')
const router = express.Router()


router.get('/',(req,res) => {
    res.render('index', {title:'Lara | Anasayfa'})
})

router.get('/about',(req,res) => {
    res.render('about', {title:'Lara | About'})
})

module.exports = router