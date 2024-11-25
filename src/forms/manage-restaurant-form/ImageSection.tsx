import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';

export default function ImageSection() {
  const { control } = useFormContext();
  return (
    <div className={'space-y-4'}>
      <div>
        <h2 className={'text-2xl font-bold'}>Image</h2>
        <FormDescription>
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will replace the existing image.
        </FormDescription>
      </div>

      <div className={'flex flex-col gap-8 w-[50%]'}>
        <FormField
          control={control}
          name={'imageFile'}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  className={'bg-white cursor-pointer'}
                  type={'file'}
                  accept={'.jpg, .jpeg, .png'}
                  onChange={(e) =>
                    field.onChange(e.target.files ? e.target.files[0] : null)
                  }
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
