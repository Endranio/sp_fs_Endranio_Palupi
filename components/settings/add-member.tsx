"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ReactNode } from "react"
import { Textarea } from "../ui/textarea"

import Spinner from "../ui/spinner"
import { SelectScrollable } from "./select-member"
import { Controller } from "react-hook-form"
import UseMember from "./hooks/member-hook"

interface CreateProjectProps {
  trigger: ReactNode;
}

export function InviteMember({trigger}:CreateProjectProps) {
  
    const {control,handleSubmit,onSubmit,errors,closeRef,isPending} =UseMember()
  
  return (
    <Dialog>
        <DialogTrigger asChild>
          {trigger}
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
      <form className="flex flex-col gap-5" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Invite Team Member</DialogTitle>
            <DialogDescription>
             Search and invite a user to join this project.
            </DialogDescription>
          </DialogHeader>
          <Controller
            name="userId"
            control={control}
            render={({ field }) => <SelectScrollable field={field} />}
          />
          {errors.userId && (
            <p className="text-sm text-red-500">{errors.userId.message}</p>
          )}
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button disabled={isPending} type="submit">{isPending?<Spinner/>:"Invite"}</Button>
            <DialogClose asChild>
              <Button ref={closeRef} hidden />
            </DialogClose>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
  )
}
