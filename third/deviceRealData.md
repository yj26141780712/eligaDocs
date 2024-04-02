# 获取设备实时数据

### websocket连接说明

>Websocket请求方式： wss://ilive.eliga.cn/ws/third/deviceRealTimeData?token=接口凭证

### 数据推送

```json
{
    "userId": 2020, // pamfa系统用户唯一标识
    "deviceSn":"T232-0001", // 设备编号
    "data":{ //设备实时数据
      
    }
}
```
设备data: [设备数据说明](/third/deviceDataJson.html)




