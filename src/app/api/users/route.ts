// import dbConnect from "@/lib/utils/mongodb";
// import UserModel from "@/lib/models/user.model";
// import { NextApiRequest, NextApiResponse } from "next";
// import getErrorMessage from "@/lib/errorHandler";

// export const POST = async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req.method);
//   await dbConnect();
//   try {
//     console.log(req);
//   } catch (error: any) {
//     const err = getErrorMessage(error.name);
//     res.status(err.code).json({ message: err.message });
//   }
// };

// export const PUT = async (req: NextApiRequest, res: NextApiResponse) => {
//   console.log(req.method);
//   try {
//     console.log(req);
//     res.status(200).json({ message: "OK PUT" });
//   } catch (error: any) {
//     const err = getErrorMessage(error.name);
//     res.status(err.code).json({ message: err.message });
//   }
// };
