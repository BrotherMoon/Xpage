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
(1)在想要放置分页插件的页面加入如下的div，page属性填写从后台接口中获取的当前页数，totalPage填写总页数
```html
<div class="x-pager" page="${postsPage.pageNo}" totalPage="${postsPage.pages}"></div>
```
(2)js中调用
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
