import { useFormContext } from 'react-hook-form';
import {
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form.tsx';
import CuisineCheckbox from '@/forms/manage-restaurant-form/CuisineCheckbox.tsx';

import { cuisineList } from '@/config/restaurant-options-config.ts';

export default function CuisinesSection() {
  const { control } = useFormContext();
  return (
    <div className={'space-y-2'}>
      <div>
        <h2 className={'text-2xl font-bold'}>Cuisines</h2>
        <FormDescription>
          Select the cuisines your restaurant serves
        </FormDescription>
      </div>
      <FormField
        control={control}
        name={'cuisines'}
        render={({ field }) => (
          <FormItem>
            <div className={'grid md:grid-cols-5 sm:grid-cols-2 gap-1'}>
              {cuisineList.map((cuisineItem) => (
                <CuisineCheckbox
                  key={cuisineItem}
                  cuisine={cuisineItem}
                  field={field}
                />
              ))}
            </div>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
