import { Navigate, Route, Routes } from 'react-router-dom';
import Layout from '@/layouts/layout.tsx';
import HomePage from '@/pages/HomePage.tsx';
import AuthCallbackPage from '@/pages/AuthCallbackPage.tsx';
import UserProfilePage from '@/pages/UserProfilePage.tsx';
import ProtectedRoute from '@/auth/ProtectedRoute.tsx';
import ManageRestaurantPage from '@/pages/ManageRestaurantPage.tsx';

const AppRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout showHero={true}>
            <HomePage />
          </Layout>
        }
      />
      <Route path={'/auth-callback'} element={<AuthCallbackPage />} />
      <Route element={<ProtectedRoute />}>
        <Route
          path="/user-profile"
          element={
            <Layout>
              <UserProfilePage />
            </Layout>
          }
        />

        <Route
          path="/manage-restaurant"
          element={
            <Layout>
              <ManageRestaurantPage />
            </Layout>
          }
        />
      </Route>
      <Route path="*" element={<Navigate to={'/'} />} />
    </Routes>
  );
};

export default AppRoutes;
