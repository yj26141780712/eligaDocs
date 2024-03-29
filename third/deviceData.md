# 获取设备数据

获取设备数据（只返回运动员的数据）

#### 接口调用请求说明

>http请求方式：GET https://ilive.eliga.cn/eliga/api/third/deviceData?deviceSn=T232-0001&stime=2023-07-01 00:00:00&etime=2023-07-02 00:00:00

#### 请求头

| 参数  | 说明                                    |
|------|-----------------------------------------|
| token |    接口凭证                   |

#### 参数说明

| 参数 | 必选  | 说明                                    |
|------|------|-----------------------------------------|
| deviceSn | ture  | 设备序列号                      |
| stime | true  | 起始时间    |
| etime | true  | 截止时间     |

注意：目前三方凭证不开放申请，如有需要请联系开发人员获取

#### 返回说明

正常情况下，返回如下()：
```json
{
    "code":"200",
    "message":"ok",
    "data":[
        {
           "id": 2,
           "userId":2,
           "userName":"运动员1号",
           "deviceType":"2",
           "deviceSn":"T232-001",
           "deviceName":"多功能训练器", 
           "modeName":"恒力等张",
           "actionName":"深蹲",
           "stime":"2022-01-01 00:00:00", 
           "etime":"2022-01-01 00:00:00",
           "dataType":0,
           "data":{
             //不同设备返回data数据不同,
           }   
        }
    ]
}
```
设备data: [设备训练数据结构](/third/deviceDataJson.html),[设备测试数据结构](/third/deviceTestDataJson.html)

#### 参数说明

| 返回字段 | 说明                             |
|---------|----------------------------------|
| code    | 返回结果状态。200：正常；其他：错误。|
| message | 错误说明                        |
| data    | 返回数据                        |
| userId      | 运动员id                       |
| userName    | 运动员名称                      |
| deviceType    | 设备类型代码                  |
| deviceSn    | 设备编号                      |
| deviceName    | 设备名称                      |
| stime   | 训练起始时间                        |
| etime   | 训练结束时间                        |
| dataType   | 数据类型 0 训练数据 1 测试数据                        |
| data   | 设备数据                        |

