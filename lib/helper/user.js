import jwt from "jsonwebtoken";

export async function verifyToken(request) {
  try {
    let token = request.cookies.get("token")?.value || "";
    let checkToken = jwt.verify(token, "token12");
    return checkToken; //qki ye middleware h
  } catch (err) {
    throw new Error("Token invalid or expired");
  }
}
