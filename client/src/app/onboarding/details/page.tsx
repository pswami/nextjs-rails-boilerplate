'use client';
import { useRouter } from 'next/navigation';
import { useFormContext } from 'react-hook-form';

import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { Input } from '@/components/ui/input';
import { useUser } from "@/services/users";
import { useOnboarding } from "@/services/onboarding";

export default function OnboardingPage() {
  const { register, getValues } = useFormContext();
  const router = useRouter();
  const { data: user, isLoading } = useUser();
  const onboarding = useOnboarding();

  const onBack = () => { router.push('/onboarding') };

  const onNext = (e) => {
    e.preventDefault();

    const data: any = getValues();

    onboarding.mutateAsync(data).then(() => {
      console.log('onboarding done', data);
    }).catch((error) => {
      console.log('onboarding error', error);
    });
  };

  return (
    <div className="flex flex-col items-center md:px-12 p-4 w-full h-full">
      <h1 className="text-4xl font-medium text-gray-900 dark:text-white py-8">Tell us about yourself</h1>

      <div className="flex  w-full flex-col">
        <div className="flex flex-col justify-center w-full">
          <div className="flex flex-col self-center gap-4 max-w-xs">
            <div>
              <Label className="mb-2 block" htmlFor="name">Your Name</Label>
              <Input id="name" type="text" required {...register('name')} />
            </div>

            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Accept terms and conditions
              </Label>
            </div>
          </div>

          <div className="flex justify-end pt-16 gap-2">
            <Button onClick={onBack}>Back</Button>
            <Button onClick={onNext}>Next</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
