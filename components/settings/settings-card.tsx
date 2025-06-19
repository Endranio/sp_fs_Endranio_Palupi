"use client";

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import Spinner from "../ui/spinner";
import { Textarea } from "../ui/textarea";
import UseEditProject from "./hooks/setting-card-hook";

export default function SettingsCard() {
  const { errors, handleSubmit, isPending, onSubmit, register } =
    UseEditProject();

  return (
    <div className="border rounded-xl p-4">
      <p className="font-bold text-2xl">Project Detail</p>
      <p>Update your project information</p>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <div className="grid gap-3 mt-3">
            <Label htmlFor="name-1">Name</Label>
            <Input id="name-1" {...register("name")} />
            <p className="text-red-500 text-sm">{errors.name?.message}</p>
          </div>
          <div className="grid gap-3">
            <Label htmlFor="desc-1">Description</Label>
            <Textarea id="desc-1" {...register("description")} />
            <p className="text-red-500 text-sm">
              {errors.description?.message}
            </p>
          </div>
        </div>
        <Button disabled={isPending} type="submit" className="mt-3">
          {isPending ? <Spinner /> : "Save Changes"}
        </Button>
      </form>
    </div>
  );
}
