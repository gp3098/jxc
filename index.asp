<!doctype html>

<html lang="en">

<head>

<meta charset="utf-8">

<meta http-equiv="x-ua-compatible" content="ie=edge">

<meta name="viewport" content="width=device-width, initial-scale=1">

<title>联国夫人的进销存系统</title> 

<!-- bootstrap -->

<link href="css/bootstrap.min.css" rel="stylesheet">

<!--你自己的样式文件 -->

<link href="css/style.css" rel="stylesheet"> 

<!-- 以下两个插件用于在ie8以及以下版本浏览器支持html5元素和媒体查询，如果不需要用可以移除 -->

<!--[if lt ie 9]>

<script src="https://oss.maxcdn.com/libs/html5shiv/3.7.0/html5shiv.js"></script>

<script src="https://oss.maxcdn.com/libs/respond.js/1.4.2/respond.min.js"></script>

<![endif]-->

</head>

<body>
<nav >
<ul class ="nav nav-tabs">
	<li id="cinfo" class="active" ><a>客户信息</a></li>
	<li id="ginfo" ><a>商品信息</a></li> 
	<li id="oinfo" ><a href="#">订单信息</a></li>
	<li id="pinfo"><a>报单信息</a></li>    
<ul>
</nav>

<article class="container"  id="orderinfo" style="display:none;">
<h1>订单信息</h1>
<table class="row" id= "racers" border="1" cellspacing = "0" style= "width:100%;">
	<tbody>
	<th>Id</th>
	<th>Name</th>	
	</tbody>
	
</table>

</article>

<article class="container" id="custominfo" style="display:block;">
<!-- #include file = "custominfo.asp" -->
</article>

<article class="container" id="goodsinfo" style="display:none;">
	<table class ="table row">
		<tbody>
			<th class="col-lg-2 text-center">货号</th>
			<th class="col-lg-2 text-center">类目</th>
			<th class="col-lg-2 text-center">填充物</th>
			<th class="col-lg-2 text-center">批发价</th>
			<th class="col-lg-2 text-center">图片</th>
			<tr>
				<td class="text-center">122</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center">羽绒</td>
				<td class="text-center">800</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img122">122图片</button>
				<img src="img/122.jpg" id="img122" class="collapse img-rounded img-responsive"></td>
			</tr>	
			<tr>
				<td class="text-center">156</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center"></td>
				<td class="text-center">900</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img156">156图片</button>
				<img src="img/156.jpg" id="img156" class="collapse img-rounded img-responsive"></td>
			</tr>
			<tr>
				<td class="text-center">122</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center">羽绒</td>
				<td class="text-center">800</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img122">122图片</button>
				<img src="img/122.jpg" id="img122" class="collapse img-rounded img-responsive"></td>
			</tr>	
			<tr>
				<td class="text-center">122</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center">羽绒</td>
				<td class="text-center">800</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img122">122图片</button>
				<img src="img/122.jpg" id="img122" class="collapse img-rounded img-responsive"></td>
			</tr>	
			<tr>
				<td class="text-center">122</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center">羽绒</td>
				<td class="text-center">800</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img122">122图片</button>
				<img src="img/122.jpg" id="img122" class="collapse img-rounded img-responsive"></td>
			</tr>	
			<tr>
				<td class="text-center">122</td>
				<td class="text-center">皮羽绒</td>
				<td class="text-center">羽绒</td>
				<td class="text-center">800</td>
				<td class="text-center">
				<button type="button" class="btn btn-primary" data-toggle="collapse" data-target="#img122">122图片</button>
				<img src="img/122.jpg" id="img122" class="collapse img-rounded img-responsive"></td>
			</tr>	
		</tbody>	
	</table>
</article>
<article class="" id="producinginfo" style="display:none;">
	<h1>报单信息</h1>
</article>
<!-- 如果要使用bootstrap的js插件，必须先调入jquery -->
<!--
<script src="http://64/jquery/1.9.0/jquery.min.js"></script>
-->

<script src="js/jquery-3.1.0.min.js"></script>

<!-- 包括所有bootstrap的js插件或者可以根据需要使用的js插件调用　-->
<!--
<script src="http://maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script> 
-->
<script src="js/bootstrap.min.js"></script> 
<script src="js/js.js"></script>
</body>

</html>
