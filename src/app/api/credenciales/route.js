export async function GET() {
  try {
    const auth = {
      user: process.env.REACT_APP_SUBASTA_USER,
      pass: process.env.REACT_APP_SUBASTA_PASS,
    };

    return Response.json(auth, { status: 200 });
  } catch (error) {
    return Response.json({ error: "Internal Server Error" }, { status: 500 });
  }
}