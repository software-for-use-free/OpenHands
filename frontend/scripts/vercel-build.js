// This script is used during Vercel deployment to set up environment variables
const fs = require('fs');
const path = require('path');

// Create a .env file with the correct backend URL based on Vercel environment variables
const generateEnvFile = () => {
  // VERCEL_URL is automatically provided by Vercel during deployment
  const backendUrl = process.env.VERCEL_URL || 'localhost:3000';
  const useTls = process.env.VERCEL_ENV !== 'development';
  
  const envContent = `VITE_BACKEND_HOST=${backendUrl}
VITE_USE_TLS=${useTls}
VITE_INSECURE_SKIP_VERIFY=false
`;

  fs.writeFileSync(path.join(__dirname, '../.env'), envContent);
  console.log(`Created .env file with backend URL: ${backendUrl}`);
};

// Execute the function
generateEnvFile();