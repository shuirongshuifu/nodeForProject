// 两种方式，拿到脚本执行传递进来的参数


/**
 * 获取脚本参数方式一：process.argv.at(-1)
 * */
console.log('process.argv是数组--->', process.argv);
console.log('第一项是Node.js进程所在的绝对路径--->', process.argv[0]);
console.log('第二项是脚本文件所在的绝对路径--->', process.argv[1]);
console.log('第三项脚本执行附带的参数--->', process.argv[2]);

/**
 * 获取脚本参数方式二：process.env.npm_lifecycle_script截取
 * */
let fullScriptStatement = process.env.npm_lifecycle_script
let params = fullScriptStatement.split(' ').at(-1)
console.log('通过截取也可以拿到哦', params);


