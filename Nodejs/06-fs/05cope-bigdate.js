const fs = require('fs');

const ws = fs.createWriteStream('./copy-05.jpg');

const rs = fs.createReadStream('./05.jpg');


rs.pipe(ws);