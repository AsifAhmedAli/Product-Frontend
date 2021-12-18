import '../styles/globals.css'
import '../styles/dashboard.css'
import Meta from '../layout/Meta';
import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'font-awesome/css/font-awesome.min.css';

function MyApp({ Component, pageProps }) {
  return (
    <React.StrictMode>
      <Meta
        title="Mexil Product"
        description="Next Product Project with Tailwind-css"
      />
      <Component {...pageProps} />
    </React.StrictMode>
  )
}

export default MyApp
