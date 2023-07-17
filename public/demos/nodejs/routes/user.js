const express = require("express");
const router = express.Router();
const { sendLoginInfo } = require("./ws");

// 扫码登录
router.get('/login', (req, res) => {
    // 1.验证身份 获取用户信息 
    const user = {
        "userId": 12, // 用户唯一标识
        "name":"运动员12", // 用户名称
        "avatar":"https://www.eliga.cn/head/12.png", // 头像
        "height": 170, // 身高
        "weight": 60, // 体重
        "sex": 1, // 性别 0 男  1 女
        "age":30 // 年龄
    }
    // 2.通过websocket推送给设备
    const sn = req.query.sn; // 设备编号
    if(sendLoginInfo(sn,user)) {
        res.json({
            code: 200, message: 'ok'});
    } else {
        res.json({
            code:500,
            message:'设备未连接服务器！'
        })
    }
    // 有异常返回 code: 500 message 错误信息
});

module.exports = router;