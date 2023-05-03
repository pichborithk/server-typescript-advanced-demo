import { NextFunction, Request, Response, Router } from 'express';

const router = Router();

function requireAuth(req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }

  res.status(403).send('Not permitted');
  // res.send('Not permitted');
}

router.get('/', requireAuth, (req: Request, res: Response) => {
  res.send('Welcome to protected route, logged in user');
});

export { router };
