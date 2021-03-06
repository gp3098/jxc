$(function() {
  //1.初始化Table
  var oTable = new TableInit();
  oTable.Init();
  //2.初始化Button的点击事件
  var oButtonInit = new ButtonInit();
  oButtonInit.Init();
});

var TableInit = function() {
  var oTableInit = new Object();
  //初始化Table
  oTableInit.Init = function() {
    $('#tbcustomers').bootstrapTable({
      url: '../exp/getc.asp', //请求后台的URL(*)
      method: 'get', //请求方式(*)
      contentType: "application/json",
      dataType: "json",
      toolbar: '#toolbar', //工具按钮用哪个容器
      striped: true, //是否显示行间隔色
      cache: false, //是否使用缓存，默认为true，所以一般情况下需要设置一下这个属性（*）
      pagination: false, //是否显示分页(*)
      sortable: false, //是否启用排序
      sortOrder: "asc", //排序方式
      queryParams: oTableInit.queryParams, //传递参数(*)
      sidePagination: "client", //分页方式：client客户端分页，server服务端分页(*)
      pageNumber: 1, //初始化加载第一页，默认第一页
      pageSize: 20, //每页的记录行数(*)
      pageList: [20, 50, 100, 200, 500], //可供选择的每页的行数(*)
      search: true, //是否显示表格搜索，此搜索是客户端搜索，不会进行服务端，意义不大
      undefinedText: '',
      strictSearch: true,
      showColumns: true, //是否显示所有的列
      showRefresh: true, //是否显示刷新按钮
      minimumCountColumns: 2, //最少允许的列数
      clickToSelect: true, //是否启用点击选中行
      height: 500, //行高，如果没有设置height属性，表格自动根据记录条数决定表格高度
      uniqueId: "ID", //每一行的唯一标识，一般为主键列
      showToggle: true, //是否显示详细视图和列表视图的切换按钮
      cardView: false, //是否显示详细视图
      detailView: false, //是否显示父子表
      locale: 'zh-CN', //
      columns: [{
        field: 'select',
        title: '全选',
        checkbox: true,
        width: 20,
        align: 'center',
        valign: 'middle'
      }, {
        field: 'id',
        title: '客户ID'
      }, {
        field: 'name',
        title: '客户姓名',
        editable: true
      }, {
        field: 'companyName',
        title: '公司名称',
        editable: true
      }, {
        field: 'phoneNumber',
        title: '手机号码',
        editable: true
      }, {
        field: 'address',
        title: '地址',
        editable: true
      }, {
        field: 'cID',
        title: '身份证信息',
        editable: true
      }],
      data: [{
        id: 1,
        name: '张三',
        phoneNumber: '18657689535',
        address: '浙江省温州市永嘉县舞酒庄',
        cID: '330324198965254152'
      }, {
        id: 2,
        name: '李四',
        phoneNumber: '56126515',
        address: '浙江省用现金'
      }, {

      }],
      onEditablesave: function(field, row, oldValue, $el) {

      }
    });
  };

  //得到查询的参数
  oTableInit.queryParams = function(params) {
    var temp = { //这里的键的名字和控制器的变量名必须一致，这边改动，控制器也需要改成一样的
      limit: params.limit, //页面大小
      offset: params.offset //页码
    };
    return temp;
  };
  return oTableInit;
};
var ButtonInit = function() {
  var oInit = new Object();
  var postdata = {};
  oInit.Init = function() {
    //初始化页面上的按钮事件
  };
  return oInit;
};