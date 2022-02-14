import { Strategy as LocalStrategy } from "passport-local";
import bcrypt from "bcrypt";
import User from "../models/user";
import { PassportStatic } from "passport";

export default (passport: PassportStatic) => {
  passport.use(
    new LocalStrategy(
      { usernameField: "displayName" },
      async (displayName: string, password: string, done: any) => {
        const user = await User.findOne({ displayName });
        if (!user) {
          return done(null, false, {
            message: "No user with that display name.",
          });
        } else {
          try {
            if (await bcrypt.compare(password, user.password)) {
              return done(null, user);
            } else {
              return "Password incorrect.";
            }
          } catch (error: any) {
            return done(error);
          }
        }
      }
    )
  );

  passport.serializeUser((user, done) => done(null, user));

  passport.deserializeUser((id, done) => User.findById(id, done));
};
