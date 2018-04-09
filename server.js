/**
 * This file hijacks Next.js' built in routing to inject
 * some custom routing so that we can do some server-side work
 * with express.js when we want, but still use Next's /pages/
 * with all it's nice built in functionality.
 *
 * A good amount of code scooped from medium post:
 * https://medium.com/@diamondgfx/nextjs-lessons-learned-part-2-f1781237cf5c
 *
 * @type {*|createApplication}
 */

const addresses = require('./controllers/addressesController');
const config = require('./config');
const express = require('express');
const next = require('next');
const fileUpload = require('express-fileupload');
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();
const mongoose = require('mongoose');



app.prepare().then(() => {
  mongoose.connect(config.dbConnect);
  const server = express();
  server.use(fileUpload());
  server.use('/addresses/', addresses);

  server.get('*', (req, res) => {
    return handle(req, res);
  });

  const port = process.env.PORT || 3000;

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on port ${port}...`);
  });
});

