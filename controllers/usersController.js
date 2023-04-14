const User = require("../models/User");


module.exports.logIn=(function(req,res){
    res.render('login')
})

module.exports.Register=(function(req,res){
    res.render('register')
})

module.exports.create=function(req,res){
    if (req.body.password != req.body.password2) {
        console.log('Password doesnot match')
        res.redirect("back");
        return;
      }
      User.findOne({ email: req.body.email })
      .then((user)=> {
        if(!user){
            return User.create(req.body)
            .then((result)=>{
                console.log('Sucessfully created.........')
                return res.redirect('users/log-in')
            })
            .catch((err)=>{
                console.log('Error',err)
                return res.redirect('back')
            })
        }
        else{
            console.log('Already exist')
                return res.redirect('back')
        }
      })
      .catch((err)=>{
        console.log('Error',err)
                return res.redirect('back')
      })
        
}

// module.exports.create = async function(req, res) {
//     if (req.body.password != req.body.password2) {
//       res.redirect("back");
//       return;
//     }
  
//     try {
//       const user = await User.findOne({ email: req.body.email });
//       if (!user) {
//         await User.create(req.body);
//         console.log("Successfully Created");
//         res.redirect("/users/log-in");
//       } else {
//         console.log("Exist");
//         return res.redirect("back");
//       }
//     } catch (err) {
//       console.log("Error: ", err);
//       return;
//     }
//   };




//create session
  
module.exports.createSession= function(req,res){
    User.findOne({email:req.body.email})
    .then((user)=>{
        if(user){
            if(user.password !=req.body.password){
                console.log('Password does not match');
                return res.redirect('back');
            }
            console.log('Successfully logged in');
             return res.redirect('/');
        }
        else{
            console.log('incorrect paswsword');
            return res.redirect('back');
        }
    })
    .catch((err)=>{
        console.log('Invalid email id');
      return res.redirect('back');
    })
}





// module.exports.createSession = async function(req, res) {
//     try {
//       const user = await User.findOne({ email: req.body.email });
//       if (!user) {
//         console.log('Please enter valid email id');
//         return res.redirect('back');
//       }
//       if (user.password != req.body.password) {
//         console.log('Password does not match');
//         return res.redirect('back');
//       }
//       console.log('Successfully logged in');
//       return res.redirect('/');
//     } 
//     catch (err) {
//       console.log('Error: ', err);
//       return res.redirect('back');
//     }
//   };
  