import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import {z} from 'zod';
import { usernameValidation } from "@/schemas/signUpSchema";
import { request } from "http";


export async function POST(request: Request){
    await dbConnect()

    try{
      const {username, code} = await request.json()

      const decodedUsername = decodeURIComponent(username);
      const user = await UserModel.findOne({username: decodedUsername})

      if(!user){
        return Response.json({
            success: false,
            message: "user not found!"
               }, {status: 500}
             )
      }

    //   user found
    const isCodeValid = user.verifyCode === code;
    console.log("code is: ", code);
    const isCodeNotExpired = new Date(user.verifyCodeExpiry) > new Date();

    if(isCodeValid && isCodeNotExpired){
        user.isVerified = true;
        await user.save()

        return Response.json({
            success: true,
            message: "Account verified successfully"
        }, { status: 200}
      )
    } else if(!isCodeNotExpired){
        // code has expired
        return Response.json({
            success: false,
            message: "Verification code has expired, Please signup again to get a new code"
        }, {status: 400})
    } else { 
        return Response.json({
            // incorrect code
            success: false,
            message: "Incorrect verification code"
        }, {status: 400})
    }

    } catch(error){
console.error("Error checking username,", error)
return Response.json({
    success: false,
    message: "Error checking username"
       }, {status: 500}
     )
    }
}