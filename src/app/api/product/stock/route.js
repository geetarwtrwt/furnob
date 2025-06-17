import { connectDb } from "../../../../../lib/config/db";
import { productModel } from "../../../../../lib/model/ProductModel";
let { NextResponse } = require("next/server");

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let PUT = async (request) => {
  try {
    let { id, inStock } = await request.json();
    await productModel.findByIdAndUpdate(id, { inStock });

    return NextResponse.json({ success: true, msg: "stock updated" });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
