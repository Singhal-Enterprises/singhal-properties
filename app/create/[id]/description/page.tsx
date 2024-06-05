"use client";

import React, { useState } from 'react';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardHeader } from '@/components/ui/card';
import { Counter } from '@/components/Conter';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { CreationBottomBar } from '@/components/CreationBottomBar';
import { createDescriptionPage } from '../../../actions';
import { UploadDropzone } from '../../../lib/uploadthing';
import { toast } from 'sonner';

function DescriptionPage( { params } : { params: { id: string } }) {
  const [owner, setOwner] = useState("");
  const [status, setStatus] = useState("");
  const [images, setImages] = useState<string[]>([]);


  return (
    <>
      <div className="w-full sm:w-3/5 mx-auto px-4 sm:px-0">
        <h2 className="text-3xl font-semibold tracking-tight transition-colors">
          Describe your property in detail
        </h2>
      </div>

      <form action={createDescriptionPage}>
        <input type="hidden" name="homeId" value={params.id} />
        <div className="mx-auto w-full sm:w-3/5 mt-10 flex flex-col gap-y-5 mb-36 px-4 sm:px-0">
          <div className="flex flex-col gap-y-2">
            <Label>Title</Label>
            <Input
              name="title"
              type="text"
              required
              placeholder="Short and simple..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Location</Label>
            <Input
              name="location"
              type="text"
              placeholder="Location of your property..."
            />
          </div>
          <div className="flex flex-col gap-y-2">
            <Label>Description</Label>
            <Textarea
              name="description"
              placeholder="Please describe your home..."
            />
          </div>

          <div className="flex flex-col gap-y-2">
            <input type="hidden" name="images" value={JSON.stringify(images)} />
            <Label>Upload Images</Label>
            <UploadDropzone endpoint='imageUploader'
             onClientUploadComplete={(res) => {
              setImages(res.map((item) => item.url));
              toast.success('Images uploaded successfully');
             }}
             onUploadError={(error: Error) => {
              toast.error('Error uploading images');
             }}
            />
          </div>
          
          <Card>
            <CardHeader className="flex flex-col gap-y-5">
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Total Floors</h3>
                  <p className="text-muted-foreground text-sm">
                    How many floors do you have?
                  </p>
                </div>
                <Counter name="Floor" />
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Property on Floor</h3>
                  <p className="text-muted-foreground text-sm">
                    On what floor number is your property?
                  </p>
                </div>
                <Counter name="PFloor" />
              </div>

              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Beds</h3>
                  <p className="text-muted-foreground text-sm">
                    How many bedrooms do you have?
                  </p>
                </div>
                <Counter name="beds" />
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Bathrooms</h3>
                  <p className="text-muted-foreground text-sm">
                    How many bathrooms do you have?
                  </p>
                </div>
                <Counter name="bath" />
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Owner</h3>
                  <p className="text-muted-foreground text-sm">
                    Select the owner type
                  </p>
                </div>
                <Select name='owner' onValueChange={(value) => setOwner(value)}>
                  <SelectTrigger name='owner' className="w-[180px]">
                    <SelectValue placeholder="Select Owner"  />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="AGENT">Agent</SelectItem>
                    <SelectItem value="INDIVIDUAL">Individual</SelectItem>
                    <SelectItem value="BUILDER">Builder</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Property Status</h3>
                  <p className="text-muted-foreground text-sm">
                    Select the status of the property
                  </p>
                </div>
                <Select name='status' onValueChange={(value) => setStatus(value)}>
                  <SelectTrigger name='status' className="w-[180px]">
                    <SelectValue placeholder="Select Status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="UNDER_CONSTRUCTION">Under Construction</SelectItem>
                    <SelectItem value="READY_TO_MOVE">Ready to Move</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Built up Area</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter the built area in sq. ft.
                  </p>
                </div>
                <Input
                  type="number"
                  name="barea"
                  className="border px-3 py-2 w-full sm:w-[180px] rounded-2xl"
                  placeholder="Built area in sq. ft."
                />
              </div>
              <div className="flex flex-col gap-y-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-col">
                  <h3 className="underline font-medium">Carpet Area</h3>
                  <p className="text-muted-foreground text-sm">
                    Enter the carpet area in sq. ft.
                  </p>
                </div>
                <Input
                  type="number"
                  name="carea"
                  className="border px-3 py-2 w-full sm:w-[180px] rounded-2xl"
                  placeholder="Carpet area in sq. ft."
                />
              </div>
            </CardHeader>
          </Card>
        </div>

        <CreationBottomBar />
      </form>
    </>
  );
}

export default DescriptionPage;
