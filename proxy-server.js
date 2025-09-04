const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PROXY_PORT || 3001;
const TOKEN = process.env.TOKEN;

// Validate token
if (!TOKEN) {
  console.error('ERROR: No token found in .env file!');
  process.exit(1);
}

// Create axios instance with SSL verification disabled
const axiosInstance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});

// Enable CORS
app.use(cors());
app.use(express.json());

// Proxy endpoint
app.get('/proxy/*', async (req, res) => {
  try {
    const apiPath = req.path.replace('/proxy', '');
    const queryString = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    const apiUrl = `http://64.227.189.27${apiPath}${queryString}`;
    
    const response = await axiosInstance({
      method: req.method,
      url: apiUrl,
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': '*/*',
        'User-Agent': 'PostmanRuntime/7.45.0'
      }
    });
    
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    res.status(error.response?.status || 500).json({ 
      error: error.message,
      details: error.response?.data
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
});