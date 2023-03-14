import app from './app';

const url = process.env.SERVER_URL;
const port = process.env.SERVER_PORT;
app.listen(port, () => {
  console.log(`listening at ${url}:${port}`);
});
