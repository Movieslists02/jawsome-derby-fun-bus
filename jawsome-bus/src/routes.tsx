import { RouteObject } from 'react-router-dom';
import { lazy } from 'react';
import HomePage from './pages/index';



const NotFoundPage = () => <h1>404 - Page Not Found</h1>;


const BookPage = lazy(() => import('./pages/book'));
const BookingSuccessPage = lazy(() => import('./pages/booking-success'));
const EventsPage = lazy(() => import('./pages/events'));
const MerchPage = lazy(() => import('./pages/merch'));
const AboutPage = lazy(() => import('./pages/about'));
const ContactPage = lazy(() => import('./pages/contact'));
const TermsPage = lazy(() => import('./pages/terms'));
const PrivacyPage = lazy(() => import('./pages/privacy'));
const CartPage = lazy(() => import('./pages/cart'));
const CheckoutPage = lazy(() => import('./pages/checkout'));
const AccountPage = lazy(() => import('./pages/account'));
const DerbyPage = lazy(() => import('./pages/derby'));
const CheckoutSuccessPage = lazy(() => import('./pages/checkout-success'));
const AdminEventsPage = lazy(() => import('./pages/admin-events'));
const AdminOrdersPage = lazy(() => import('./pages/admin-orders'));
const AdminBookingsPage = lazy(() => import('./pages/admin-bookings'));
const AdminCustomersPage = lazy(() => import('./pages/admin-customers'));
const AdminSettingsPage = lazy(() => import('./pages/admin-settings'));



export const routes: RouteObject[] = [
  { index: true, element: <HomePage /> },
  { path: 'book', element: <BookPage /> },
  { path: 'booking-success', element: <BookingSuccessPage /> },
  { path: 'events', element: <EventsPage /> },
  { path: 'merch', element: <MerchPage /> },
  { path: 'about', element: <AboutPage /> },
  { path: 'contact', element: <ContactPage /> },
  { path: '*', element: <NotFoundPage /> },
  { path: 'terms', element: <TermsPage /> },
{ path: 'privacy', element: <PrivacyPage /> },
{ path: 'cart', element: <CartPage /> },
{ path: 'checkout', element: <CheckoutPage /> },
{ path: 'account', element: <AccountPage /> },
{ path: '/derby', element: <DerbyPage /> },
{ path: '/checkout-success', element: <CheckoutSuccessPage /> },
{ path: 'admin/events', element: <AdminEventsPage /> },
{ path: 'admin/orders', element: <AdminOrdersPage /> },
{ path: 'admin/bookings', element: <AdminBookingsPage /> },
{ path: 'admin/customers', element: <AdminCustomersPage /> },
{ path: 'admin/settings', element: <AdminSettingsPage /> },
];


export type Path = '/' | '/book' | '/booking-success' | '/events' | '/merch' | '/about' | '/contact';
export type Params = Record<string, string | undefined>;
