const http = require('http');
const https = require('https');

async function isImageUrl(url) {
  try {
    const response = await fetchUrl(url);
    if (!response.headers['content-type']) {
      return false;
    }
    const contentType = response.headers['content-type'].toLowerCase();
    return contentType.startsWith('image/');
  } catch (error) {
    return false;
  }
}

function fetchUrl(url) {
  return new Promise((resolve, reject) => {
    const client = url.startsWith('https') ? https : http;
    client.get(url, (response) => {
      resolve(response);
    }).on('error', (error) => {
      reject(error);
    });
  });
}

module.exports = isImageUrl;