import { app, PORT_SERVER } from './app.js';
import { connectDB } from './db.js';

connectDB();

app.listen(PORT_SERVER);
console.log('-----------------------\n Server on port:', PORT_SERVER,'\n http://localhost:' + PORT_SERVER, '\n-----------------------');
