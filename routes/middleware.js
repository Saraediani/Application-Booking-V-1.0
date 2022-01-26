const authPage = (permission) =>{
    return (req, res , next) =>{
        const userRole = req.body.roles
        if(permission.includes(userRole)){
            next()
        }else{
            return res.status(400).json('you dont have permission')
        }
    }
}

module.exports = {authPage}