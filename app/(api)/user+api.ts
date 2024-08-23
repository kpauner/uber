import { neon } from "@neondatabase/serverless";

export async function POST(request: Request) {
  const sql = neon(`${process.env.DATABASE_URL}`);
  const { name, email, clerkId } = await request.json();
  if (!name || !email || !clerkId) {
    return Response.json(
      { message: "Missing required fields" },
      { status: 400 },
    );
  }

  try {
    const response = await sql`
    INSERT INTO users (name, email, clerk_id)
    VALUES (${name}, ${email}, ${clerkId})
  `;

    return new Response(JSON.stringify(response), { status: 200 });
  } catch (error) {
    console.log(error);
    return Response.json({ message: "Internal server error" }, { status: 500 });
  }
}

// See https://neon.tech/docs/serverless/serverless-driver
// for more information
