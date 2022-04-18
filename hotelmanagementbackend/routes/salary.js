const express = require('express');
const Posts = require('../models/salary');

const router = express.Router();

//save posts

router.post('/salary/save',(req,res)=>{

let newPost = new Posts(req.body);

newPost.save((err) =>{
if(err){

return res.status(400).json({
error:err
});
}
return res.status(200).json({
success:"Posts saves successfully"
});
});
});

//get posts

router.get('/salary',(req,res)=>{
  Posts.find().exec((err,posts) =>{
     if(err){
        return res.status(400).json({
          error:err
         });
     }
     return res.status(200).json({
         success:true,
         existingPosts:posts
     });
  });
});

//get a specific post

router.get("/salary/:id",(req,res)=>{
let postId = req.params.id;
Posts.findById(postId,(err,post) =>{
if(err){
    return res.status(400).json({success:false, err});
}
return res.status(200).json({
    success:true,
    post
});
});
});







//update posts


router.put('/salary/update/:id',(req,res)=>{
    Posts.findByIdAndUpdate(
req.params.id,
{
$set:req.body
},
(err,post)=>{
    if(err){
        return res.status(400).json({
        error:err
        });
        }
        return res.status(200).json({
        success:"Updated Successfully"
});
});
});

//delete posts
router.delete('/salary/delete/:id',(req,res) =>{
Posts.findByIdAndRemove(req.params.id).exec((err,deletedPost) =>{
    if(err) return res.status(400).json({
        message:"Delete unsuccessful",err
        });
        
        return res.json({
        message:"Delete Successfull",deletedPost
});
});
});

module.exports = router;