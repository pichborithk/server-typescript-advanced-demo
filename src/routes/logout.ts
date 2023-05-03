import { Request, Response, Router } from 'express';

const router = Router();

router.get('/', (req: Request, res: Response) => {
  req.session = undefined;
  res.redirect('/');
});

export { router };
