import { z } from 'zod';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import LoadingButton from '@/components/LoadingButton.tsx';
import { Button } from '@/components/ui/button.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { STATES } from '@/lib/constants.ts';
import { User } from '@/types.ts';

const formSchema = z.object({
  email: z.string().email('Invalid email address').optional(),
  name: z
    .string()
    .min(1, 'Name is required')
    .max(100, 'Name must be at most 100 characters'),
  addressLine1: z
    .string()
    .min(1, 'Address Line 1 is required')
    .max(400, 'Address Line 1 must be at most 400 characters'),
  city: z
    .string()
    .min(1, 'City is required')
    .max(100, 'City must be at most 100 characters'),
  state: z.string().min(2, 'State is required'),
  zip: z
    .string()
    .min(5, 'Please enter a valid 5-digit zip code')
    .max(10, 'Zip code cannot be longer than 10 characters')
    .regex(
      /^\d{5}(-\d{4})?$/,
      'Please enter a valid zip code (12345 or 12345-6789)'
    ),
});

type UserFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  currentUser: User;
};

const UserProfileForm = ({ onSave, isLoading, currentUser }: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className={'space-y-4 bg-gray-50 rounded-lg md:p-10'}
      >
        <div className="">
          <h2 className={'text-2xl font-bold'}>User Profile Form</h2>
          <FormDescription>
            View and change your profile information here
          </FormDescription>
        </div>

        <FormField
          control={form.control}
          name={'email'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input {...field} disabled className={'bg-white'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'name'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input {...field} className={'bg-white'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name={'addressLine1'}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Address</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className={'bg-white'}
                  placeholder={'123 Main St'}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className={'flex flex-col md:flex-row gap-4'}>
          <FormField
            control={form.control}
            name={'city'}
            render={({ field }) => (
              <FormItem className={'flex-1'}>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={'bg-white'}
                    placeholder={'New York'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={'state'}
            render={({ field }) => (
              <FormItem className={'flex-1'}>
                <FormLabel>State</FormLabel>
                <Select
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder={'Select a state'} />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent className={'bg-white'}>
                    {STATES.map((state) => (
                      <SelectItem key={state} value={state}>
                        {state}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name={'zip'}
            render={({ field }) => (
              <FormItem className={'flex-1'}>
                <FormLabel>Zip</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className={'bg-white'}
                    placeholder={'12345'}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type={'submit'} className={'bg-orange-500'}>
            Submit
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;
