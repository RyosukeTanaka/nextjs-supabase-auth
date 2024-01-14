// In src/pages/_app.js
import React from 'react';
import AuthProvider from 'src/components/AuthProvider';
import Layout from 'src/components/Layout';
import 'src/styles/globals.css'; // Assuming you have a global stylesheet

function MyApp({ Component, pageProps }) {
  // Assuming you retrieve accessToken somehow, maybe from pageProps or context
  const accessToken = "your_access_token"; // Replace with actual token retrieval logic

  return (
    <AuthProvider accessToken={accessToken}>
        <Layout>

      <Component {...pageProps} />
      </Layout>

    </AuthProvider>
  );
}

export default MyApp;
