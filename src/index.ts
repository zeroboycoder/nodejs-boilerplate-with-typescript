import { createServer } from 'http'
import app from './app';
import { info } from './util/logger';

(async () => {
  try {
    const server = createServer(app);
    const PORT = process.env.PORT || 8000;
    server.listen(PORT, () => {
      info(`Server running on port ${PORT}`);
    })
  } catch (error) {
    console.log("error => ", error)
    info(error)
  }
})()