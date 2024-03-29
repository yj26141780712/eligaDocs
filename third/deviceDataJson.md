# 设备训练数据结构

设备的数据结构

## T130-VBT训练监测系统 

| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 0 |    T130    |  VBT训练监测系统 |


数据例子:
```json
{
    "modeName": "自由测试",
    "modeId": 1,
    "teamName": "xx队伍",
    "name":  "xx名字",
    "startTime": "2024-03-29 14:16:15", 
    "endTime": "2024-03-29 14:16:22",
    "weightForce": "20",
    "numberGroups": "5", 
    "perform": 20, 
    "trainTime": "00:55",
    "direction": "先向心",
    "actionName": "自由模式",
    "actionId": 0,
    "data": [
                  {
                    "maxPower": 275,
                    "maxSpeed": 1.01,
                    "avgPower": "135.3",
                    "avgSpeed": "0.67",
                    "maxLoad": 34.2,
                    "ecc": 1,
                    "energy": 67.64599999999999,
                    "direction": 1,
                    "indexGroup": "0-1711692975236",
                    "indexId": 0,
                    "chart":[0,1,2,3,4,5,6,7]
                   }
                 ],
    "reportData": [],
    "reportDataEcc": [],
    "curveData": {},
    "videoPathAll": [],
    "videoCount": [],
    "videoRecordTime": [],
    "videoEndTime": [],
    "videoStartTime": [],
    "videoVisibleValue": [],
}
```
参数说明:
| 字段 | 说明                             |
|---------|----------------------------------|
| modeName   | 测试模式 |
| modeId | 模式ID |
| teamName | 测试队伍 |
| name | 名字 |
| startTime | 开始时间 |
| endTime | 结束时间 |
| weightForce | 重量设置 |
| numberGroups | 组数 |
| perform | 次数 |
| trainTime | 训练时间 |
| direction | 先向心，先离心 |
| actionName | 动作名称 |
| data[0].maxPower | 峰值功率，单位W |
| data[0].maxSpeed | 峰值速度，单位m/s |
| data[0].avgPower | 平均功率，单位W |
| data[0].avgSpeed | 平均速度，单位m/s |
| data[0].maxLoad | 峰值力量，单位kg |
| data[0].ecc | 1 向心 2 离心 |
| data[0].direction | 1 向心 2 离心 |
| data[0].indexGroup | 本次训练id，由"0-"和开始训练时间戳组成 |
| data[0].indexId | 曲线编号，从0开始 |
| data[0].chart | 曲线数据，数据格式为五个为一组，时间(ms)+位置(mm)+功率(W)+速度(m/s)+轨迹图横坐标sinx(mm)+轨迹图纵坐标cosx(mm)+角度(°) |
| reportData | 数据格式为四个为一组，向心峰值速度+向心平均速度+向心最大功率+向心平均功率 |
| reportDataEcc | 数据格式为四个为一组，离心峰值速度+离心平均速度+离心最大功率+离心平均功率 |
| curveData | 曲线模型，面板显示数据 |
| videoPathAll | 视频保存地址 |
| videoCount | 视频次数 |
| videoRecordTime | 视频录制时间 |
| videoEndTime | 视频结束时间 |
| videoStartTime | 视频开始时间 |
| videoVisibleValue | 视频是否显示标记值 |

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

## S230-综合训练架

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
	"dataType": 0, //0训练1测试
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
|  modeName  | 0 自由骑 	1 时间骑 2 距离骑 3 热量骑 4 心率骑 5 5s峰值功率 
			   6 3分钟有氧  7 次大力量爬升 8 6s峰值功率 9 10分钟渐进 
			   10 最大力量爬升 11 30s测试 12 FTP渐进 13 坡度变化 14 最大摄氧量 | 
|  modeId 	 | 0 模式ID |
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

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T120-冲刺训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 7 |    T120    |  冲刺训练器 |

数据例子:
```json
{
    "dataType": 0, //0训练1测试
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
12312
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

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

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

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T157-肘关节伸展训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 30 |    T157    |  肘关节伸展训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T166-腹部屈曲训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 31 |    T166    |  腹部屈曲训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T138-VBT训练监测系统MINI版
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 36 |   T138    |  VBT训练监测系统MINI版 |

[同T130](/third/deviceDataJson.html#t130-vbt%E8%AE%AD%E7%BB%83%E7%9B%91%E6%B5%8B%E7%B3%BB%E7%BB%9F)

## T170-短跑训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 38 |   T170    |  短跑训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)

## T169-立式髋关节训练器
| 设备类型代码（deviceType）  | 设备类型 | 设备名称
|-------|--------|----------|
| 40 |   T169    |  立式髋关节训练器 |

[同T160](/third/deviceDataJson.html#t160-%E5%A4%A7%E8%85%BF%E5%86%85%E6%94%B6%E8%AE%AD%E7%BB%83%E5%99%A8)












