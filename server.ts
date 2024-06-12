import express from 'express';
import cors from 'cors';
import path from 'path';
import { env } from 'node:process';

const app = express();

app.use(cors());

const parentPath = env.PARENT_PATH || env.PWD || process.cwd();

const mockFolderPath = path.join(parentPath, '/mocks/');

app.use(express.static(mockFolderPath));

app.listen(3000, () => {
  console.log('Mock server is running on port 3000');
});
