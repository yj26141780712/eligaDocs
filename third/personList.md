# 人员信息列表
获取pamfa人员信息列表

### 接口调用请求说明
>http请求方式：Get https://ilive.eliga.cn/eliga/api/third/pamfaUserList

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
           "userId":2,
           "thirdUserId":"",
           "name":"",
           "idNumber":"",
           "roleName": "运动员",
           "teamName": "足球队"
        }
    ]
}
```

### 参数说明

| 返回字段 | 说明                             |
|---------|----------------------------------|
| code   | 返回结果状态。200：正常；其他：错误。 |
| userId | pamfa系统用户唯一标识 |
| thirdUserId  | 第三方用户唯一标识        |
| name  | 姓名    |
| idNumber  | 身份证号    |
| roleName | 角色名称   |
| teamName | 队伍名称   |