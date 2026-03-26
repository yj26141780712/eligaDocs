# 第三方系统与设备直连

第三方系统与设备直连说明。

## 登录
- 使用HTTP POST协议进行登录
```
http://url/third/api/device
```

有三种登录方式：人脸登录、手环登录和账号密码登录。

### 人脸登录
- 客户端发送人脸图片给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "face",
        "image": "base64格式",
        "deviceSn": "T152-001", //设备唯一识别码SN
		"deviceType": 15 //同一设备类型码，如T152-001和T152-002都属于T152设备
    }
}
```

登录成功返回的数据结构如下：
```json
{
    "event": "login:ok",
    "data": {
        "userId": 12, // 用户唯一标识
        "name": "运动员12", // 用户名称
        "avatar": "https://www.eliga.cn/head/12.png", // 头像
        "height": 170, // 身高
        "weight": 60, // 体重
        "sex": 1, // 性别 0 男  1 女
        "age": 30, // 年龄
        "setting": {} //设备类型码对应的设备相关参数，具体参数由客户端自行管理, 若无数据则为空
    }
}
```
登录失败返回的数据结构如下：
```json
{
    "event": "login:fail",
    "data": {
        "errCode": 10000,
        "errMsg": "用户不存在"
    }
}
```

### 手环登录
- 客户端发送手环NFC ID给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "card",
        "nfcId": "12345678",
        "deviceSn": "T152-001", //设备唯一识别码SN
		"deviceType": 15 //同一设备类型码，如T152-001和T152-002都属于T152设备
    }
}
```

登录返回同人脸登录

