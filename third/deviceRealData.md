# 获取设备实时数据

### websocket连接说明

>Websocket请求方式： wss://ilive.eliga.cn/eliga/api/third/deviceRealTimeData?token=接口凭证

### 数据推送

```json
{
    "thirdUserId":"",
    "name":"",
    "deviceSn":"",
    "data":{ //设备实时数据
      
    }
}
```
设备data: [设备训练数据结构](/third/deviceDataJson.html),[设备测试数据结构](/third/deviceTestDataJson.html)




