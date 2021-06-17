const express = require('express')
const morgan = require('morgan')
const testRoutes = require('./routes/routes')

const app = express();

app.set('view engine', 'ejs')

app.listen(3000);

app.use(express.static('public'))

app.use(morgan('tiny'))//raporlama

app.use(testRoutes)

app.get('/about-us',(req,res) => {
    res.redirect('/about', {title:'Lara | Anasayfa'})
})

app.use((req, res) => {
    res.status(404).render('404', {title:'404'})
})