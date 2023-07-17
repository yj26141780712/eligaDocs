const express = require("express");
const router = express.Router();
const expressWs = require('express-ws');
const clients = [];

function sendLoginInfo(sn, user) {
    const index = clients.findIndex(x => x.sn === sn);
    if (index > -1) {
        const client = clients[index];
        client.ws.send(JSON.stringify({
            "event": "login:ok",
            "data": user
        }))
        client.login = true;
        return true;
    } else {
        return false
    }
}

expressWs(router);

// 设备ws
router.ws('/device', (ws, req) => {
    const sn = req.query.sn;
    const index = clients.findIndex(x => x.sn === sn);
    if (index > -1) { //设备如果已建立ws连接就先关闭原来的连接
        const client = clients[index];
        client.ws.close();
        clients.splice(index, 1);
    }
    clients.push({ sn, ws });
    ws.on('message', (msg) => {
        console.log(msg);
    });
    ws.on('close', () => {
        console.log('close');
    })
    ws.on('error', (err) => {
        console.log('error')
    });
});


module.exports = {
    sendLoginInfo,
    ws: router
};