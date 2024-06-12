"use server"

import { redirect } from "next/navigation";
import prisma from "./lib/db"
import { Owner, Status } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY)

export async function contactMail(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string;

    
  
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "cherrymx317@gmail.com",
      subject: `Message from contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}\n\nPhone Number: ${phone}`,
    });

    redirect("/contactsubmit");
}

export async function buyprop(formData: FormData) {
    const name = formData.get("name") as string;
    const email = formData.get("email") as string;
    const subject = formData.get("subject") as string;
    const phone = formData.get("phone") as string
    const message = formData.get("message") as string;
    const homeId = formData.get("homeId") as string;    
  
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "cherrymx317@gmail.com",
      subject: `Message from contact: ${subject}`,
      text: `Sender Name: ${name}\nEmail: ${email}\n\nMessage: ${message}\n\nPhone Number: ${phone} \n\nHomeId: ${homeId}`,
    });

    redirect("/contactsubmit");
}


export async function listProperty({ userId }: { userId: string }) {
    const data = await prisma.home.findFirst({
      where: {
        userId: userId,
        approval: true,
      },
      orderBy: {
        createdAt: "desc",
      },
    });
  
    if (data === null) {
      const data = await prisma.home.create({
        data: {
          userId: userId,
          approval: false,
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
            approval: false,
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
    const images = JSON.parse(formData.get("images") as string);
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

  
    const data: any = await prisma.home.update({
      where: {
        id: homeId,
      },
      data: {
        title: title,
        description: description,
        location: location,
        totalFloors: Number(floorPlan),
        propertyOnFloor: Number(floorNo),
        beds: Number(beds),
        baths: Number(baths),
        owner: ownerEnum,
        images: images,
        status: statusEnum,
        barea: Number(barea),
        carea: Number(carea),
        addedDescription: true,
        addedLocation: true,
        approval: false,
      },
    });
  
    return redirect('/propsubmit');
  }

  export async function addToBookmark(formData : FormData){
    const homeId = formData.get("homeId") as string;
    const userId = formData.get("userId") as string;
    const pathName = formData.get("pathName") as string;
  
    const data = await prisma.bookmark.create({
      data: {
        homeId: homeId,
        userId: userId,
      },
    });
    revalidatePath(pathName);
  }

  export async function deleteBookmark(formData : FormData){
    const BookmarkId = formData.get("BookmarkId") as string;
    const userId = formData.get("userId") as string;
    const pathName = formData.get("pathName") as string;

    const data = await prisma.bookmark.delete({
        where: {
            id: BookmarkId,
            userId: userId,
        },
    });

    revalidatePath(pathName);
  }