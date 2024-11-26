
   const express = require('express');
   const axios = require('axios');
   const bodyParser = require('body-parser');
   const cors = require('cors');

   const app = express();
   const port = 3000;

   app.use(cors());
   app.use(bodyParser.json());

   app.post('/download', async (req, res) => {
       const { url } = req.body;

       try {
           const response = await axios.post('https://ssstik.io/abc?url=dl', { url });
           res.json(response.data);
       } catch (error) {
           res.status(500).json({ error: 'Error fetching video' });
       }
   });

   app.listen(port, () => {
       console.log(`Server running at http://localhost:${port}`);
   });
   
