# 第三方系统与设备直连

第三方系统与设备直连说明。

## 连接

><span>采用websocket连接方式：ws://url/third/ws/device?deviceSn=T152-001&deviceType=15</span>

### 参数说明
| 参数  | 说明                                    |
|------|-----------------------------------------|
| deviceSn   |    设备唯一识别码SN      |
| deviceType |    同一设备类型码，如T152-001和T152-002都属于T152设备       |

### 返回说明
连接成功返回的数据结构如下：
```json
{
    "event": "connect:ok"
}
```
连接失败返回的数据结构如下：
```json
{
    "event": "connect:fail",
    "data": {
        "errCode": 50002,
        "errMsg": "设备T152-001未加入设备列表中"
    }
}
```

## 登录
有四种登录方式：扫描登录、人脸登录、手环登录和账号密码登录。

### 扫码登录
- 第三方app扫描登录二维码，app使用二维码中的SN信息发送登录请求到第三方服务
- 第三方服务收到登录请求，验证登录者身份，验证成功后通过websocket连接将登录成功的消息发送给设备
- 设备收到登录成功信息后，进入设备主界面

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

### 人脸登录
- 客户端发送人脸图片给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "face",
        "image": "base64格式"
    }
}
```

登录返回同扫码登录

### 手环登录
- 客户端发送手环NFC ID给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "card",
        "nfcId": "12345678"
    }
}
```

登录返回同扫码登录

### 账号密码登录
- 客户端发送账号密码给服务器，格式如下：
```json
{
    "event": "login",
    "data": {
        "type": "account",
        "account": "12345678",
        "password": "12345678"
    }
}
```

登录返回同扫码登录

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