### 账号密码登录
- 客户端发送账号密码给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "account",
        "account": "12345678",
        "password": "12345678",
        "deviceSn": "T152-001", //设备唯一识别码SN
		"deviceType": 15 //同一设备类型码，如T152-001和T152-002都属于T152设备
    }
}
```

登录返回同人脸登录

## 登出
- 客户端发送登出消息给服务器，格式如下：
```json
{
    "event": "logout",
    "data": {
        "userId": 10
    }
}
```

登出成功返回的数据结构如下：
```json
{
    "event": "logout:ok",
    "data": {
        "userId": 10
    }
}
```
登出失败返回的数据结构如下：
```json
{
    "event": "logout:fail",
    "data": {
        "errCode": 10001,
        "errMsg": "用户未登录"
    }
}
```

## 设备参数发送
- 客户端发送设备相关参数给服务器，格式如下：
```json
{
    "event": "deviceParam",
    "data": {
        "userId": 10,
        "deviceType": 25,
        "setting": {
            "conStartPos": 200, //向心起点
            "eccStartPos": 700, //离心起点
        }
    }
}
```

发送成功返回的数据结构如下：
```json
{
    "event": "deviceParam:ok",
    "data": {}
}
```
发送失败返回的数据结构如下：
```json
{
    "event": "deviceParam:fail",
    "data": {
        "errCode": 10002,
        "errMsg": "保存参数失败"
    }
}
```

## 训练数据发送

- 使用HTTP POST协议进行数据传输
```
http://url/third/api/data/uploadTrain
```

- 客户端发送训练数据给服务器，格式如下：
```json
{
    "deviceSn": "T152-001", //设备编号
    "userId": 10, //用户ID

    "data": {
        "dataType": 0, //0训练1测试
        "modeName": "等张模式", //训练模式
        "modeId": 2, //训练模式ID
        "target": 15, //训练目标次数
        "perform": 10, //训练次数
        "startTime": "2021-08-23 08:43:00",//开始训练时间
        "endTime": "2021-08-23 08:44:00",//训练结束时间

        "data": [] //训练数据
    }
}
```
训练数据结构详见[设备训练数据结构](/third/deviceDataJson.md)

## 测试数据发送

- 使用HTTP POST协议进行数据传输
```
http://url/third/api/data/uploadTest
```

- 客户端发送测试数据给服务器，格式如下：
```json
{
    "deviceSn": "T152-001", //设备编号
    "userId": 10, //用户ID

    "data": {
        "dataType": 1, //0训练1测试
        "modeName": "末端释放", //训练模式
        "modeId": 6, //训练模式ID
        "actId": 615, //动作Id
        "actName" : "坐姿推胸功率测试", //动作名称
        "startTime": "2021-08-23 08:43:00",//开始训练时间
        "endTime": "2021-08-23 08:44:00",//训练结束时间
        "powerSet" : ["32.0","40.0","48.0","56.0","64.0","72.0"], //阻力设定
        "powerReal" : ["32.0","40.0","48.0","-1.0","-1.0","-1.0"], //阻力实际
        "testData": [[474.8],[538.2,502.9],[260.8,784.2,712.2],[],[],[]], //测试数据-功率
        "testSpeedData": [[1.513],[1.372,1.282],[0.554,1.666,1.513],[],[],[]], //测试数据-速度
        "powerCurve" : [0,0,1,1,2,2,3,3,...], //功率曲线
        "powerScatterCurve" : [32,474.8,40,538.2,48,260.8], //功率曲线散点
        "speedCurve" : [0,3.545259843027186,59.11410505826003,0], //速度曲线
        "speedScatterCurve" : [32,1.513,40,1.372,48,0.554], //速度曲线散点
        "maxPower" : "538.2", //最大功率
        "maxPowerLoad" : "40.0", //最大功率负荷
        "bestPower" : "513.8", //最佳功率
        "bestPowerLoad" : "29.6", //最佳功率负荷
        "bestPowerSetLoad" : "29.6", //最佳功率训练负荷
        "tipValue": 0, //提示值 0无提示 1设定负荷总重量过大 2设定负荷总重量过小 3测试结果存在偏差
        "tipText": "",
        "maxSpeedList": [1.513,1.372,0.554,-1,-1,-1],
        "useLineSpeed": true, //使用线速度
        "mvt": 0.1, //mvt
        "maxLoad": "57.4", //预估最大肌力
        "suggestSpeed": [">1.30m/s","1.00~1.30m/s","0.75~1.00m/s","0.50~0.75m/s","<0.50m/s"], //建议速度
        "suggestLoad": ["<37.4kg","37.4~42.4kg","42.4~46.6kg","46.6~50.8kg",">50.8kg"], //建议负荷

        "data": []  //测试数据，与训练数据结构相同
    }
}
```
测试数据结构详见[设备测试数据结构](/third/deviceTestDataJson.md)

## 训练计划请求
- 使用HTTP GET协议请求训练计划(仅返回当天的训练计划)
```
http://url/third/api/trainPlan/getPlan?userId=10&deviceType=25
```

参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| userId | 用户唯一标识 |
| deviceType | 同一设备类型码 |

请求成功返回的数据结构如下：
```json
{
    "code": 200, 
    "message": "ok", 
    "obj": [
        {
            "id": "517", //计划ID
            "title": "张三的训练计划", //计划标题
            "status": 0, //状态 0未开始 1进行中 2已完成 
        },
        {
            "id": "518", //计划ID
            "title": "李四的训练计划", //计划标题
            "status": 0, //状态 0未开始 1进行中 2已完成
        }
    ]
}
```

## 训练计划详情请求
- 使用HTTP GET协议请求训练计划详情
```
http://url/third/api/trainPlan/getPlanDetail?planId=517
```

参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| planId | 计划ID |

请求成功返回的数据结构如下：
```json
{
    "code": 200, 
    "message": "ok", 
    "obj": {
        "id": "517", //计划ID
        "title": "张三的训练计划", //计划标题
        "scheduleContent": [{
            "id": "622", //动作ID
            "deviceType": 1, //设备类型
            "actionName": "T232-动作1", //设备标识-动作名称
            "status": 0, //状态 0未完成 1已完成
            "actionParams": [
                {
                    "unit": "", //单位
                    "label": "组数", //名称
                    "value": "Group", //关键字
                    "paramValue": 3 //值
                },
                {
                    "unit": "", //单位
                    "label": "次数", //名称
                    "value": "Reps", //关键字
                    "paramValue": 10 //值
                },
                {
                    "unit": "kg", //单位
                    "label": "负重", //名称
                    "value": "Weight", //关键字
                    "paramValue": 10 //值
                },
                {
                    "unit": "s", //单位
                    "label": "间歇", //名称
                    "value": "Intermission", //关键字
                    "paramValue": 10 //值
                }
            ]
        }]
    }
}
```

## 训练计划数据发送

- 使用HTTP POST协议进行数据传输
```
http://url/third/api/trainPlan/completePlan
```

- 客户端发送训练计划数据给服务器，格式如下：
```json
{
    "deviceSn": "T152-001", //设备编号
    "userId": 10, //用户ID
    "deviceType": "1", //设备类型
    "scheduleId": "517", //计划id
    "data": {
        "actionId": "622", //动作ID
        "actionName": "T232-动作1", //设备标识-动作名称
        "dataType": 0, //0训练1测试
        "startTime": "2025-03-13 11:50:57", //运动开始时间
        "endTime": "2025-03-13 11:50:57", //运动结束时间
        "data": [] //训练数据
    }
}
```
训练数据结构详见[设备训练数据结构](/third/deviceDataJson.md)
