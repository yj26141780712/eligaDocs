# 设备训练数据结构

设备的数据结构

## T130-VBT训练监测系统 

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 0 |    T130    |  VBT训练监测系统 |


## T232-无轨迹功能训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 1 |    T232    |  无轨迹功能训练器 |


数据例子:
```json
[
   {
    "ecc": 1,   
    "avgRfd": 105.65,
    "energy": 8.99,
    "maxRfd": 177.93,
    "indexId": 0,
    "maxLoad": 14.3,
    "avgPower": 42.82,
    "avgSpeed": 0.89,
    "maxPower": 73.1,
    "maxSpeed": 1.21,
    "direction": 1,
    "targetRfd": 0,
    "indexGroup": "0-1689209666204",
    "resistance": [
        11,
        11
    ],
    "targetLoad": 0,
    "targetPower": 0,
    "chart":[0,1,2,3,4]
    }
]
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| ecc   | 1 向心 2 离心 |
| avgRfd | 平均RFD，单位N/s |
| energy | 能量消耗，单位焦耳 |
| maxRfd | 峰值RFD，单位N/s  |
| indexId | 曲线编号，从0开始 |
| maxLoad | 峰值力量，单位lb |
| avgPower | 平均功率，单位W |
| avgSpeed | 平均速度，单位m/s |
| maxPower | 峰值功率，单位W|
| maxSpeed | 峰值速度，单位m/s |
| direction | 方向，默认为1|
| targetRfd | 目标RFD |
| indexGroup | 本次训练id，由"0-"和开始训练时间戳组成 |
| resistance | 离心模式和等张模式下，该值为向心力(lb)+离心力(lb);<br />等速模式下，该值为向心速度(m/s)；<br />末端释放模式下，该值为向心力(lb)；<br />弹性力模式下，该值为向心力(lb)+弹力等级；<br />流体阻力模式下，该值为向心力(lb)+阻力等级|
| targetLoad | 目标力量 |
| targetPower | 目标功率 |
| chart | 曲线数据，数据格式为五个为一组，时间(ms)+位置(mm)+功率(W)+速度(m/s)+力量(lb) |

## S230- 综合训练架

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 2 |    S230    |  综合训练架 |

[同T232](/third/deviceDataJson.html#t232-%E6%97%A0%E8%BD%A8%E8%BF%B9%E5%8A%9F%E8%83%BD%E8%AE%AD%E7%BB%83%E5%99%A8)


## T100-功率自行车
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 3 |    T100    |  功率自行车 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |

## T103-电控划船机
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 4 |    T103    | 电控划船机 |

数据例子:
```json
{
    "dataType": 0, //0训练1测试
    "modeName": "流体阻力", //训练模式
    "modeId": 0, //训练模式ID
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
    "trainTime": "01:00:00", //时长
    "totalDistance": "100.00", //公里数
    "totalOarCount": "10", //总桨数
    "totalConsum": "1.00", //消耗
    "maxSpeed": "1.00", //峰值速度
    "avgSpeed": "1.00", //平均速度
    "maxPower": "1.00", //峰值功率
    "avgPower": "1.00", //平均功率
    "maxForce": "1.00", //峰值拉力
    "avgForce": "1.00", //平均拉力
    "maxFrequency": "1", //峰值桨频
    "avgFrequency": "1", //平均桨频
    "maxHeartRate": "100", //峰值心率
    "avgHeartRate": "88", //平均心率
    "timeCategories": [1,2,3], //时间轴
    "distCategories": [1,2,3], //距离轴
    "speedSeries": [1,2,3], //平均速度轴
    "powerSeries": [1,2,3], //平均功率轴
    "forceSeries": [1,2,3], //平均拉力轴
    "heartRateSeries": [1,2,3], //心率轴
    "maxLoad": "10.00", //最大负荷
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|  dataType  | 0 训练 1 测试 |
|  modeName  | 训练模式 |
|  modeId  | 训练模式ID，0 恒定阻力 1 流体阻力 |
|  startTime  | 开始训练时间 |
|  endTime  | 训练结束时间 |
|  trainTime  | 训练时长 |
|  totalDistance  | 公里数，单位m |
|  totalOarCount  | 总桨数 |
|  totalConsum  | 消耗，单位kcal |
|  maxSpeed  | 峰值速度，单位km/h |
|  avgSpeed  | 平均速度，单位km/h |
|  maxPower  | 峰值功率，单位W |
|  avgPower  | 平均功率，单位W |
|  maxForce  | 峰值拉力，单位N |
|  avgForce  | 平均拉力，单位N |
|  maxFrequency  | 峰值桨频，单位spm |
|  avgFrequency  | 平均桨频，单位spm |
|  maxHeartRate  | 峰值心率 |
|  avgFrequency  | 平均心率 |
|  timeCategories  | 曲线时间轴数据 |
|  distCategories  | 曲线距离轴数据 |
|  speedSeries  | 曲线平均速度轴数据 |
|  powerSeries  | 曲线平均功率轴数据 |
|  forceSeries  | 曲线平均拉力轴数据 |
|  heartRateSeries  | 曲线心率轴数据 |
|  maxLoad  | 最大负荷，单位kg |


## T160-大腿内收训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 5 |    T160    |  大腿内收训练器 |

数据例子:
```json
[
   {
    "ecc": 1,   
    "rfd": 105.65,
    "energy": 8.99,
    "indexId": 0,
    "maxLoad": 14.3,
    "avgPower": 42.82,
    "avgSpeed": 0.89,
    "maxPower": 73.1,
    "maxSpeed": 1.21,
    "direction": 1,
    "indexGroup": "0-1689209666204",
    "resistance": [
        11,
        11
    ],
    "targetLoad": 0,
    "targetPower": 0,
    "chart":[0,1,2,3,4]
    }
]
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| ecc   | 1 向心 2 离心 |
| rfd | RFD，单位N/s |
| energy | 能量消耗，单位焦耳 |
| indexId | 曲线编号，从0开始 |
| maxLoad | 峰值力量，单位lb |
| avgPower | 平均功率，单位W |
| avgSpeed | 平均速度，单位m/s |
| maxPower | 峰值功率，单位W|
| maxSpeed | 峰值速度，单位m/s |
| direction | 方向，默认为1|
| indexGroup | 本次训练id，由"0-"和开始训练时间戳组成 |
| resistance | 离心模式和等张模式下，该值为向心力(lb)+离心力(lb);<br />等速模式下，该值为向心速度(m/s)；<br />末端释放模式下，该值为向心力(lb)；<br />弹性力模式下，该值为向心力(lb)+弹力等级；<br />流体阻力模式下，该值为向心力(lb)+阻力等级|
| targetLoad | 目标力量 |
| targetPower | 目标功率 |
| chart | 曲线数据，数据格式为五个为一组，时间(ms)+位置(mm)+功率(W)+速度(m/s)+力量(lb) |

## T168-深蹲训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 6 |    T168    |  深蹲训练器 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |

## T120-冲刺训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 7 |    T120    |  冲刺训练器 |

数据例子:
```json
{
    "dataType": 1, //0训练1测试
	"modeName": "无飞行重量", //测试模式  0:等张 1:自然惯性 2:无飞行重量
	"modeId": 0, //模式ID
	"curveData": [[0,1,2,3,4,5]],//[[时间,力,速度,位置,功率,加速度]]
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
	"forceMode": 0, //力量模式值 0:恒力 1:变力
    "forceModeName": "变力", //力量模式名称 恒力 变力
    "forceMethod": 0, //阻力模式 0:阻力，1:助力值
    "forceMethodName": "阻力", //阻力，助力名称
    "forceModeParam": "5.5lb", //力量模式参数设定值
	"forceRatio": 0, // 0:x1,1:x2 //系数
    "recordType": 0, //记录模式: 0:手动、1:时间、2:距离
    "segmentationData": [], //0-100米段数数据
    "maxPower": 0, //最大功率 w
	"maxSpeed": 0, //最大速度 m/s
	"avgPower": 0, //平局功率 w
	"avgSpeed": 0, //平局速度 m/s
    "maxLoad": 0, //最大力 N
    "energy": 0, //功 w
    "distance": 0,//位置, m
    "resistanceSpeed": "1m/s",//收绳速度 m/s
    "boostSpeed": "1m/s",//助力速度 m/s
	"target": " ", //目标
	"perform": " ", //完成 
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| modeName | 测试模式 |
| curveData | 曲线 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| forceMode | 力量模式值 |
| forceModeName | 力量模式 |
| forceMethod | 阻力模式 |
| forceMethodName | 阻力模式名称 |
| forceModeParam | 阻力模式名称 |
| forceRatio | 系数 |
| recordType | 记录模式 |
| segmentationData | 段数数据 |
| maxPower | 最大功率 |
| maxSpeed | 最大速度 |
| avgPower | 平局功率 |
| avgSpeed | 平局速度 |
| maxLoad | 最大力 |
| energy | 功 |
| distance | 位置 |
| resistanceSpeed | 收绳速度 |
| boostSpeed | 助力速度 |
| target | 目标 |
| perform | 完成 |    

## T131-测力台
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 8 |    T131    |  测力台 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |


## T110-高尔夫训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 9 |    T110    |  高尔夫训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T180-髋关节训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 10 |    T180    |  髋关节训练器 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |


## T165-背部伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 12 |    T165    |  背部伸展训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T161-大腿外展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 14 |    T161    |  大腿外展训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T152-坐姿推胸训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 15 |    T152    |  坐姿推胸训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T158-肘关节屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 16 |    T158    |  肘关节屈曲训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T181-跑步机
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 17 |    T181    |  跑步机 |

数据例子:
```json
{
  "avgPace": 438, // 平均配速
  "calorie": 4.953983, // 总消耗
  "paceArr": [], // 配速曲线
  "distance": 0.06841667, // 总距离
  "avgStride": 0, // 平均步幅 
  "strideArr": [], // 步幅曲线
  "avgCadence": 0, // 平均步频
  "cadenceArr": [], // 步频曲线
  "avgFreeTime": 0, // 平均腾空时间
  "freeTimeArr": [], // 腾空时间曲线
  "avgTouchdownTime": 0, // 平均触地时间
  "touchdownTimeArr": [] // 触地时间曲线
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| avgPace   | 平均配速 |
| calorie   | 总消耗 |
| paceArr   | 配速曲线  |
| distance   | 总距离 |
| avgStride   | 平均步幅  |
| strideArr   | 步幅曲线 |
| avgCadence   | 平均步频  |
| cadenceArr  |  步频曲线  |
| avgFreeTime   | 平均腾空时间 |
| freeTimeArr   |  腾空时间曲线 |
| avgTouchdownTime   | 平均触地时间  |
| touchdownTimeArr   | 触地时间曲线  |

## T153-坐姿划船训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 18 |    T153    |  坐姿划船训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T155-坐姿下拉训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 19 |    T155    |  坐姿下拉训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T163-大腿屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 20 |    T163    |  大腿屈曲训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T105-攀爬机
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 21 |    T105    |  攀爬机 |

数据例子:
```json
{
    "dataType" : 0, //0训练1测试
    "modeName" : "阻力模式", //训练模式
    "modeId": 0, //训练模式ID
    "time": 10, //训练时间
    "distance": 10.00, //训练距离
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
    "leftSpeed": [1,2,3], //左平均速度
    "leftPower": [1,2,3], //左平均功率
    "rightSpeed": [1,2,3], //右平均速度
    "rightPower": [1,2,3], //右平均功率
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|  dataType  | 0 训练 1 测试 |
|  modeName  | 训练模式 |
|  modeId  | 训练模式ID，0 阻力模式 1 距离模式 2 间歇模式 |
|  time  | 训练时间，单位s |
|  distance  | 训练距离，单位m |
|  startTime  | 开始训练时间 |
|  endTime  | 训练结束时间 |
|  leftSpeed  | 左脚平均速度柱状图数据 |
|  leftPower  | 左脚平均功率柱状图数据 |
|  rightSpeed  | 右脚平均速度柱状图数据 |
|  rightPower  | 右脚平均功率柱状图数据 |

## T156-坐姿上推训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 22 |    T156    |  坐姿上推训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T133-分段计时
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 23 |    T133    |  分段计时 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |

## S231-多功能综合训练架
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 24 |    S231    |  多功能综合训练架 |

[同T232](/third/deviceDataJson.html#t232-%E6%97%A0%E8%BD%A8%E8%BF%B9%E5%8A%9F%E8%83%BD%E8%AE%AD%E7%BB%83%E5%99%A8)

## T162-大腿伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 25 |    T162    |  大腿伸展训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T159-大腿蹬伸训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 27 |    T159    |  大腿蹬伸训练器 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |

## T163-团队定位
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 28 |    T163    |  团队定位 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |


## T171-坐姿提踵
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 29 |    T171    |  坐姿提踵 |

数据例子:
```json
{

}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|    | |

## T157-肘关节伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 30 |    T157    |  肘关节伸展训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)












