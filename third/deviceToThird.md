# 第三方系统接入设备

第三方系统接入设备说明

## 配置界面
- 进入方式：开发者界面->第三方接入配置，界面如下图
![VuePress Logo](/images/thirdSetting.png)

## 开启配置流程

- 申请设备联网验证激活码（目前只支持开发人员发放）
- 点击联网验证按钮，输入激活码并确认
- 勾选开启配置勾选框
- 输入websocket地址，例如 ws://www.eliga.cn/ws/device?Sn=T232-0001
- 输入接口地址,例如 http://www.eliga.cn/api/
- 输入登录二维码,例如 http://www.eliga.cn/api/userlogin?Sn=T232-0001
- 点击保存按钮

## 登录接入流程

- 设备初始化完成，与配置的websocket地址建立websocket连接
- 第三方app扫描登录二维码，app调用二维码中的登录登陆链接，发送登录请求到第三方服务
- 第三方服务收到登录请求，验证登录者身份，验证成功后通过websocket连接将登录成功的消息发送给设备
- 设备收到登录成功信息后，进入设备主界面

登录成功返回的数据结构
```json
{
    "event":"login:ok",
    "data": {
        "userId": 12, // 用户唯一标识
        "name":"运动员12", // 用户名称
        "avatar":"https://www.eliga.cn/head/12.png", // 头像
        "height": 170, // 身高
        "weight": 60, // 体重
        "sex": 1, // 性别 0 男  1 女
        "age":30 // 年龄
    }
}
```


## 数据接入流程

- 第三方开发数据接收接口，接口地址:{配置接口地址}/uploadReport
- 接口数据如下([查看设备data](/third/deviceDataJson.html#t232-%E6%97%A0%E8%BD%A8%E8%BF%B9%E5%8A%9F%E8%83%BD%E8%AE%AD%E7%BB%83%E5%99%A8)):
```json
{
    "deviceSn":"T232-0002",
    "userId":2,
    "data":{ 
        "dataType":1, // 数据类型 0 训练数据 1 测试数据
        "startTime":"2022-08-01 09:10:10", // 开始训练时间
        "endTime":"2022-08-01 09:10:10", // 结束训练时间
        "modeId": 0,  // 模式id
        "modeName" :"恒力", // 模式名称
        "actId": 0, // 动作id 
        "actName":"卧推", // 动作名称
        "data": { //设备数据 

        }
     }
}
```

## 示例代码

- [nodejs](/demos/nodejs.zip)
  



