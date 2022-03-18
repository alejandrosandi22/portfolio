const { Router } = require('express');
const router = Router();

const fetch = require('node-fetch');


fetch("https://pastebin.com/raw/2ZMVCcn7")
.then((res) => res.json()).then((data) => {
  
  router.get('/', (req, res) => {
    res.json(data);
  })

})


module.exports = router;