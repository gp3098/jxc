<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!-- #include file = "json.asp"  -->
<!-- #include file = "conn.asp"  -->

<% response.ContentType = "text/json" %>
<% Response.Charset = "UTF-8" %>

<%
'多重嵌套的JSON,要使用Dictionary才能实现
set j = new json
j.toResponse = false
set r = server.createobject("scripting.dictionary")
set b = server.createobject("scripting.dictionary")
set c = server.createobject("scripting.dictionary")
set d = server.createobject("scripting.dictionary")
b.add "id",1
b.add "name","张三"
b.add "phoneNumber","123456789"
b.add "companyName","张三的公司"
b.add "address","张三的住址"
b.add "cID","330321548651"
c.add "id",2
c.add "name","李四"
c.add "companyName","李四的公司"
c.add "address","李四的住址"
c.add "cID","15648481561"
c.add "phoneNumber","1564598465"
v = array(b,c)

a = j.toJSON(empty,v,false)
'response.write a

conn.open dbpath
set rs = server.createobject("adodb.recordset")
sqlstr = "select id,cname,companyName,phoneNumb,caddress,idcode,telnumb from customers"
rs.open sqlstr,conn,0,1
'v = array(rs)
'aa = j.toJSON([],rs,false)
set ajson = new json
ajson.toResponse = false

aspjson = ajson.toJSON([],rs,true)
response.write aspjson


%>
<%
rs.close
set rs=nothing
conn.close
set conn = nothing
%>