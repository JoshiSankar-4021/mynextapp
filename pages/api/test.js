import {pool} from '../../lib/db';
export default async function handeler(req,res){
    if(req.method==="GET"){
        // if(req.query.action==="getuser"){
        //     res.status(200).json({message:`this is get user get api`})
        // }
        // if(req.query.action==="getpost"){
        //     res.status(200).json({message:`this is get post get api`})
        // }

        if(req.query.action==="getusers"){
            const selectquery =`select * from "User"`;
            const result=await pool.query(selectquery);
            res.status(200).json(result.rows)
        }
        if (req.query.action === "getuser") {
            const id = req.query.id;
            const selectquery = `SELECT * FROM "User" WHERE id=$1`;
            const values = [id];
            const result = await pool.query(selectquery, values);
            res.status(200).json(result.rows);
        }

    }
    if(req.method==="POST"){
        if(req.query.action==="post"){
        const {name,age}=req.body;
        
        res.status(200).json(req.body)
        }

        if(req.query.action==="adduser"){
        const {id,name,email,password}=req.body;
        const insertquery = `
        INSERT INTO "User"(id, name, email, password)
        VALUES ($1, $2, $3, $4);`;
        const values=[id,name,email,password];
        await pool.query(insertquery, values);
        res.status(200).json({message:"user registerred or added"});
        }

    }
    if(req.method==="PUT"){
        if(req.query.action==="updateuser"){
            const id=req.query.id;
            const{name,email,password}=req.body;
            const updatequery=`update "User" set name=$1,email=$2,password=$3 where id=$4`;
            const values=[name,email,password,id];
            await pool.query(updatequery,values);
            res.status(200).json({message:"user updated"})
        }
    }
    if(req.method==="DELETE"){
        if(req.query.action==="deleteuser"){
        const id = req.query.id;
        const deletequery=`delete from "User" where id=$1`;
        const values=[id];
        await pool.query(deletequery,values);
        res.status(200).json({message:"user deleted"})
        }
    }
}
//synchronisation------>code line by line execution ----->it will follow a particular order