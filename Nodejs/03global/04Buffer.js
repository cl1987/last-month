//Buffer是用来存放二进制数据的容器(类似于数组)
const buf1 = Buffer.from('a')
const buf2 = Buffer.from('1')
const buf3 = Buffer.from('z')
console.log(buf1)
console.log(buf2)
console.log(buf3)
//一个英文字符的大小是1B(这是固定的，)
//一个汉字的大小是3B(这也是固定的)


//1B又相当于两个十六位进制数