export default async (request, context) => {
  return new Response(
    JSON.stringify({
      message: "Blogger publishing function is ready",
      status: "success"
    }),
    {
      headers: { "Content-Type": "application/json" }
    }
  );
};
