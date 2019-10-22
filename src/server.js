const express = require('express');
const path = require('path');

const itemsRouter = require('./routers/items');
const basketRouter = require('./routers/basket');
const discountsRouter = require('./routers/discounts');

require('./db/mongoose');

const app = express();
const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, '../public');

app.use(express.json());
app.use(itemsRouter);
app.use(basketRouter);
app.use(discountsRouter);
app.use(express.static(publicDirectoryPath));

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
