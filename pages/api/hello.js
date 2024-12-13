import User from "@/models/user";
import dbConnect from "@/lib/mongodb";

export default async function handler(req, res) {

    if(req.method === "POST"){

        try{

            const users = [
                {
                  id: "101",
                  username: "reader1",
                  email: "reader1@example.com",
                  password: "password101",
                },
                {
                  id: "102",
                  username: "reader2",
                  email: "reader2@example.com",
                  password: "password102",
                },
                {
                  id: "103",
                  username: "reader3",
                  email: "reader3@example.com",
                  password: "password103",
                },
                {
                  id: "104",
                  username: "reader4",
                  email: "reader4@example.com",
                  password: "password104",
                },
            ];
              
            await dbConnect();
            const userss = await User.insertMany(users);
            userss.save();
            res.status(200).json({
                message: 'user added successfully'
            });

        }
        catch(e){
            console.log(e);
            res.status(500).json({
                message: 'server error'
            });
        }
          
    }
}