# 面板请求最新程序

请求地址请查阅[接口文档](https://console-docs.apipost.cn/preview/1b56b31af06fa3dc/389241c604fbcd74?target_id=829ed474-4220-42d7-b339-694db7807b87)

## 方法传参

| 参数  | 必填  | 说明                                    |
|------|------|----------------------------------------|
|model  | 是  | 机型代码 例如 1:T232 |
|belong | 否 | 程序归属  例如 host: 表示主机  panel:表示面板 |
|type |否  | 程序类型   例如 release: 正式通道 test:测试通道 |
|sn |否  | 设备SN   例如 T12000P30010  |

## 方法返回

1.传参不包含sn,根据model,belong,type找到最新程序,并返回
```json
{
	"code": 200,
	"message": "ok",
	"obj": [
		{
			"id": 2554,
			"name": "T232",
			"belongName": "QT面板",
			"belongValue": "panel",
			"versionName": "测试版",
			"versionValue": "test",
			"version_num": "4.3.33",
			"version_date": "2023-09-20",
			"remark": "auto commit at 2023-09-20 14:42:02",
			"filename": "T232-panel-test-4.3.33.tgz",
			"url": "http://ilive.eliga.cn/eliga/download/version/T232-panel-test-4.3.33.tgz"
		}
    ]
}
```

2.传参包含sn  
2.1 还是按1步骤找到主机型最新程序  
2.2 根据model找到子机型(T2011),如没有找到子机型，返回2.1步骤的结果  
2.3 如果找到子机型，根据子机型,model,belong和type 找到子机型最新程序，并替换2.1步骤的结果,并返回  

返回结果同1，多了childName表示为子机型程序  
```json
{
	"code": 200,
	"message": "ok",
	"obj": [
		{
			"id": 2554,
			"name": "T232",
            "childName":"T23201", // 子机型名称
			"belongName": "QT面板",
			"belongValue": "panel",
			"versionName": "测试版",
			"versionValue": "test",
			"version_num": "4.3.33",
			"version_date": "2023-09-20",
			"remark": "auto commit at 2023-09-20 14:42:02",
			"filename": "T232-panel-test-4.3.33.tgz",
			"url": "http://ilive.eliga.cn/eliga/download/version/T232-panel-test-4.3.33.tgz"
		}
    ]
}
```



