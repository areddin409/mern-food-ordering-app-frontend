import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Form } from '@/components/ui/form.tsx';
import DetailsSection from '@/forms/manage-restaurant-form/DetailsSection.tsx';
import { Separator } from '@/components/ui/separator.tsx';
import CuisinesSection from '@/forms/manage-restaurant-form/CuisinesSection.tsx';
import MenuSection from '@/forms/manage-restaurant-form/MenuSection.tsx';
import ImageSection from '@/forms/manage-restaurant-form/ImageSection.tsx';
import LoadingButton from '@/components/LoadingButton.tsx';
import { Button } from '@/components/ui/button.tsx';

const formSchema = z.object({
  restaurantName: z.string({
    required_error: 'Restaurant name is required',
  }),
  addressLine1: z.string({
    required_error: 'Address is required',
  }),
  city: z.string({
    required_error: 'City is required',
  }),
  state: z.string({
    required_error: 'State is required',
  }),
  zip: z.string({
    required_error: 'Zip is required',
  }),
  deliveryPrice: z.coerce.number({
    required_error: 'Delivery price is required',
    invalid_type_error: 'Delivery price must be a number',
  }),
  estimatedDeliveryTime: z.coerce.number({
    required_error: 'Estimated delivery time is required',
    invalid_type_error: 'Estimated delivery time must be a number',
  }),
  cuisines: z.array(z.string()).nonempty({
    message: 'Please select at least one cuisine',
  }),
  menuItems: z.array(
    z.object({
      name: z.string().min(1, 'Name is required'),
      price: z.coerce.number().min(1, 'Price is required'),
      description: z.string().optional(),
    })
  ),
  imageUrl: z.string().optional(),
  imageFile: z.instanceof(File, { message: 'Image is required' }),
});

type RestaurantFormData = z.infer<typeof formSchema>;

type Props = {
  onSave: (restaurantFormData: RestaurantFormData) => void;
  isLoading: boolean;
};

const ManageRestaurantForm = ({ onSave, isLoading }: Props) => {
  const form = useForm<RestaurantFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      cuisines: [],
      menuItems: [
        {
          name: '',
          price: 0,
          description: '',
        },
      ],
    },
  });

  const onSubmit = (formDataJson: RestaurantFormData) => {
    // TODO - convert formDataJson to new FormData object
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={'space-y-8 bg-gray-50 p-10 rounded-lg'}
      >
        <DetailsSection />
        <Separator />
        <CuisinesSection />
        <Separator />
        <MenuSection />
        <Separator />
        <ImageSection />

        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button type={'submit'}>Submit</Button>
        )}
      </form>
    </Form>
  );
};

export default ManageRestaurantForm;
