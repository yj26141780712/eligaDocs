# mysql国际化方案说明
以机型表举例说明mysql国际化方案

## 机型表 (model)
| 字段名 |  字段类型  | 字段说明 |
|------|------|------|
|  id  | int  |  自增主键  |
|  name | varchar(20)  | 机型名称（例如 T232） |
|  description | varchar(100) | 机型描述 （例如 无轨迹功能训练器） |

## 语言表 (lang)
| 字段名 |  字段类型  | 字段说明 |
|------|------|------|
|  id  | int  |  自增主键  |
|  lang_code  | varchar(10)  |  代码 （例如 en_us） |
|  lang_name  | varchar(10)  |  名称  (例如 英语)|
|  lang_native_name  | varchar(10)  |  在系统中显示的名称  (例如 English)|
|  date_format  | varchar(20)  |  时间格式  (例如 时间格式 不同地区国家 时间显示格式不一样)|

## 机型翻译表 (model_tr)
| 字段名 |  字段类型  | 字段说明 |
|------|------|------|
|  id  | int  |  自增主键  |
| lang_id | int  | 语言表id |
| model_id | int  | 机型id |
| description_tr | varchar(100) | 机型描述字段翻译   |

