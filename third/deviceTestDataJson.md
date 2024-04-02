# 设备测试数据结构

设备的数据结构

## T130-VBT训练监测系统 

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 0 |    T130    |  VBT训练监测系统 |

数据例子:
```json
{
    "dataType" : 1, //0训练1测试
    "actName": "深蹲",
    "startTime": "2024-03-29 15:04:00",
    "endTime": "2024-03-29 15:04:04",
    "ecc": 0,
    "totalWeight": 50,
    "powerSet" : ["22.5","27.5","32.5","37.5","42.5","47.5"], //阻力设定
    "avgPower" : [1,2,3,4,5,6], //平均功率
    "avgSpeed" : [1,2,3,4,5,6], //平均速度
    "testData": [[332.5],[336.8],[356.3],[123.4],[478.3],[332.5]], //测试数据
    "powerCurve" : [1,2], //功率曲线
    "powerScatterCurve" : [1,2], //功率曲线散点
    "speedCurve" : [1,2], //速度曲线
    "speedScatterCurve" : [1,2], //速度曲线散点
    "maxPower" : "0.0", //最佳功率
    "maxSpeed" : "0.00", //最大动作速度
    "mvt": "3.0", //MVT
    "assessMaxWeight": "64.0",//预估最大力量
    "maxPowerLoad" : "30.0", //最佳训练负荷
    "explosiveData" : {}, //最佳训练负荷
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| actName | 动作名称 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| powerSet | 阻力设定，1-6组测试时每组的向心力和离心力设定，单位kg |
| powerReal | 阻力实际值，1-6组测试时每组测试达到功率最大值时的实际阻力值，单位kg|
| testData | 6组测试数据，每组测试最多可以有三个数据，每个数据表示当次测试达到的最大功率，单位W|
| powerCurve | 功率曲线数据，用于画连续曲线，两个为一组，负荷(kg)+功率(W) |
| powerScatterCurve | 功率曲线散点，用于画离散曲线，两个为一组，负荷(kg)+功率(W) |
| speedCurve | 速度曲线数据，用于画连续曲线，两个为一组，负荷(kg)+速度(m/s) |
| speedScatterCurve | 速度曲线散点，用于画离散曲线，两个为一组，负荷(kg)+速度(m/s) |
| maxPower | 最大功率,单位W |
| maxPowerLoad | 最大功率负荷，单位kg |
| bestPower | 最佳功率，单位W|
| bestPowerLoad | 最佳功率负荷，单位kg |
| maxLoad | 最大负荷，单位kg |
| explosiveData | 面板显示数据 |

## T232-无轨迹功能训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 1 |    T232    |  无轨迹功能训练器 |


数据例子:
```json
{
    "dataType" : 1, //0训练1测试
    "actName" : "俯身飞鸟", //动作名称
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
    "powerSet" : ["8.1","9.9","11.7","13.5","15.3","17.1"], //阻力设定
    "powerReal" : ["27.1","26.2","28.2","25.1","30.6","27.1"], //阻力实际
    "testData": [[332.5],[336.8],[356.3],[123.4],[478.3],[332.5]], //测试数据
    "powerCurve" : [1,2], //功率曲线
    "powerScatterCurve" : [1,2], //功率曲线散点
    "speedCurve" : [1,2], //速度曲线
    "speedScatterCurve" : [1,2], //速度曲线散点
    "maxPower" : "0.0", //最大功率
    "maxPowerLoad" : "0.0", //最大功率负荷
    "bestPower" : "0.0", //最佳功率
    "bestPowerLoad" : "0.0", //最佳功率负荷
    "maxLoad" : "0.0", //最大负荷
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| actName | 动作名称 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| powerSet | 阻力设定，1-6组测试时每组的向心力和离心力设定，单位kg |
| powerReal | 阻力实际值，1-6组测试时每组测试达到功率最大值时的实际阻力值，单位kg|
| testData | 6组测试数据，每组测试最多可以有三个数据，每个数据表示当次测试达到的最大功率，单位W|
| powerCurve | 功率曲线数据，用于画连续曲线，两个为一组，负荷(kg)+功率(W) |
| powerScatterCurve | 功率曲线散点，用于画离散曲线，两个为一组，负荷(kg)+功率(W) |
| speedCurve | 速度曲线数据，用于画连续曲线，两个为一组，负荷(kg)+速度(m/s) |
| speedScatterCurve | 速度曲线散点，用于画离散曲线，两个为一组，负荷(kg)+速度(m/s) |
| maxPower | 最大功率,单位W |
| maxPowerLoad | 最大功率负荷，单位kg |
| bestPower | 最佳功率，单位W|
| bestPowerLoad | 最佳功率负荷，单位kg |
| maxLoad | 最大负荷，单位kg |

## S230-综合训练架

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 2     | S230   | 综合训练架 |

数据例子:
```json
{
    "dataType" : 1, //0训练1测试
    "actName" : "俯身飞鸟", //动作名称
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
    "ecc": 0, //0先向心1先离心
    "poleType": 0, //0女杆1男杆
    "totalWeight": 60, //负荷总重量
    "addWeight": 0, //自加配重
    "powerSet" : ["8.1","9.9","11.7","13.5","15.3","17.1"], //阻力设定
    "avgPower" : [1,2,3,4,5,6], //平均功率
    "avgSpeed" : [1,2,3,4,5,6], //平均速度
    "testData": [[332.5],[336.8],[356.3],[123.4],[478.3],[332.5]], //测试数据
    "powerCurve" : [1,2], //功率曲线
    "powerScatterCurve" : [1,2], //功率曲线散点
    "speedCurve" : [1,2], //速度曲线
    "speedScatterCurve" : [1,2], //速度曲线散点
    "maxPower" : "0.0", //最佳功率
    "maxSpeed" : "0.00", //最大动作速度
    "mvt": "3.0", //MVT
    "assessMaxWeight": "64.0",//预估最大力量
    "maxPowerLoad" : "30.0", //最佳训练负荷
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| actName | 动作名称 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| ecc | 0 先向心 1 先离心 |
| poleType | 0 女杆 1 男杆 |
| totalWeight | 负荷总重量，单位kg |
| addWeight | 自加配重，单位kg |
| powerSet | 阻力设定，1-6组测试时每组的向心力和离心力设定，单位kg |
| avgPower | 每组测试的最大平均功率，单位W |
| avgSpeed | 每组测试到达最大平均功率时的平均速度，单位m/s |
| testData | 6组测试数据，每组测试最多可以有三个数据，每个数据表示当次测试达到的最大功率，单位W|
| powerCurve | 功率曲线数据，用于画连续曲线，两个为一组，负荷(kg)+功率(W) |
| powerScatterCurve | 功率曲线散点，用于画离散曲线，两个为一组，负荷(kg)+功率(W) |
| speedCurve | 速度曲线数据，用于画连续曲线，两个为一组，负荷(kg)+速度(m/s) |
| speedScatterCurve | 速度曲线散点，用于画离散曲线，两个为一组，负荷(kg)+速度(m/s) |
| maxPower | 最佳功率,单位W |
| maxSpeed | 最大动作速度，单位m/s |
| mvt | MVT，单位m/s|
| assessMaxWeight | 预估最大力量，单位kg |
| maxPowerLoad | 最佳训练负荷，单位kg |


## T100-功率自行车
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 3     |  T100  |  功率自行车 |

数据例子:
```json
{
	"dataType": 1, //0训练1测试
	"modeName": "自由骑", //模式 
	"modeId": 0, //模式ID 
	"curveData": [[ 0,0.01,90.1,0.43,9.61,5.89,0],[]],//时间s,距离km,力量N,速度km/h,功率w，踏频rpm，心率bpm
	"startTime": "2023-07-19 14:10:25",//开始训练时间 y-m-d h:m:s
	"endTime": "2023-07-19 14:10:40",//训练结束时间
	"totalTime": "00:00:07", //总时长
	"totalDistance": 0.01, //总公里数 0.022km
	"totalEnergy": 1.05, //总消耗 0.22kcal
	"maxHeartRate": 0, //最大心率bpm
	"avgHeartRate": 0, //平均心率bpm
	"avgSpeed": 5.8, //平均速度 km/h
	"maxSpeed": 8.48, //最大速度 km/h
	"avgPower": 0, //平均功率 w
	"maxPower": 1, //最大功率 w
	"maxCadence": 2, //峰值踏频 rpm
	"avgCadence": 2, //平均踏频 rpm
	"maxForceAngleLeft": 50.1, //左脚峰值力量角度 °
	"maxForceAngleRight": 50.2, //右脚峰值力量角度 °
	"totalSymmetryLeft": 20, //左出力  45%
	"totalSymmetryRight": 80, //右出力 55%
	"powerWeight": 2.333, //功率/质量 w/kg
	"avgRate": "10:20", //平均速率 m:s
	"polarChartLists": [[], [[6.93,110.18]],//圈曲线，x,y值
	"VO2max": 0, //最大摄氧量 ml/kg/min
	"target": " ", //目标
	"perform": " ", //完成 
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
|  dataType  | 0 训练 1 测试 |
|  modeName  | 0 自由骑,1 时间骑,2 距离骑<br />3 热量骑,4 心率骑,5 5s峰值功率<br />6 3分钟有氧 ,7 次大力量爬升,8 6s峰值功率<br />9 10分钟渐进,10 最大力量爬升,11 30s测试<br />12 FTP渐进,13 坡度变化,14 最大摄氧量 | 
|  modeId  | 0 模式ID |
|  curveData | 时间s,距离km,力量N,速度km/h,功率w,踏频rpm,心率bpm |
|  startTime | 开始训练时间 y-m-d h:m:s |
|  endTime   | 训练结束时间 |
|  totalTime | 总时长 |
|  totalDistance | 总公里数 0.022km |
|  totalEnergy | 总消耗 0.22kcal |
|  maxHeartRate | 最大心率bpm |
|  avgHeartRate | 平均心率bpm |
|  avgSpeed | 平均速度 km/h |
|  maxSpeed | 最大速度 km/h |
|  avgPower | 平均功率 w |
|  maxPower | 最大功率 w |
|  maxCadence | 峰值踏频 rpm |
|  avgCadence | 平均踏频 rpm |
|  maxForceAngleLeft | 左脚峰值力量角度 ° |
|  maxForceAngleRight | 右脚峰值力量角度 ° |
|  totalSymmetryLeft | 左出力  45% |
|  totalSymmetryRight | 右出力 55% |
|  powerWeight | 功率/质量 w/kg |
|  avgRate | 平均速率 m:s |
|  polarChartLists | 圈曲线，x,y值 |
|  VO2max | 最大摄氧量 ml/kg/min |
|  target | 目标 |
|  perform | 完成 |

## T103-电控划船机
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 4 |    T103    | 电控划船机 |

数据例子:
```json
{
    "dataType": 1, //0训练1测试
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
    "segData" : [{
        distSegment: "0-100",
        trainTime: "00:01:01", //时长
        maxSpeed: "9.33", //峰值速度
        avgSpeed: "5.87", //平均速度
        maxPower: "907.58", //峰值功率
        avgPower: "226.56", //平均功率
        maxForce: "852.00", //峰值拉力
        avgForce: "288.35", //平均拉力
    }]
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
|  segData  | 测试分段数据，第一组数据为总距离下的训练数据，第二组及以后为分段距离下的训练数据 |

## T160-大腿内收训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 5 |    T160    |  大腿内收训练器 |

数据例子:
```json
{
    "dataType" : 1, //0训练1测试
    "actName" : "俯身飞鸟", //动作名称
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
    "powerSet" : ["8.1","9.9","11.7","13.5","15.3","17.1"], //阻力设定
    "powerReal" : ["27.1","26.2","28.2","25.1","30.6","27.1"], //阻力实际
    "testData": [[332.5],[336.8],[356.3],[123.4],[478.3],[332.5]], //测试数据
    "powerCurve" : [1,2], //功率曲线
    "powerScatterCurve" : [1,2], //功率曲线散点
    "speedCurve" : [1,2], //速度曲线
    "speedScatterCurve" : [1,2], //速度曲线散点
    "maxPower" : "0.0", //最大功率
    "maxPowerLoad" : "0.0", //最大功率负荷
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| actName | 动作名称 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| powerSet | 阻力设定，1-6组测试时每组的向心力和离心力设定，单位kg |
| powerReal | 阻力实际值，1-6组测试时每组测试达到功率最大值时的实际阻力值，单位kg|
| testData | 6组测试数据，每组测试最多可以有三个数据，每个数据表示当次测试达到的最大功率，单位W|
| powerCurve | 功率曲线数据，用于画连续曲线，两个为一组，负荷(kg)+功率(W) |
| powerScatterCurve | 功率曲线散点，用于画离散曲线，两个为一组，负荷(kg)+功率(W) |
| speedCurve | 速度曲线数据，用于画连续曲线，两个为一组，负荷(kg)+速度(m/s) |
| speedScatterCurve | 速度曲线散点，用于画离散曲线，两个为一组，负荷(kg)+速度(m/s) |
| maxPower | 最大功率,单位W |
| maxPowerLoad | 最大功率负荷，单位kg |

## T168-深蹲训练器

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 6 |    T168    |  深蹲训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

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
	"curveData": [[0,1,2,3,4,5]],//[[时间s,力N,速度m/s,位置m,功率w,加速度ms⁻²]]
    "startTime": "2023-07-19 14:10:25",//开始训练时间
    "endTime": "2023-07-19 14:10:40",//训练结束时间
	"forceMode": 0, //力量模式值 0:恒力 1:变力
    "forceModeName": "变力", //力量模式名称 恒力 变力
    "forceMethod": 0, //阻力模式值 0:阻力，1:助力
    "forceMethodName": "阻力", //阻力，助力名称
    "forceModeParam": "5.5lb", //力量模式参数设定值
	"forceRatio": 0, // 0:x1,1:x2 //系数
    "recordType": 0, //记录模式: 0:手动、1:时间、2:距离
    "segmentationData": [{position: "0-0",segmentTime: 0,totalTime: 0,peakSpeed: 
	0,avgSpeed: 0,peakPower: 0,avgPower: 0,peakForce: 0,avgForce: 0,maxAcc: 0,avgAcc: 0}], //'距离m', '分段时长s', '总时长s', '峰值速度m/s', '平均速度m/s', '峰值功率w', '平均功率w', '峰值力N', '平均力N','峰值加速度ms⁻²', '平均加速度ms⁻²' 0-100米段数数据
    "maxPower": 0, //最大功率 w
	"maxSpeed": 0, //最大速度 m/s
	"avgPower": 0, //平局功率 w
	"avgSpeed": 0, //平局速度 m/s
    "maxLoad": 0, //最大力 N
    "energy": 0, //功 J
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
| segmentationData | 段数数据 '距离m', '分段时长s', '总时长s', '峰值速度m/s', '平均速度m/s', '峰值功率w', '平均功率w', '峰值力N', '平均力N','峰值加速度ms⁻²', '平均加速度ms⁻²' |
| maxPower | 最大功率 W|
| maxSpeed | 最大速度 m/s|
| avgPower | 平局功率 W|
| avgSpeed | 平局速度 m/s|
| maxLoad | 最大力 N|
| energy | 功 J|
| distance | 位置 m|
| resistanceSpeed | 收绳速度 m/s|
| boostSpeed | 助力速度 m/s|
| target | 目标 |
| perform | 完成 |    

## T131-测力台
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 8 |    T131    |  测力台 |

数据例子:
```json
{
    "userId": 1506, //用户ID
    "deviceSn": "T13100N80008", //设备编号
    "deviceName": "测力台",  //设备类型名称
    "deviceType": "8",  //设备类型
    "scheduleId":111, //计划id
	"scheduleContentId":111 , //计划内容id
	"actionIndex":111 , //计划内容动作索引
    "data": {
        "err": {
            "msg": "数据正常", //异常提示
            "errCode": 0  //0数据正常，1数据异常
        },
        "RFDMax": 8460, //峰值RFD
        "modeId": 0, //模式ID
        "weight": 81.9, // 重量
        "eccTime": 0, //离心时间 s
        "endTime": "2024-03-28 09:54:44",
        "perform": " ", //完成 
	    "target": " ", //目标
        "dataType": 1, //0训练1测试
        "modeName": "Free(自由测试)",   //测试模式
        "curveData": [[0, 0, 0, 0, 0, 0, 0, 0],[0, 0, 0, 0, 0, 0, 0, 0]],//曲线数据 [[时间,功率,速度,合力,左脚力,右脚力，位置，平衡曲线]]
        "peakForce": 3276,  //合力峰值  
        "startTime": "2024-03-28 09:54:38",
        "flightTime": 0, // 滞空时间 ms 
        "conAvgForce": 0, //  向心平均力（N）
        "conAvgPower": 0, //   向心平均功率（W）
        "pushOffTime": 0, //蹬伸时间（s）
        "conPeakForce": 0, //向心峰值力（N）
        "conPeakPower": 0, //向心峰值功率（W）
        "conPeakSpeed": 0, //向心峰值速度（m/s）
        "eccPeakSpeed": 0, //离心峰值速度（m/s）
        "leftMaxForce": 1683,  //左脚峰值
        "peakForceRFD": 8460,  //peakForceRFD
        "avgJoinForces": 805.2246963562756,  //峰值RFD集合
        "rightMaxForce": 1732,  //右脚峰值
        "eccForceImpulse": 0, ////离心冲量（Ns）
        "brakingPhaseTime": 0, //制动时间（s）2
        "relativeMaxForce": 0,  //向心相对最大力(BW%)
        "relativeMaxPower": 0,  // "相对最大功率（W/kg）
        "jumpHeightFlightTime": 0,// 基于腾空时间的纵跳高度（m）
        "verticalTakeOffSpeed": 0, //起跳速度（m/s） 
        "landingPeakForceRatio": 0,//左右侧落地峰值力比 
        "pushOffFIForceImpulse": 0, //蹬伸冲量 Ns
        "jumpHeightTakeOffSpeed": 0,  //V纵跳高度（m）
        "concentricPeakForceRatio": 0, ////左右侧蹬伸峰值力比 
        "pushOffFIForceImpulseRatio": 0,  //左右侧蹬伸冲量比
        "reactiveStrengthIndexModifiedRSIMod": 0   //RSI 反应力量指数(m/s)
    }
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| 自由模式 0 自由模式 1 CMJ(反向跳) 2 SJ(深蹲跳)|----------------------------------|
| userId | 用户ID |
| deviceSn | 设备编号 |
| deviceName | 设备类型名称 |
| deviceType | 设备类型 |
| scheduleId | 计划id |
| scheduleContentId | 计划内容id |
| actionIndex | 计划内容动作索引 |
| err.msg | 异常提示 |
| err.errCode | 0 数据正常，1 数据异常 |
| data数据 |
| RFDMax | 峰值RFD |
| modeId | 模式ID |
| weight | 重量 |
| eccTime | 离心时间 s |
| endTime | 结束时间 |
| perform | 完成 |
| target | 目标 |
| dataType | 0 训练 1 测试 |
| modeName | 0 自由模式 1 CMJ(反向跳) 2 SJ(深蹲跳) 3 DJ(跳深) 4 IMTP(等长大腿中部拉) 5 CCMJ(连续纵跳)|
| curveData | [[时间,功率,速度,合力,左脚力,右脚力，位置，平衡曲线]] |
| peakForce | 合力峰值 |
| 'timeA', 'timeB', 'timeC', 'timeD', 'timeE', 'timeF' | 曲线对应时间 |
| startTime | 开始训练时间 |
| flightTime | 滞空时间 ms |
| conAvgForce | 向心平均力（N） |
| conAvgPower | 向心平均功率（W） |
| pushOffTime | 蹬伸时间（s） |
| conPeakForce | 向心峰值力（N） |
| conPeakPower | 向心峰值功率（W） |
| conPeakSpeed | 向心峰值速度（m/s） |
| eccPeakSpeed | 离心峰值速度（m/s） |
| leftMaxForce | 左脚峰值 |
| peakForceRFD | peakForceRFD |
| avgJoinForces | 峰值RFD集合 |
| rightMaxForce | 右脚峰值 |
| eccForceImpulse | 离心冲量（Ns） |
| brakingPhaseTime | 制动时间（s）2 |
| relativeMaxForce | 向心相对最大力(BW%) |
| relativeMaxPower | 相对最大功率（W/kg） |
| jumpHeightFlightTime | 基于腾空时间的纵跳高度（m） |
| verticalTakeOffSpeed | 起跳速度（m/s） |
| landingPeakForceRatio | 左右侧落地峰值力比 |
| pushOffFIForceImpulse | 蹬伸冲量 Ns |
| jumpHeightTakeOffSpeed | V纵跳高度（m） |
| concentricPeakForceRatio | 左右侧蹬伸峰值力比 |
| pushOffFIForceImpulseRatio | 左右侧蹬伸冲量比 |
| reactiveStrengthIndexModifiedRSIMod | RSI 反应力量指数(m/s) |
| DJ(跳深) |----------------------------------|
| eccAvgPower | 离心平均功率 |
| eccPeakPower | 离心峰值功率 |
| eccAvgForce | 离心平均力 |
| eccPeakForce | 离心峰值力 |
| conTime | 向心时间 |
| IMTP(等长大腿中部拉) |----------------------------------|
| peakForceImpt | 峰值力 |
| relativePeakForce | 相对峰值力 |
| specificTimeValue | 特定时间力值 |
| rateForceDevelopment | 特定时间发力率 |
| impulse | 特定时间冲量 |
| peakForceDevelopmentTimeLeft | 峰值力发展时间 s 【左】 |
| peakForceDevelopmentTimeRight | 峰值力发展时间 s 【右】 |
| peakForceDevelopmentTimeJoin | 峰值力发展时间 s 【合】 |
| peakForceHoldTimeLeft | 峰值力保持时间 s 【左】 |
| peakForceHoldTimeRight | 峰值力保持时间 s 【右】 |
| peakForceHoldTimeJoin | 峰值力保持时间 s 【合】 |
| netMaxPeakForceLeft | 绝对峰值力  N 【左】 |
| netMaxPeakForceRight | 绝对峰值力  N 【右】 |
| specificTimeNetForceLeft | 特定时间绝对力 N 【左】 [[50,0],[100,0],[150,0],[200,0]] //50ms,100ms,150ms,200ms 0左/1右|
| specificTimeNetForceRight | 特定时间绝对力 N 【右】 [[50,0],[100,0],[150,0],[200,0]] //50ms,100ms,150ms,200ms 0左/1右|
| specificTimeRFDLeft | 特定时间RFD N/s 【左】 [[50,0],[100,0],[150,0],[200,0]] //50ms,100ms,150ms,200ms 0左/1右|
| specificTimeRFDRight | 特定时间RFD N/s 【右】 |
| specificTimeBalanceRatio | 特定时间平衡比 【左】 [[50,0],[100,0],[150,0],[200,0]] //50ms,100ms,150ms,200ms 0左/1右|
| standardDeviation | 标准差 |
| CCMJ(连续纵跳) |----------------------------------|
| jumpHeightTakeOffSpeeds | V纵跳高度（m） |
| flightTimes | 腾空时间（s） |
| braceTimes | 支撑时间 |


## T110-高尔夫训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 9 |    T110    |  高尔夫训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T165-背部伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 12 |    T165    |  背部伸展训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T161-大腿外展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 14 |    T161    |  大腿外展训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T152-坐姿推胸训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 15 |    T152    |  坐姿推胸训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T158-肘关节屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 16 |    T158    |  肘关节屈曲训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T153-坐姿划船训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 18 |    T153    |  坐姿划船训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T155-坐姿下拉训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 19 |    T155    |  坐姿下拉训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T163-大腿屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 20 |    T163    |  大腿屈曲训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T105-攀爬机
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 21 |    T105    |  攀爬机 |

该设备无测试模式

## T156-坐姿上推训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 22 |    T156    |  坐姿上推训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T133-分段计时
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 23 |    T133    |  分段计时 |

数据例子:
```json
{
    "dataType": 1, //0训练1测试
    "actName": "传统测试", //动作名称
    "startTime": "2024-03-04 15:01:47",
    "endTime": "2024-03-04 15:02:32",
    "path": [98, 1, 2, 3],
    "projectid": 1,
    "data": [
                 {
                "id": "1711698699143",
                "uid": 1087,
                "tid": 160,
                "tName": "足球队",
                "projectname": "",
                "projectdesc": "",
                "projectid": "",
                "imgaddress": "",
                "name": "王杰",
                "personid": 1087,
                "lastMinute": 1711698699000,
                "time": "",
                "children": [
                    "1.95",
                    "3.80"
                ],
                "stampList": [
                    17416,
                    19267
                ],
                "qipaodata": 15469,
                "errList": [
                    1,
                    1
                ],
                "path": "2-3"
                  }
            ],
    "sonlauch": {},
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| dataType | 0 训练 1 测试 |
| actName | 动作名称 |
| startTime | 开始训练时间 |
| endTime | 训练结束时间 |
| path | 路径 |
| projectid | 动作id |
| data[0].id | 训练数据id当前时间 |
| data[0].uid | 教练id |
| data[0].tid | 队伍id |
| data[0].tName | 队伍 |
| data[0].uid | 教练id |
| data[0].projectname | 项目名字，暂时此数据无用 |
| data[0].projectdesc | 项目说明，暂时此数据无用 |
| data[0].projectdesc | 项目说明，暂时此数据无用 |
| data[0].projectid | 项目id，暂时此数据无用 |
| data[0].name | 训练人员 |
| data[0].lastMinute | 暂时此数据无用 |
| data[0].time | 暂时此数据无用 |
| data[0].children | 训练数据间隔时间 |
| data[0].stampList | 训练数据光电门发出的时间 |
| data[0].qipaodata | 起跑时间 |
| data[0].errList | 是否为错误数据 1正确，0错误 错误数据标红 |
| data[0].path | 路径 |
| sonlauch | 自定义项目坐标 |

## S231-多功能综合训练架
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 24 |    S231    |  多功能综合训练架 |

[同S230](/third/deviceTestDataJson.html#s230-%E7%BB%BC%E5%90%88%E8%AE%AD%E7%BB%83%E6%9E%B6)

## T162-大腿伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 25 |    T162    |  大腿伸展训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T159-大腿蹬伸训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 27 |    T159    |  大腿蹬伸训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

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

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T157-肘关节伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 30 |    T157    |  肘关节伸展训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T166-腹部屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 31 |   T166    |  腹部屈曲训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T138-VBT训练监测系统MINI版
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 36 |   T138    |  VBT训练监测系统MINI版 |

[同T130](/third/deviceTestDataJson.html#t130-vbt%E8%AE%AD%E7%BB%83%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F)

## T170-短跑训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 38 |   T170    |  短跑训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T169-立式髋关节训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 40 |   T169    |  立式髋关节训练器 |

[同T160](/third/deviceTestDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)












