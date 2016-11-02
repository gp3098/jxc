<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<!-- #include file = "json.asp"  -->
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





a = j.toJSON([],v,false)

'response.write "[{}]"
response.write a



'c:{x:5,y:6,z:11}
'b:{event:"mouse",data:c}
'r:{success:true,result:b}'
'11
'data: [{
'          id: 1,
'          name: '张三',
'          phoneNumber: '18657689535',
'          address:'浙江省温州市永嘉县舞酒庄',
'          cID:'330324198965254152'
'      }, {
'          id: 2,
'          name: '李四',
'          phoneNumber: '56126515',
'          address:'浙江省用现金'
'      }]
'response.write "姓名："+username +"<br/>"+"性别："+sex +"<br/>"+"年龄："+age
'response.write "{""a"":""" & username & """,""b"":""" & sex & """,""c"":""" & age & """}"
%>