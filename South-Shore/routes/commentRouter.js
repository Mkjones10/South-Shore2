const express = require('express')
const commentRouter = express.Router()
const Comment = require('../models/comments')
commentRouter.post('/', (req, res, next) =>{
    const comment = new Comment(req.body)
    comment.save((err, newComment) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newComment)
    })
})

commentRouter.get('/', (req, res, next)=>{
    Comment.find((err, comments)=>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(comments)
    })
})
commentRouter.delete('/:commentId', (req, res, next) =>{
    Comment.findByIdAndDelete({_id:req.params.commentId}, (err, deletedComment) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(200).send(deletedComment)
    })
    
})

module.exports = commentRouter