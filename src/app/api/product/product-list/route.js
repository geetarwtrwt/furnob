import { connectDb } from "../../../../../lib/config/db";
import { productModel } from "../../../../../lib/model/ProductModel";
let { NextResponse } = require("next/server");

let loadDb = async () => {
  await connectDb();
};
loadDb();

export async function GET(request) {
  try {
    let data = await productModel.find({});
    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
}
