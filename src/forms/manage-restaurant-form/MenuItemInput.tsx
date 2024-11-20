import { useFormContext } from 'react-hook-form';
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form.tsx';
import { Input } from '@/components/ui/input.tsx';
import { Button } from '@/components/ui/button.tsx';

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className={'flex flex-col md:flex-row  gap-3 '}>
      <div className={'flex gap-2 w-full'}>
        <FormField
          control={control}
          name={`menuItems.${index}.name`}
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormLabel className={'flex items-center gap-1'}>
                Name <FormMessage />
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={'Cheese Pizza'}
                  className={'bg-white'}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`menuItems.${index}.price`}
          render={({ field }) => (
            <FormItem>
              <FormLabel className={'flex items-center gap-1'}>
                Price ($)
                <FormMessage />
              </FormLabel>
              <FormControl>
                <Input {...field} placeholder={'8.00'} className={'bg-white'} />
              </FormControl>
            </FormItem>
          )}
        />
      </div>
      <div className={'flex  items-end gap-2 w-full '}>
        <FormField
          control={control}
          name={`menuItems.${index}.description`}
          render={({ field }) => (
            <FormItem className={'flex-1'}>
              <FormLabel className={'flex items-center gap-1'}>
                Description
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  placeholder={'Personal style pan pizza'}
                  className={'bg-white lg:w-full'}
                />
              </FormControl>
            </FormItem>
          )}
        />
        <Button
          type={'button'}
          onClick={removeMenuItem}
          className={'bg-red-500 max-h-fit'}
        >
          Remove
        </Button>
      </div>
    </div>
  );
};

export default MenuItemInput;
