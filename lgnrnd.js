const { request } = require('undici');

(async () => {
  var res = await request('https://www.facebook.com/login.php/', {
    method: 'GET',
    headers: {
      host: 'www.facebook.com',
      connection: 'keep-alive',
      'sec-ch-ua': '"Not(A:Brand";v="99", "Google Chrome";v="133", "Chromium";v="133"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"macOS"',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/133.0.0.0 Safari/537.36',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.7',
      'sec-fetch-site': 'cross-site',
      'sec-fetch-mode': 'navigate',
      'sec-fetch-user': '?1',
      'sec-fetch-dest': 'document',
      referer: 'https://www.google.com/',
      // 'accept-encoding': 'gzip, deflate, br, zstd',
      'accept-encoding': 'utf-8', // change response to utf-8, no compression so we can analyze
      'accept-language': 'en-US,en;q=0.9'
    }
  })

  var lgnrnd = /name="lgnrnd" value="(.*?)" /.exec(await res.body.text())[1]; // simple regex to parse lgnrnd from the initial request HTML response

  console.log({
    lgnrnd
  })
})();