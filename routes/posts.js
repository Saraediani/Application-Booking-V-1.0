const router = require('express').Router()
const verify = require('./tokenverify')

router.get('/posts', verify,  (req, res) => {
    res.json({
        posts:{
            title:'first post',
            description:'oevjeiove',
        }
    });

})

module.exports = router