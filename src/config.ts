// Read the secret from .env
const secret = process.env.JWT_SECRET || "secret";

// export our secret
export const config = {
  algorithms: ["HS256" as const],
  secret,
};
