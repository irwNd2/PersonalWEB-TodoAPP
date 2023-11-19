import dbConnect from "@/lib/utils/mongodb";
import UserModel from "@/lib/models/user.model";
import getErrorMessage from "@/lib/errorHandler";
import { NextResponse } from "next/server";

type CreateUserBody = {
  email: string;
  password: string;
  name: string;
};

export const POST = async (req: any) => {
  await dbConnect();
  try {
    const body = await req.json();
    const { email, password, name } = body as CreateUserBody;
    const existedUser = await UserModel.findOne({ email });
    if (existedUser) {
      return new NextResponse("User already registered. Please Login", { status: 400 });
    }
    const newuser = new UserModel({
      email,
      password,
      name,
    });
    await newuser.save();
    return new NextResponse("Your account is registerd successfully", { status: 201 });
  } catch (error) {
    // res.status(500).json({ message: "ISE" });
    return new NextResponse("Internal server error", { status: 500 });
  }
};
