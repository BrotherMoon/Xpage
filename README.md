# xpage分页插件使用方法
1. 引入xpage.css，xpage.js（注意该插件依赖jquery），所以在引入xpage.js之前要引入jquery。
**example：**
```html
<head>
    	<link rel="stylesheet" type="text/css" href="<%=path%>/resources/common/css/xpager.css">
</head>
<body>
	....
	....
	<script src="<%=path%>/resources/common/js/jquery.min.js"></script>
	<script src="<%=path%>/resources/common/js/xpager.js"></script>
</body>
```
2. 调用方法
```javascript
//必填参数size（每页显示几条数据）
//可选参数url（需要访问的controler的url）
$(function() {
			$('.x-pager').pager({
				size : 3,
				url : '<%=path%>/scoreAnswer/index'
			});
		})
```

3. 出现问题了请联系徐文超。QQ：842390367
