import jwt from "jsonwebtoken";
import config from "../config";
import { Iuser } from "../interfaces/user";

const signJWT = (
  user: Iuser,
  callback: (error: Error | null, token: string | null) => void
): void => {
  const { email, password } = user;
  console.log(`Attempting to sign token for ${email}`);

  try {
    jwt.sign(
      { email },
      config.server.token.secret,
      {
        issuer: config.server.token.issuer,
        algorithm: "HS256",
        expiresIn: "1d",
      },
      (error: any, token) => {
        if (error) {
          {
            callback(error, null);
          }
        } else if (token) {
          {
            callback(null, token);
          }
        }
      }
    );
  } catch (error: any) {
    console.error(error.message, error);
    callback(error, null);
  }
};

export default signJWT;
