import prisma from "@/libs/prisma";

export async function POST(request) {
  const { anime_mal_id, user_email, anime_title, anime_image } =
    await request.json();
  const data = { anime_mal_id, user_email, anime_title, anime_image };

  const createFavorite = await prisma.favorites.create({ data });

  if (!createFavorite) return Response.json({ status: 500, isCreated: false });
  else return Response.json({ status: 200, isCreated: true });
}
