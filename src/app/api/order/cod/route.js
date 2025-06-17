import { orderModel } from "../../../../../lib/model/order";
let productModel = require("../../../../../lib/model/ProductModel");
import { verifyToken } from "../../../../../lib/helper/user";
import { connectDb } from "../../../../../lib/config/db";
import { NextResponse } from "next/server";

let loadDb = async () => {
  await connectDb();
};
loadDb();

export let POST = async (request) => {
  try {
    let { id } = await verifyToken(request);
    let { items, address } = await request.json();

    if (!address || items.length === 0) {
      return NextResponse.json({ error: true, msg: "Invalid data" });
    }

    let amount = await items.reduce(async (acc, e) => {
      let product = await productModel.findById(e.product);
      return (await acc) + product.offerPrice * e.quantity;
    });

    amount += Math.floor(amount * 0.02);

    let data = await orderModel.create({
      id,
      items,
      address,
      amount,
      paymentType: "COD",
    });

    return NextResponse.json({ success: true, msg: data });
  } catch (err) {
    return NextResponse.json({ error: true, msg: err.message });
  }
};
