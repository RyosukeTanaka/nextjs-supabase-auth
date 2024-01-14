// In src/pages/_app.js
import React from 'react';
import AuthProvider from 'src/components/AuthProvider';

function MyApp({ Component, pageProps }) {
  // Assuming you retrieve accessToken somehow, maybe from pageProps or context
  const accessToken = "your_access_token"; // Replace with actual token retrieval logic

  return (
    <AuthProvider accessToken={accessToken}>
      <Component {...pageProps} />
    </AuthProvider>
  );
}

export default MyApp;
