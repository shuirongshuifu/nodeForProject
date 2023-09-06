import fs from "fs"; // vite写法
import inquirer from "inquirer"; // vite写法

// const fs = require('fs') // webpack写法
// const inquirer = require('inquirer') // webpack写法

const scriptName = process.env.npm_lifecycle_event // dev build

console.log('process.env\n', process.env);

// 后端的服务选项
const choices = [
    {
        name: '张三',
        value: "\t\t\t\ttarget: 'http://33.33.33.33:3333',",
    },
    {
        name: '李四',
        value: "\t\t\t\ttarget: 'http://44.44.44.44:4444',",
    },
    {
        name: '王二',
        value: "\t\t\t\ttarget: 'http://22.22.22.22:2222',",
    },
    {
        name: '麻子',
        value: "\t\t\t\ttarget: 'http://55.55.55.55:5555',",
    },
]

// 在读取到的vue.config.js文件字符串中寻找target行的数据
function findProxyTarget(file) {
    let fileArr = file.split('\n') // 把文件字符串根据换行符转成数组
    let proxyTarget = '' // 请求转发代理那一行的数据容器
    for (let i = 0; i < fileArr.length; i++) { // 通过循环找到对应行
        if (fileArr[i].includes('target:')) {
            proxyTarget = fileArr[i] // 赋值一下，找到了
            break
        }
    }
    // 把找到的这一行数据吐出去
    return proxyTarget // target: 'http://33.33.33.33:3333',
}

async function selectServe() {
    try {
        const choose = await inquirer.prompt([
            {
                type: 'list',
                name: 'serve',
                message: '请选择开发环境下需要连接的后端服务',
                choices,
                default: choices[0].value
            }
        ])
        let file = fs.readFileSync('./vite.config.js', 'utf-8') // 读取vue.config.js文件
        let proxyTarget = findProxyTarget(file) // 找到proxy跨域代理请求转发target行的数据
        const newFile = file.replace(proxyTarget, choose.serve) // 换成我们新选的后端服务地址
        fs.writeFileSync('./vite.config.js', newFile) // 写入更新vite.config.js文件即可
    } catch (error) {
        console.log(`报错了--->: ${error}`)
    }
}
selectServe()