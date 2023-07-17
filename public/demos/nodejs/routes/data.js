const express = require("express");
const router = express.Router();

// 上传数据
router.get('/uploadReport', (req, res) => {
    const data = req.body; // 上传的数据
    // 数据处理逻辑按业务自己写
    res.json({ code: 200, message: 'ok' });
    // 有异常返回 code: 500 message 错误信息
});

module.exports = router;