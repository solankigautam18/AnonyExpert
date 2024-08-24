import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            id: "credentials",
            name: "credentials",
            credentials: {
                email: { label: "Email", type: "text"},
                password: {label: "Password", type: "password"}
            },
            async authorize(credentials: any): Promise<any>{
                await dbConnect()
                try{
                    const user = await UserModel.findOne({
                        $or: [
                            {email: credentials.identifier},
                            {username: credentials.identifier}
                        ]
                    }) 
                    if(!user){
                        throw new Error('No user found with this email')
                    }
                    if(!user.isVerified){
                        throw new Error('Please verify user account before login')
                    }

                    const isPasswordCorrect = await bcrypt.compare(credentials.password, user.password)
                    if(isPasswordCorrect){
                        return user 
                    } else {
                        throw new Error('Incorrect Password')
                    }

                } catch(err: any){
                    throw new Error(err.message)
                }
            }
        })
    ],
    callbacks: { 
        //NOTE: in callbacks, for jwt make sure to return token only, same for session callback to return session itself, otherwise it may cause un-necessary errors.

        // Here what we are doing is, returning data in session and token itself, its a hack to reduce un-necessary data requests to db, although it may increase pay-load which is quite bearable.

        // we can easily fetch user data from token and session itself.

        async jwt({ token, user }){
            if(user){
                token._id = user._id?.toString();
                token.isVerified = user.isVerified;
                token.isAcceptingMessages = user.isAcceptingMessages;
                token.username = user.username;
            }
            return token;
        },
        async session({ session, token }){
            if(token){
                session.user._id = token._id;
                session.user.isVerified = token.isVerified;
                session.user.isAcceptingMessages = token.isAcceptingMessages;
                session.user.username = token.username;
            }
            return session;
        }
    },
    pages: {
        signIn: '/sign-in'
    },
    session: {
        strategy: "jwt"
    },
    secret: process.env.NEXTAUTH_SECRET,
}