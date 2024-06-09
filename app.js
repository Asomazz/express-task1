const app = express();
const products = require("./data");

app.use(express.json());

app.get("/api/products", (req, res) => {
  return res.json(products);
});

app.listen(8000, () => {});
