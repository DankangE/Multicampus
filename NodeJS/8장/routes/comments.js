const express = require('express');
const User = require('../module/user');

const router = express.Router();

router.route('/:id')
    .patch(async (req, res, next) => {
        try {
            const result = await Comment.update({
                _id: req.params.id,
            }, {
                comment: req.body.comment,
            })
        } catch (err) {
            console.error(err);
            next(err);
        } 
    })

    .delete(async (req, res, next) => {
        try {
            const result = await Comment.remove({ _id: req.params.id });
            res.json(result);
        } catch (err) {
            console.error(err);
            next(err);
        } 
    });

router.post('/', async (req, res, next) => {
    try {
        const comment = await Comment.create({
            commenter: req.user.id,
            comment: req.body.comment,
        });
        console.log(comment);
    } catch (err) {
        console.error(err);
        next(err);
    } 
});

module.exports = router;