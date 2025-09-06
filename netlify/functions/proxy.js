import axios from "axios";
import https from "https";

const TOKEN = process.env.TOKEN || "YOUR_TOKEN_HERE";

const axiosInstance = axios.create({
  httpsAgent: new https.Agent({
    rejectUnauthorized: false,
  }),
});

export async function handler(event) {
  try {
    const apiPath = event.path.replace("/.netlify/functions/proxy", "");
    const queryString = event.rawQuery ? `?${event.rawQuery}` : "";
    const apiUrl = `http://64.227.189.27${apiPath}${queryString}`;

    const response = await axiosInstance.get(apiUrl, {
      headers: {
        Authorization: `Bearer ${TOKEN}`,
        Accept: "*/*",
        "User-Agent": "NetlifyProxy/1.0",
      },
      timeout: 10000,
    });

    return {
      statusCode: response.status,
      body: JSON.stringify(response.data),
      headers: {
        "Content-Type": "application/json",
      },
    };
  } catch (error) {
    return {
      statusCode: error.response?.status || 500,
      body: JSON.stringify({
        error: error.message,
        details: error.response?.data,
        status: error.response?.status,
      }),
    };
  }
}
