import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css';

import {Auth0Provider} from '@auth0/auth0-react';

// const domain = import.meta.env.AUTH0_DOMAIN;
// const clientID = import.meta.env.AUTH0_CLIENT_ID;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}

      authorizationParams={{
        redirect_uri: 'https://fanciful-mermaid-c9a912.netlify.app',
      }}
    >
      <App />
    </Auth0Provider>
      
  </React.StrictMode>,
)
