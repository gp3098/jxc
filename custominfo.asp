<!-- #include file = "conn.asp" -->
<meta charset="utf-8" http-equiv="Content-Type" content="text/html">
<% 

conn.open dbpath
set rs = server.createobject("adodb.recordset")
rs.open "select cname,phonenum,caddress,ccomname,telnum,idcode from customers",conn

str = rs.getstring(,,"</td><td>","</td></tr><tr><td>","&nbsp;")
%>
<h1 class="text-center">客户信息</h1>

<table class="table row table-responsive table-hover"  border="1" cellspacing = "0" style= "width:100%">
	<tbody>
	<tr>
		<th class="col-md-2 text-center">客户姓名</th>
		<th class="col-md-2 text-center">手机号码</th>	
		<th class="col-md-2 text-center">地址</th>
		<th class="col-md-2 text-center">公司名称</th>
		<th class="col-md-2 text-center">座机号码</th>
		<th class="col-md-2 text-center">身份证</th>
	</tr>
	<tr>
		<td><% = str %></td>
	</tr>
	<tr>
		<td></td>
	</tr>
	<tr>
		<td class="text-center"><a href="addcinfo.asp">+</a></td>
		<td class="text-center"><a href="decreasecinfo.asp">-</a></td>

	</tr>
	</tbody>
	
</table>
<%
response.write("<h3>记录集页数：" & rs.pagesize & "</h3>")
response.write("<h3>当前记录所在页码：" & rs.absolutepage & "</h3>")
response.write("<h3>当前页数：" & rs.pagecount & "</h3>")
%>
<%
rs.close
set rs=nothing
conn.close
set conn = nothing
%>