$(document).ready(function(){

$("#oinfo").click(function () {
  $("#oinfo").addClass('active');
  $("#orderinfo").css('display', 'block');
  $("#ginfo").removeClass('active');
  $("#goodsinfo").css('display', 'none');
  $("#cinfo").removeClass('active');
  $("#custominfo").css('display', 'none');
  $("#pinfo").removeClass('active');
  $("#producinginfo").css('display', 'none');
});

$("#cinfo").click(function () {
  $("#cinfo").addClass('active');
  $("#custominfo").css('display', 'block');
  $("#oinfo").removeClass('active');
  $("#orderinfo").css('display', 'none');
  $("#ginfo").removeClass('active');
  $("#goodsinfo").css('display', 'none');
  $("#pinfo").removeClass('active');
  $("#producinginfo").css('display', 'none');
});

$("#ginfo").click(function () {
  $("#ginfo").addClass('active');
  $("#goodsinfo").css('display', 'block');
  $("#oinfo").removeClass('active');
  $("#orderinfo").css('display', 'none');
  $("#cinfo").removeClass('active');
  $("#custominfo").css('display', 'none');
  $("#pinfo").removeClass('active');
  $("#producinginfo").css('display', 'none');
});

$("#pinfo").click(function () {
  $("#pinfo").addClass('active');
  $("#producinginfo").css('display', 'block');
  $("#oinfo").removeClass('active');
  $("#orderinfo").css('display', 'none');
  $("#ginfo").removeClass('active');
  $("#goodsinfo").css('display', 'none');
  $("#cinfo").removeClass('active');
  $("#custominfo").css('display', 'none');
});

// var db = openDatabase("dbs","0.1","A list of do items.",2*1024*1024);
// function log(id,name){
// var row = document.createElement("tr");
// var idCell = document.createElement("td");
// var nameCell = document.createElement("td");
// idCell.textContent = id;
// nameCell.textContent = name;
// row.appendChild(idCell);
// row.appendChild(nameCell);
// document.getElementById("racers").appendChild(row);
// }
// function doQuery(){
//   db.transaction(function(tx){
//   tx.executeSql('SELECT * from mytable',[],function(tx,result){
//   for(var i = 0; i < result.rows.length;i++ )      {
//   var item = result.rows.item(i);
//   log(item.id,item.name);
//   }
  
//   });
  
//   });
// }
// function initDatabase(){
//   var names = ["张三","李四","王五","赵六","候七","abc","def"];
//   db.transaction(function(tx){
//     tx.executeSql('CREATE TABLE IF NOT EXISTS mytable(id integer primary key autoincrement,name)');
//     for(var i = 0; i < names.length; i++)
//     {
//       tx.executeSql('INSERT INTO mytable(name) VALUES(?)',[names[i]]);
//     }
//     doQuery();
//   });

// }
// initDatabase();
});