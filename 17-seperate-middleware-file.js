module.exports = reqFilter = (req, res, next) => {
    if(!req.query.age){
        res.send("Please provide age")
    }
    else if(req.query.age < 18){
        res.send("you are not access to this page")
    }
    else{
        next();
    }
}