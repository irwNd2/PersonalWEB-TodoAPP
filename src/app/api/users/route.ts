import dbConnect from "@/lib/utils/mongodb";
import UserModel from "@/lib/models/user.model";
import { NextApiRequest, NextApiResponse } from "next";
import getErrorMessage from "@/lib/errorHandler";
import { NextResponse } from "next/server";

export const GET = async (req: NextApiRequest) => {
  await dbConnect();
  try {
    const allUsers = await UserModel.find({});
    return new NextResponse(allUsers.toString(), { status: 200 });
  } catch (error) {}
};
