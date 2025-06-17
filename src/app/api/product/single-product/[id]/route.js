import { connectDb } from "../../../../../../lib/config/db";
import { productModel } from "../../../../../../lib/model/ProductModel";
let { NextResponse } = require("next/server");

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let GET = async (request, { params }) => {
  try {
    let { id } = params;
    let data = await productModel.findById(id);
    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
