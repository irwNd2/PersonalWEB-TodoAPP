import dbConnect from "@/lib/utils/mongodb";
import UserModel from "@/lib/models/user.model";
import { NextApiRequest, NextApiResponse } from "next";
import getErrorMessage from "@/lib/errorHandler";

type CreateUserBody = {
  email: string;
  password: string;
  name: string;
};

export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
  await dbConnect();
  try {
    console.log(req.body);
    const { email, password, name } = req.body as CreateUserBody;
    new UserModel({
      email,
      password,
      name,
    });
    res.status(201).json({ message: "You are registered successfully" });
  } catch (error) {
    res.status(500).json({ message: "ISE" });
  }
};
