'use client';
import Image from "next/image";
import { useForm, Form } from 'react-hook-form';

import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { CardContent, Card, CardHeader } from "@/components/ui/card";
import { useToast } from "@/components/ui/use-toast";
import { useUser, useUpdateUser } from '@/services/users';

export default function Settings() {
  const { data: user, isLoading } = useUser();
  const generalInfoForm = useForm();
  const updateUser = useUpdateUser();
  const { toast } = useToast();

  const onSubmitGeneralInfo = (data: any) => {
    updateUser.mutateAsync({ id: user!.id, payload: data }).then(() => {
      toast({
        title: 'Profile updated',
        description: 'Your profile has been updated successfully',
      })
    }).catch(() => {
      toast({
        title: 'Error',
        description: 'An error occurred while updating your profile',
        variant: 'destructive',
      })
    });
  };

  return (
    <div>
      <div className="px-4 space-y-6 sm:px-6">
        <header className="space-y-2">
          <div className="flex items-center space-x-3">
            <Image
              alt="Avatar"
              className="rounded-full"
              height="96"
              src="https://flowbite-admin-dashboard.vercel.app/images/users/bonnie-green-2x.png"
              style={{ aspectRatio: "96/96", objectFit: "cover" }}
              width="96"
            />
            <div className="space-y-1">
              <h1 className="text-2xl font-bold">{user?.name}</h1>
              <Button size="sm">Change photo</Button>
            </div>
          </div>
        </header>
        <div className="space-y-8">
          {/* General Info Form */}
          <Card>
            <CardContent className="space-y-6">
              <div className="pt-4 space-y-2">
                <Label htmlFor="name">Name</Label>
                <Input {...generalInfoForm.register('name', { value: user?.name })} />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input {...generalInfoForm.register('email', { value: user?.email })} />
              </div>
              <div className="space-y-2">
                <Label>Biography</Label>
                <Textarea
                  className="mt-1"
                  id="bio"
                  placeholder="Enter your bio"
                  style={{
                    minHeight: "100px",
                  }}
                />
              </div>
            </CardContent>
          </Card>

          {/* Security Form */}
          <Card>
            <CardHeader>
              <div>Change Password</div>
              <div>For your security, please do not share your password with others.</div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input id="current-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input id="new-password" type="password" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input id="confirm-password" type="password" />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="pt-6">
          <Button onClick={generalInfoForm.handleSubmit(onSubmitGeneralInfo)}>Save Changes</Button>
        </div>
      </div>
    </div>
  );
}
