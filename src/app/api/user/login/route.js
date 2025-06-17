  import { UserModel } from "../../../../../lib/model/user";
  import bcrypt from "bcryptjs";
  import { NextResponse } from "next/server";
  import { connectDb } from "../../../../../lib/config/db";
  import jwt from "jsonwebtoken";
  
  let loadDb = async () => {
    await connectDb();
  };
  loadDb();
  
  export async function POST(request) {
    try {
      await loadDb();
      let { email, password } = await request.json();
  
      let user = await UserModel.findOne({ email });
      if (!user) {
        return NextResponse.json(
          { error: true, msg: "User Not Found" },
          { status: 403 },
        );
      }
  
      let comparePassword = await bcrypt.compare(password, user.password);
      if (!comparePassword) {
        return NextResponse.json(
          { error: true, msg: "User Not Found" },
          { status: 403 },
        );
      }
  
      let token = jwt.sign({ id: user._id, isAdmin: user.isAdmin }, "token12", {
        expiresIn: "1d",
      });
  
      let response = NextResponse.json({
        success: true,
        msg: "Logged In Success",
        data: token,
      });
  
      response.cookies.set("token", token, { httpOnly: true });
  
      return response;
    } catch (err) {
      return NextResponse.json({
        success: false,
        msg: "somthing went wrong",
        error: err.message,
      });
    }
  }
  
  export async function GET(request) {
    try {
      let { userId } = request.body;
      let data = await UserModel.findById({ userId }).selectOne("-password");
      return NextResponse.json({ success: true, msg: data });
    } catch (err) {
      return NextResponse.json({ error: true, msg: err.message });
    }
  }
  