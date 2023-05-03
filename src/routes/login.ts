import { Request, Response, Router } from 'express';

const router = Router();

interface RequestWithBody extends Request {
  body: { [key: string]: string | undefined };
}

router.get('/', (req: Request, res: Response) => {
  res.send(`
      <form method="POST">
        <div>
          <label>Email</label>
          <input name="email"/>
        </div>
        <div>
          <label>Password</label>
          <input name="password" type="password"/>
        </div>
        <button>Submit</button>
      </form>
  `);
});

router.post('/', (req: RequestWithBody, res: Response) => {
  const { email, password } = req.body;

  if (email && password && email === 'abc' && password === '123') {
    req.session = { loggedIn: true };
    res.redirect('/');
  } else {
    res.send('Invalid email or password');
  }
});

export { router };
