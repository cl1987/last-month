const { Writable } = require('stream')

// console.log(Writable)
/*
const writer = new Writable()
writer.write('hello') //The _write() method is not implemented
*/

class CustomWriter extends Writable{
    _write(chunk, encoding, callback){
        console.log('chunk::',chunk.toString())
        console.log('encoding::',encoding)
        callback && callback()
    }
}

const writer = new CustomWriter()


writer.on('finish',()=>{
    console.log('write done....')
})

writer.write('hello','',()=>{
    console.log('after write hello')
})

writer.write('good')

writer.end('yes')