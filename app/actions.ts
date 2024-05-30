"use server"

import { redirect } from "next/navigation";
import prisma from "./lib/db"
import { supabase } from "./lib/supabase";
import { Owner, Status } from "@prisma/client";


export async function listProperty({ userId }: { userId: string }) {
    const data = await prisma.home.findFirst({
      where: {
        userId: userId,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    if (data === null) {
      const data = await prisma.home.create({
        data: {
          userId: userId,
        },
      });
  
      return redirect(`/create/${data.id}/structure`);
    }

    else if(!data.addedCategory && !data.addedDescription && !data.addedLocation) {
        return redirect(`/create/${data.id}/structure`);
    }
    else if(data.addedCategory && !data.addedDescription){
        return redirect(`/create/${data.id}/description`);
    }
    else if (
        data.addedCategory &&
        data.addedDescription &&
        data.addedLocation
      ) {
        const data = await prisma.home.create({
          data: {
            userId: userId,
          },
        });
    
        return redirect(`/create/${data.id}/structure`);
      }
    }

export async function createCategoryPage(formData: FormData) {
    const categoryName = formData.get("categoryName") as string;    
    const homeId = formData.get("homeId") as string;
    const data = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        categoryName: categoryName,
        addedCategory: true,
      },
    });
  
    return redirect(`/create/${homeId}/description`);
  }

  export async function createDescriptionPage(formData: FormData) {
    const homeId = formData.get("homeId") as string;
    const title = formData.get("title") as string;
    const location = formData.get("location") as string;
    const description = formData.get("description") as string;
    const price = formData.get("price");
    const imageFile = formData.get("image") as File;
    const floorPlan = formData.get("Floor") as string;
    const floorNo = formData.get("PFloor") as string;
    const beds = formData.get("beds") as string;
    const baths = formData.get("bath") as string;
    const owner = formData.get("owner") as string;
    const status = formData.get("status") as string;
    const barea = formData.get("barea") as string;
    const carea = formData.get("carea") as string;
  
    const ownerEnum = Object.values(Owner).includes(owner as Owner) ? owner as Owner : null;
    const statusEnum = Object.values(Status).includes(status as Status) ? status as Status : null;
  
    const { data: imageData } = await supabase.storage.from("images").upload(
      `${imageFile.name}-${new Date()}`,
      imageFile,
      {
        cacheControl: "2592000",
        contentType: imageFile.type,
      }
    );
  
    const data: any = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        title: title,
        description: description,
        location: location,
        price: Number(price),
        photo: imageData?.path,
        totalFloors: Number(floorPlan),
        propertyOnFloor: Number(floorNo),
        beds: Number(beds),
        baths: Number(baths),
        owner: ownerEnum,
        status: statusEnum,
        barea: Number(barea),
        carea: Number(carea),
        addedDescription: true,
        addedLocation: true,
      },
    });
  
    return redirect('/');
  }