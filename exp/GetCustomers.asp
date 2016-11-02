
<%@LANGUAGE="VBSCRIPT" CODEPAGE="65001"%>
<% Response.Charset = "UTF-8" %>
<%
username="tom"
sex="男"
age="18"
'response.write "姓名："+username +"<br/>"+"性别："+sex +"<br/>"+"年龄："+age
response.write "{""a"":""" & username & """,""b"":""" & sex & """,""c"":""" & age & """}"
%>