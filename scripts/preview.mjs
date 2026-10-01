import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { resolve, extname, sep } from 'node:path';

const root = resolve('dist');
const types = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.xml': 'application/xml', '.txt': 'text/plain', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4' };
http.createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url, 'http://localhost').pathname);
    const file = resolve(root, '.' + (pathname === '/' ? '/index.html' : pathname));
    if (!file.startsWith(root + sep)) { response.writeHead(400).end(); return; }
    let data; let served = file;
    try { data = await readFile(served); }
    catch { served = `${file}.html`; data = await readFile(served); }
    response.writeHead(200, { 'Content-Type': types[extname(served)] || 'application/octet-stream' }).end(data);
  } catch {
    response.writeHead(404, { 'Content-Type': 'text/html' }).end(await readFile(resolve(root, '404.html')));
  }
}).listen(4173, '127.0.0.1', () => console.log('Static preview: http://127.0.0.1:4173'));
