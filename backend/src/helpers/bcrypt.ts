import bcrypt from "bcrypt";

const saltRounds = process.env.SALT_ROUNDS || 10;

export async function hash(val: string): Promise<string> {
  return bcrypt.hash(val, saltRounds).then((hash) => hash);
}
