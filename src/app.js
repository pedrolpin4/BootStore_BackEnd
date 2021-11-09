import express from 'express';
import cors from 'cors';
import { getCategories, getSales, getTrends } from './controllers/filters.js';
import { getMainCategories, getProductsByCategory } from './controllers/homePosts.js';

const app = express();
app.use(express.json());
app.use(cors());

app.get('/health', (req, res) => {
  res.sendStatus(200);
});

app.get('/categories', (req, res) => getCategories(req, res));
app.get('/trends', (req, res) => getTrends(req, res));
app.get('/sales', (req, res) => getSales(req, res));
app.get('/main-categories', (req, res) => getMainCategories(req, res));
app.get('/products-category/:id', (req, res) => getProductsByCategory(req, res));

export default app;
