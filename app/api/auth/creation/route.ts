import prisma from "@/app/utils/db";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const { getUser } = getKindeServerSession();
    const user = await getUser();

    
    if (!user || !user.id) {
      throw new Error("Something went wrong with the user session in creation.");
    }

    
    const dbUser = await prisma.user.upsert({
      where: {
        id: user.id,
      },
      update: {}, 
      create: {
        id: user.id,
        firstName: user.given_name ?? "",
        lastName: user.family_name ?? "",
        email: user.email ?? "",
        profileImage: user.picture ?? `https://avatar.vercel.sh/${user.given_name}`,
      },
    });

    return NextResponse.redirect("http://localhost:3000/dashboard");
  } catch (error) {
    console.error(error);
    return new NextResponse("An error occurred during user creation.", { status: 500 });
  }
}
