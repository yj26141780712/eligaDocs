# 人员信息列表
获取pamfa设备列表

### 接口调用请求说明
>http请求方式：Get https://ilive.eliga.cn/eliga/api/third/pamfaDeviceList

### 请求头

| 参数  | 说明                                    |
|------|-----------------------------------------|
| token |    接口凭证                   |

### 返回说明
正常情况下，返回如下：
```json
{
    "code":"200",
    "message":"ok",
    "obj":[
        {
           "deviceSn": "T232-0002",
           "deviceName": "T232-0002",
           "modelType":"",
           "modelTypeName":""
        }
    ]
}
```

### 参数说明

| 返回字段 | 说明                             |
|---------|----------------------------------|
| code   | 返回结果状态。200：正常；其他：错误。 |
| deviceSn | 设备序号列 |
| deviceName | 设备名称  |
| modelType | 机型 |
| modelTypeName | 机型名称 |