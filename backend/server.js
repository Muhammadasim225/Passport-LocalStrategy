const express=require('express');
const dotenv=require('dotenv').config();
const {conn,userModal}=require('./config/db');
const expressSession=require('express-session');
const {initializingPassport,checkAuthenticated,isAuthenticated,isAuthenticated2}=require('./passportConfig')
const app=express();
app.use(express.json())
app.use(express.urlencoded({ extended: true })); // Parses form data
app.set('view engine', 'ejs');
const path=require('path');
app.set('views', path.join(__dirname, '../views'));
const passport=require('passport');
initializingPassport(passport);
app.use(expressSession({secret:"secret",resave:false,saveUninitialized:false}));
app.use(passport.initialize());
app.use(passport.session());


app.post('/login',passport.authenticate("local",{failureRedirect:"/register",successRedirect:'/'}));

app.get('/register',(req,res)=>{
    res.render('frontend/register')
})

app.get('/login',(req,res)=>{
    res.render('frontend/login')
})
app.post('/register',async (req,res)=>{
    console.log(req.body)
    const {username,email,password}=req.body;
    const kkk=await userModal.findOne({email});
    if(kkk){
        res.status(400).json("User already registered");
    }
    else{
        const kjh=await userModal.create({username,email,password});
        if(kjh){
            res.status(200).render('frontend/login');
        }
        else{
            res.status(500).json({ message: "An error occurred during registration." });
        }
    }
})
app.get('/',isAuthenticated2,(req,res)=>{
    res.render('frontend/dashboard')

})

app.get("/profile",isAuthenticated,(req,res)=>{
    const user =req.body;
    res.send(req.user);
})
app.get('/logout',(req,res)=>{
    req.logout(function (err) {
        if (err) {
            return next(err); // Pass any errors to the error handler
        }
        res.redirect('/register'); // Redirect to the register page after logout
    });
})
const port=process.env.PORT;

app.listen(port,()=>{
    console.log(`Port is listening on ${port} and url is http://localhost:${port} `)
})
