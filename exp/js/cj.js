$(function () {
	
	console.log("hello");
	$("ajaxid")click(function(event) {
		$.post('..addcinfo.asp', {
			cname : 'value1' ,
			phonenum : 'value1',
			caddress : 'value1' ,
			ccomname : 'value1' ,
			telnum : 'value1',
			idcode : 'value1'
			},
			function(data, textStatus, xhr) {
			alert("数据: \n  " + data + "\n 状态： " + textStatus );			
			/*optional stuff to do after success */


		});
		
	});
});