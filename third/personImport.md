# 人员信息导入
第三方系统用户系统导入pamfa用户系统

### 接口调用请求说明
>http请求方式：POST https://ilive.eliga.cn/eliga/api/third/pamfaUserImport

### 请求头

| 参数  | 说明                                    |
|------|-----------------------------------------|
| token |    接口凭证                   |

### 请求体
```json
{
   "thirdUserId": "123456",
   "name": "张三",
   "idNumber": "123456",
   "roleName": "运动员",
   "teamName": "足球队"
}
```
### 参数说明

| 参数 | 必选  | 说明                                    |
|------|------|-----------------------------------------|
| thirdUserId | true  | 第三方用户唯一标识，如果thirdUserId已存在更新数据，反之创建              |
| name | true  | 姓名    |
| idNumber | false  | 身份证号    |
| roleName | true  | 角色名称 (运动员、领队、主教练、医疗团队、体能教练)   |
| teamName | false | 队伍名称   |



### 返回说明
正常情况下，返回如下：
```json
{
    "code":"200",
    "message":"ok"
}
```

### 参数说明

| 返回字段 | 说明                             |
|---------|----------------------------------|
| code   | 返回结果状态。200：正常；其他：错误。 |