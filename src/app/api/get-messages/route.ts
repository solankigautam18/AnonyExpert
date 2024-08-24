import { getServerSession } from "next-auth"; //new
import { authOptions } from "../auth/[...nextauth]/options";
import dbConnect from "@/lib/dbConnect";
import UserModel from "@/model/User";
import { User } from "next-auth";
import mongoose from "mongoose"; //new

export async function GET(request: Request) {
  await dbConnect();

  const session = await getServerSession(authOptions);
  const user: User = session?.user as User;
  console.log("user", user);

  if (!session || !session.user) {
    return Response.json(
      {
        success: false,
        message: "Not Authenticated",
      },
      { status: 401 },
    );
  }

  // aggregation pipeline:
  const userId = new mongoose.Types.ObjectId(user._id);
  try {
    const user1 = await UserModel.aggregate([
      { $match: { _id: userId } },
      { $unwind: "$messages" },
      { $group: { _id: "$_id", messages: { $push: "$messages" } } },
    ]);

    const asd = await UserModel.findOne({ _id: userId });
    console.log(asd);

    console.log("user1", user1);

    if (!user1 || user1.length === 0) {
      return Response.json(
        {
          success: false,
          message: "user1 not found",
        },
        { status: 401 },
      );
    }
    return Response.json(
      {
        success: true,
        messages: user1[0].messages,
      },
      { status: 200 },
    );
  } catch (error) {
    console.log("An unexpected error occurred: ", error);
    return Response.json(
      {
        success: false,
        message: "Unexpected error",
      },
      { status: 500 },
    );
  }
}

