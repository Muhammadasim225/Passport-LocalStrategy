const {userModal}=require('./config/db')
const LocalStrategy = require('passport-local').Strategy;
exports.initializingPassport=(passport)=>{
    passport.use(new LocalStrategy({
        usernameField:'email',
        passwordField:'password',
    },
    async function(usernameField,passwordField,done){
        const user = await userModal.findOne({ email: usernameField });
        try{
            if(!user){
                return done(null,false);
    
            }
            if(user.password!==passwordField){
                return done(null,false);
            }
            else{
                return done(null,user);
            }
        }
        catch(err){
            return done(err,false);

            
        }
    }
))
passport.serializeUser((user,done)=>{
    return done(null,user.id)


})
passport.deserializeUser(async (id,done)=>{
    try{
        const user=await userModal.findById(id);

        done(null,user);

    }
    catch(err){
        return done(err,false)

    }

})
}
exports.isAuthenticated=(req,res,next)=>{
    if(req.user){
        return next();
    }
    else{
        res.redirect('/login');
    }
}
exports.isAuthenticated2=(req,res,next)=>{
    if(req.user){
        return next();
    }
    else{
        res.redirect('/login');
    }
}
