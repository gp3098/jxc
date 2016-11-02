<%@language = "vbscript" codepage = "65001" %>
<% response.charset = "utf-8" %>
<meta charset="utf-8">

<%
 dim name ,url
 name = request.form("name")
 url = request.form("url")
 response.write("网站名字是：" + name)
 
 response.write("<br />")
 response.write("URL地址：" +  url)
%>