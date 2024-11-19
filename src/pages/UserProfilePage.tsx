import UserProfileForm from '@/forms/user-profile-form/UserProfileForm.tsx';
import { useGetMyUser, useUpdateMyUser } from '@/api/MyUserApi.tsx';

export default function UserProfilePage() {
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();

  if (isGetLoading) {
    return <div>Loading...</div>;
  }

  if (!currentUser) {
    return <span>Unable to load user profile</span>;
  }

  return (
    <UserProfileForm
      onSave={updateUser}
      isLoading={isUpdateLoading}
      currentUser={currentUser}
    />
  );
}
