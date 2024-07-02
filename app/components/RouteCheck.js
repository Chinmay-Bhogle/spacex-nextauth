// pages/_app.js
import { useEffect } from 'react';
import {useNavigation } from 'next/navigation';

export default function RouteGuard({ children }) {
  const router = useNavigation();

  useEffect(() => {
    const authCheck = (url) => {
      const publicPaths = ['/account/login'];
      const path = url;
      const userDetails = localStorage.getItem('user');

      if (!userDetails && !publicPaths.includes(path)) {
        router.push({
          pathname: '/account/login',
          query: { returnUrl: router.asPath }
        });
      }
    };

    const handleRouteChangeStart = (url) => {
      console.log('Route change started to:', url);
      // Optionally, you can add loading or hiding logic here
    };

    const handleRouteChangeComplete = (url) => {
      console.log('Route change completed to:', url);
      authCheck(url);
    };

    if (router) {
      router.events.on('routeChangeStart', handleRouteChangeStart);
      router.events.on('routeChangeComplete', handleRouteChangeComplete);

      // Initial check on first load
      authCheck(router.asPath);
    }

    return () => {
      if (router) {
        router.events.off('routeChangeStart', handleRouteChangeStart);
        router.events.off('routeChangeComplete', handleRouteChangeComplete);
      }
    };
  }, [router]);

  return <>{children}</>;
}