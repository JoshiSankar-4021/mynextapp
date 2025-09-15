export default function handeler(req,res){
    if(req.method==="GET"){
        res.status(200).json({message:`this is get api`})
    }
    if(req.method==="POST"){
        res.status(200).json({message:`this is post api`})

    }
    if(req.method==="PUT"){
        res.status(200).json({message:`this is put api`})

    }
    if(req.method==="DELETE"){
        res.status(200).json({message:`this is delete api`})

    }
}