'use strict';
const client = 
module.exports = function(server) {
  // Install a `/` route that returns server status
  var router = server.loopback.Router();
  router.get('/', server.loopback.status());
  server.use(router);
  
  router.get('/email', (req, res) => {
      
  });

  router.get('/user/create', (req, res) => {

  });
  
};