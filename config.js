/* 
  IoT CTF System Configuration
  This file contains various system configurations
  Not related to validation logic
*/

const CONFIG = {
  theme: 'dark',
  version: '1.0.0',
  debug: false,
  endpoints: [
    'api/validate',
    'api/submit',
    'api/check'
  ],
  timeout: 5000,
  retries: 3
};

// System initialization
function initSystem() {
  console.log('System initialized with config:', CONFIG);
}

// Fake API calls
function callAPI(endpoint, data) {
  console.log(`Calling ${endpoint} with data:`, data);
  return Promise.resolve({ success: false, message: 'API not available' });
}

// Export configuration
window.CONFIG = CONFIG;
window.initSystem = initSystem;
