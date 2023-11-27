const db = require('../config/database');

const userController = {
    login:(req,res) =>{
        const {user,pass} = req.body;
        const querylogin='SELECT * FROM users WHERE user = ? AND pass = ?';

        db.query(querylogin,[user,pass],(err,result)=>{
            if(err){
                console.error('Query failed :',err);
                res.status(500).send('Server error');
            }
            else
            {
                if(result.length>0)
                {
                    res.status(200).send({ success: true });

                }
                else
                {
                    res.status(401).send({ success: false });

                }
            }
        });
    },
};

module.exports = userController;