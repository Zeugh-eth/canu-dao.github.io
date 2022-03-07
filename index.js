const express =  require('express');
const app = express();
const PORT = 80;

app.use(express.static('public'));
app.get('/', (req,res) => {
  res.send("hello fren");
});

app.listen(PORT, () => console.log(`Server listening on port: ${PORT}`));