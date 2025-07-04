"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ReactNode } from "react";
import { Textarea } from "../ui/textarea";

import Spinner from "../ui/spinner";
import UseAddTask from "./hooks/task-hooks";
import { Controller } from "react-hook-form";

import { SelectScrollable } from "./select-member";

interface CreateProjectProps {
  trigger: ReactNode;
}

export function CreateTask({ trigger }: CreateProjectProps) {
  const {
    closeRef,
    errors,
    isPending,
    register,
    control,
    handleSubmit,
    onSubmit,
  } = UseAddTask();

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Create New Task</DialogTitle>
            <DialogDescription>
              Add a new task to the project board
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 mt-3">
            <div className="grid gap-3">
              <Label htmlFor="title-1">Title</Label>
              <Input id="title-1" {...register("title")} />
              <p className="text-red-500 text-sm">{errors.title?.message}</p>
            </div>
            <div className="grid gap-3">
              <Label htmlFor="description">Description</Label>
              <Textarea id="description" {...register("description")} />
              <p className="text-red-500 text-sm">
                {errors.description?.message}
              </p>
            </div>

            <Controller
              name="assignedId"
              control={control}
              render={({ field }) => <SelectScrollable field={field} />}
            />
          </div>
          <DialogFooter className="mt-3">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={isPending} type="submit">
              {isPending ? <Spinner /> : "Create"}
            </Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
