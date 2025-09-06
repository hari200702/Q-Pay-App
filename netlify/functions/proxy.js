
import axios from 'axios';
import https from 'https';

const TOKEN = process.env.TOKEN || 'YOUR_TOKEN_HERE';

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export const handler = async (event) => {
  try {
 
    let apiPath = '';
    

    if (event.path.startsWith('/proxy/')) {
      apiPath = event.path.substring(6);
    } 
    else if (event.path.includes('/.netlify/functions/proxy')) {
      apiPath = event.path.split('/.netlify/functions/proxy')[1] || '';
    }
    
    const queryString = event.rawQuery ? `?${event.rawQuery}` : '';
    const apiUrl = `http://64.227.189.27${apiPath}${queryString}`;
    
    console.log('🔹 Function invoked!', {
      eventPath: event.path,
      apiPath: apiPath,
      queryString: queryString,
      fullUrl: apiUrl
    });

    const response = await axiosInstance.get(apiUrl, {
      headers: {
        'Authorization': `Bearer ${TOKEN}`,
        'Accept': '*/*',
        'User-Agent': 'PostmanRuntime/7.45.0',
      },
      timeout: 10000,
    });

    console.log('Response status:', response.status);
    
    return {
      statusCode: 200,
      body: JSON.stringify(response.data),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  } catch (error) {
    console.error('Proxy error:', error.message);
    if (error.response) {
      console.error('Error response:', error.response.data);
      console.error('Error status:', error.response.status);
    }
    
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message,
        details: error.response?.data,
        status: error.response?.status,
      }),
      headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    };
  }
};