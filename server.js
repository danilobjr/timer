const { createServer } = require('http');
const { parse } = require('url');
const { join } = require('path');
const next = require('next');

const port = parseInt(process.env.PORT, 10) || 3000;
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    // Be sure to pass `true` as the second argument to `url.parse`.
    // This tells it to parse the query portion of the URL.
    const parsedUrl = parse(req.url, true);
    const { pathname, query } = parsedUrl;

    if (req.url.endsWith('/service-worker.js')) {
      const filePath = join(__dirname, '.next', pathname);
      app.serveStatic(req, res, filePath);
    } else if (req.url.startsWith('/static/')) {
      app.serveStatic(req, res, `./${req.url}`);
    } else if (pathname === '/') {
      app.render(req, res, '/countdowns', query);
    } else {
      handle(req, res, parsedUrl);
    }
  }).listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});

// TODO: try use this instead of above
// TODO: when navigate to /, rewrite url to /timer
// TODO: if above item not work, try to redirect from index.tsx to timer.tsx using next/route
// const express = require('express')
// const next = require('next')

// const dev = process.env.NODE_ENV !== 'production'
// const app = next({ dev })
// const handle = app.getRequestHandler()

// app.prepare()
// .then(() => {
//   const server = express()

//   server.get('/p/:id', (req, res) => {
//     const actualPage = '/post'
//     const queryParams = { title: req.params.id }
//     app.render(req, res, actualPage, queryParams)
//   })

//   server.get('*', (req, res) => {
//     return handle(req, res)
//   })

//   server.listen(3000, (err) => {
//     if (err) throw err
//     console.log('> Ready on http://localhost:3000')
//   })
// })
// .catch((ex) => {
//   console.error(ex.stack)
//   process.exit(1)
// })
