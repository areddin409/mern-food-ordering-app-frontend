import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select.tsx';
import { STATES } from '@/lib/constants.ts';

export default function DetailsSection() {
  const { control } = useFormContext();
  return (
    <div className={'space-y-2'}>
      <div>
        <h2 className={'text-2xl font-bold'}>Details</h2>
        <FormDescription>
          Enter the details about your restaurant
        </FormDescription>
      </div>

      <FormField
        control={control}
        name={'restaurantName'}
        render={({ field }) => (
          <FormItem>
            <FormLabel>Restaurant Name</FormLabel>
            <FormControl>
              <Input {...field} className={'bg-white'} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
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

      <div className={'flex gap-4'}>
        <FormField
          control={control}
          name={'city'}
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormLabel>City</FormLabel>
              <FormControl>
                <Input {...field} className={'bg-white'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name={'state'}
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormLabel>State</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
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
          control={control}
          name={'zip'}
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormLabel>Zip</FormLabel>
              <FormControl>
                <Input {...field} className={'bg-white'} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>

      <FormField
        control={control}
        name={'deliveryPrice'}
        render={({ field }) => (
          <FormItem className={'max-w-[25%]'}>
            <FormLabel>Delivery Price ($)</FormLabel>
            <FormControl>
              <Input {...field} className={'bg-white'} placeholder={'9.99'} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <FormField
        control={control}
        name={'estimatedDeliveryTime'}
        render={({ field }) => (
          <FormItem className={'max-w-[25%]'}>
            <FormLabel>Estimated Delivery Time (minutes)</FormLabel>
            <FormControl>
              <Input {...field} className={'bg-white'} placeholder={'30'} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
