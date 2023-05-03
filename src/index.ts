import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';

import { router as loginRouter } from './routes/login';
import { router as logoutRouter } from './routes/logout';
import { router as protectedRouter } from './routes/protected';

const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['tokenForLogin'] }));

app.get('/', (req: Request, res: Response) => {
  if (req.session && req.session.loggedIn) {
    res.send(`
      <div>
        <h1>You are logged in</h1>
        <a href="/logout">Logout</a>
      </div>
    `);
  } else {
    res.send(`
    <div>
      <h1>You are not log in</h1>
      <a href="/login">Login</a>
    </div>
  `);
  }
});

app.use('/login', loginRouter);
app.use('/logout', logoutRouter);
app.use('/protected', protectedRouter);

app.listen(3000, () => {
  console.log('Server up on port 3000');
});
