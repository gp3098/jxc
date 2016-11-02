<%
set conn = server.createobject("adodb.connection")
conn.provider = "microsoft.jet.oledb.4.0"
dbpath = server.mappath("jxc.mdb")
%>