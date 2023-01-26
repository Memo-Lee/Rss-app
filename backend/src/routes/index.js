import { Router } from 'express';
import Parser from 'rss-parser'
import Apkrss from '../models/apkrss';

// routes
import apkrss from './apkrss';

const router = Router();

router.get('/', (req, res) => {
    res.send("hello");
});

router.use('/apkrss', apkrss);

export default router;
