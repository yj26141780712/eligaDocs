const express = require("express");
const expressWs = require("express-ws");
const app = express();
const data = require("./routes/data");
const { ws } = require("./routes/ws");
const user = require("./routes/user");
let bodyParser = require("body-parser");

app.use(bodyParser.json({ limit: "40mb" }));
app.use(bodyParser.urlencoded({ limit: "40mb", extended: true }));

app.all("*", (req, res, next) => {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Content-Type,Content-Length, Authorization, Accept,X-Requested-With,token,If-Modified-Since,lang"
    );
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", " 3.2.1");
    if (req.method == "OPTIONS") {
        res.sendStatus(200);
    } else {
        if (req.headers.lang && req.headers.lang !== req.getLocale()) {
            req.setLocale(req.headers.lang);
        }
        next();
    }
});

app.use("/eliga/api/data", data);
app.use("/eliga/api/user", user);
app.use("/eliga/ws", ws);

expressWs(app);

app.listen(3010, () => {
    console.log('服务启动成功！')
});

