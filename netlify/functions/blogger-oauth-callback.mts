export default async (request, context) => {
  return new Response(
    "Blogger OAuth callback endpoint is ready.",
    { status: 200 }
  );
};
