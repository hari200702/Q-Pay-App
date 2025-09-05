const express = require('express');
const cors = require('cors');
const axios = require('axios');
const https = require('https');
require('dotenv').config();

const app = express();
const PORT = process.env.PROXY_PORT || 3001;

const TOKEN = process.env.TOKEN || 'YOUR_TOKEN_HERE';


const axiosInstance = axios.create({
  httpsAgent: new https.Agent({  
    rejectUnauthorized: false
  })
});


app.use(cors());
app.use(express.json());

// Proxy endpoint
app.get('/proxy/*', async (req, res) => {
  try {
    const apiPath = req.path.replace('/proxy', '');
    const queryString = req.url.includes('?') ? req.url.substring(req.url.indexOf('?')) : '';
    const apiUrl = `http://64.227.189.27${apiPath}${queryString}`;
    
    
    
    const response = await axiosInstance.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': '*/*',
        'User-Agent': 'PostmanRuntime/7.45.0'
      },
      timeout: 10000
    });
    
    console.log('Response status:', response.status);
    res.json(response.data);
  } catch (error) {
    console.error('Proxy error:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
    }
    res.status(error.response?.status || 500).json({ 
      error: error.message,
      details: error.response?.data,
      status: error.response?.status
    });
  }
});

app.listen(PORT, () => {
  console.log(`Proxy server running on http://localhost:${PORT}`);
  console.log('SSL verification disabled (like Postman)');
  console.log('Ready to proxy requests to http://64.227.189.27');
});