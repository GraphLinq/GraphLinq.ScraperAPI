// Read the secret from .env
const secret = process.env.JWT_SECRET;

// Check .env secret
if (!secret) {
  throw new Error("The secret must be defined in your .env!");
}

// export our secret
export const config = {
  algorithms: ["HS256" as const],
  secret,
};
