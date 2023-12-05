# 获取token

token是全局唯一接口调用凭据，调用各接口时都需使用token。开发者需要进行妥善保存。token的存储至少要保留512个字符空间。token的有效期目前为2个小时，需定时刷新，重复获取将导致上次获取的token失效。

### 接口调用请求说明

><span>http请求方式：GET ilive.eliga.cn/eliga/api/third/getToken?appid=APPID&secret=APPSECRET</span>


### 参数说明

| 参数 | 必选  | 说明                                    |
|------|------|-----------------------------------------|
| appid | ture  | 第三方用户唯一凭证                      |
| secret | true  | 第三方用户唯一凭证密钥，即appsecret     |

注意：目前三方凭证不开放申请，如有需要请联系开发人员获取

### 返回说明
正常情况下，返回如下：
```json
{
    "code":"200",
    "message":"ok",
    "data":{
        "token":"token",
        "expiresIn":7200
    }
}
```

### 参数说明

| 返回字段 | 说明                             |
|---------|----------------------------------|
| code   | 返回结果状态。200：正常；其他：错误。 |
| message| 错误说明                         |
| data   | 返回数据                           |
| token   | 获取到的凭证                           |
| expiresIn   | 凭证有效时间，单位：秒              |


