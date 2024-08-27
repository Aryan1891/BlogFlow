import { EmptyState } from "@/app/components/dashboard/EmptyState";
import prisma from "@/app/utils/db";
import { Button } from "@/components/ui/button";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { Book, PlusCircle, Settings } from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";

async function  getData(userId: string, siteId:string){
    const data = await prisma.post.findMany({
        where: {
            userId: userId,
            siteId: siteId,
        },
        select:{
            image:true,
            title:true,
            createdAt:true,
            id:true,
        },
        orderBy: {
            createdAt: "desc",
        },
    });

    return data;
}   
export default async function SiteRoute({params}:{params:{siteId:string}}){

    const {getUser} = getKindeServerSession();
    const user = await getUser();
    if(!user){
        return redirect("/api/auth/login");
    }
    const data = await getData(user.id, params.siteId);
    return (
        <>
            <div className="flex w-full justify-end gap-x-4">
                <Button asChild variant="secondary" className="hover:bg-gray-200 transform hover:scale-110 transition duration-200">
                    <Link href="#">
                        <Book className="mr-2 size-4"/>
                        View Blog
                    </Link>
                </Button>
                <Button asChild variant="secondary" className="hover:bg-gray-200 transform hover:scale-110 transition duration-200">
                    <Link href="#">
                        <Settings className="mr-2 size-4" />
                        Settings
                    </Link>
                </Button>
                <Button asChild className="transform hover:scale-110 transition duration-200">
                    <Link href="#">
                        <PlusCircle className="mr-2 size-4" />
                        Create Article
                    </Link>
                </Button>
            </div>
            {data === undefined || data.length === 0?(
                <EmptyState
          title="You dont have any Sites created"
          description="Please create some so that you can
        see them right here!"
          buttonText="Create Site"
          href="/dashboard/sites/new"
        />            
    ):(

            <h1>world</h1>

        )}
        </>
    )
}