export default function handeler(req,res){
    if(req.method==="GET"){
        if(req.query.action==="getuser"){
            res.status(200).json({message:`this is get user get api`})
        }
        if(req.query.action==="getpost"){
            res.status(200).json({message:`this is get post get api`})
        }
    }
    if(req.method==="POST"){
        if(req.query.action==="post"){
        res.status(200).json({message:`this is get user get api`})
        }
         if(req.query.action==="post"){
        res.status(200).json({message:`this is get user get api`})
        }
    }
    if(req.method==="PUT"){
        res.status(200).json({message:`this is put api`})
    }
    if(req.method==="DELETE"){
        res.status(200).json({message:`this is delete api`})
    }
}