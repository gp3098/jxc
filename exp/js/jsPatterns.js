$(function () {

	//javascript模式的练习
	//单一的var 可以统一定义局部变量

//for循环定义i顺便定义最大数不要每次都查找循环条件
//for 循环同0比较比同非0数字比较效率高
//for-in遍历对象遇到原型链属性时要用hasOwnProperty()
//构造函数的首字母大写
//var adam = new Person();
var i,myarray = [];
for(i = myarray.length; i--;){
	//处理myarray[i]
}
var myArray = [],
	i = myArray.length;
	while(i--){
		//处理myArray[i];
	}
//对象
var man = {
	hands:2,
	legs:2,
	heads:1
};
//代码的其他部分
//将一个方法添加到所有对象上
if(typeof Object.prototype.clone === "undefined"){
	Object.prototype.clone = function(){};
}
//1.
//for-in循环
for(var i in man){
	if(man.hasOwnProperty(i)){//filter
		console.log(i, ":" , man[i]);
	}
}
console.log("\n反模式：");
/*
控制台中的结果:
hands : 2
legs : 2 
heads : 1
*/
//2.
//反模式
//不实用hasOwnProperty()进行检查后使用for-in 循环的结果
for(var i in man){
	console.log(i,":",man[i]);
}
$htmlWords = $("<p></p>").text('some text');
$("body").append($htmlWords);

//一个全局变量
	var MYAPP =MYAPP || {};
	MYAPP.namespace = function(ns_string){
		var parts = ns_string.split('.'),
		parent = MYAPP,
		i;

		//剥离最前面的冗余全局变量
		if(parts[0] === "MYAPP"){
			parts = parts.slice(1);
		}
		for (i = 0; i < parts.length; i += 1){
			//如果它不存在，就创建一个属性
			if (typeof parent[parts[i]] === "undefined") {
				parent[parts[i]] ={};
			}
			parent = parent[parts[i]];
		}
		return parent;
	};
	var module2 = MYAPP.namespace('MYAPP.modules.module2');
	module2 === MYAPP.modules.module2;
	//忽略最前面的‘MYAPP’
	MYAPP.namespace('modules.modules1');
	MYAPP.namespace('once.upon.a.time.there.was.this.long.nested.property')




var consoles = {
	//if()
// };
// console.log(window);
// for(var i in window){
// 	var t;
// 	t += (window[i]+ "<br />");
// 	$htmlWords.html(t); 
 }
console.log("判断man对象的类别：",typeof man);
console.log("判断man是否属于Object实例：",man instanceof Object);
/*
控制台中的结果
hands:2
legs:2
heads:1
clone:function()
*/

//自定义构造函数
var Person = function (name) {
	//使用对象字面量模式创建一个新对象
	//var this = {};

	//向this添加属性和方法
	this.name = name;
	this.say = function(){
		return "I am " + this.name;
	};

	//return this;
	var useThat = function()
	{
		//使用that
	function Yumi(){
		  var that={};
		  that.tastes = "yumi";
		  return that;
	}
	var ym1 = new Yumi(),
	    ym2 = Yumi(),
	    $sp = $("<span></span>");
	    $sp.text(ym1.tastes + "<br >" +ym2.tastse);
	    $("body").append($sp);
	}
		
};
var tyfun = function( callfun ){
	try{
		callfun();
	}
	catch(e){
		$("body").text(e.toString());
	}

};
tyfun(usethat);


});

$(function(){
	//模型
	//调试代码都放在一个函数里
	
	/**
	*编码约定
	*缩进:4个空格
	*开放的大括号放在编码行末
	*应该一直使用分号;
	*空格应该经常使用方便阅读分隔代码块
	*命名约定
	*构造函数的首字母大写
	*驼峰命名法
	*构造函数用大驼峰命名法MyConstructor()
	*函数和方法名用小驼峰命名法myFunction()
	*变量名或者属性用小驼峰命名法或者全部用小写中间用_隔开my_first_name
	*常量和全局变量一般用全部字母大写表示MAX或者如GROBLE
	*私有成员函数私有成员方法私有成员属性前面加下划线_表示，例如_private
	*使用下划线结尾表示保护的变量或者方法protected_()
	*m_iSize;m_pBuffer这样的表示方法m表示成员变量下划线后面接数据类型再接变量名
	*/
	
	/**
	*学会使用注释
	*注释标题(主要写一个函数的作用)
	*内容描述
	*注释格式为:
	*@注释类型 被注释变量名 描述信息
	*@module myapp
	*@namespace MYAPP
	*@constructor
	@method sum 两数相加
	*@param  {number}  a 第一个加数
	*@param  {number}  b 第二个参数
	*@return {number}  返回值是两数之和
	*/
	
	//正式发布时精简代码
	//运行JSLint
	
	/**
	*******第三章 字面量和构造函数**************
	*来自构造函数的对象(内置构造函数Data()、String()、Object()等)
	*************自定义构造函数**************
	*var adam = new Person("Adam");
	*adam.say();//输出结果为"I am Adam"
	*****************下面是Person构造函数的定义：*****
	*var Person = function(name){
	*	this.name = name;
	*	this.say = function(){
	*		return "I am " + this.name;
	*	};
	*};
	*最好将say添加到Person类的原型中
	*Person.prototype.say = function(){
	*	return "I am " + this.name;
	*};
	*******************使用that**************
	*function Waffle(){
	*	var that = {};
	*	that.tastes = "yummy";
	*	return that;
	*}
	*function Waffle(){
	*	return {
	*		tastes:"yummy"
	*	};
	*}
	*这个模式的弊端在于会丢失原型链，任何添加到Waffle()原型的成员，对于对象来说都不可用。
	****************************自调用构造函数*************
	*function Waffle(){
	*	if(!(this instanceof Waffle)){
			return new Waffle();
	*	}
	*	this.tastes = "yummy";
	*}
	*Waffle.prototype.wantAnother = true;
	*测试调用
	*var first = new Waffle(),
	*	 second = Waffle();
	*
	*console.log(first.tastes);	//输出"yummy"
	*console.log(second.tastes);//输出"yummy"
	*console.log(first.wantAnother);//输出true
	*console.log(second.wantAnother);//输出true
	*另一种监测实例对象的通用方法是将其与arguments.callee进行比较：
	*if(!(this instanceof arguments.callee)){
	*	return new arguments.callee();
	*}
	*/
	/**
	*********************JSON
	*要记住的就是几个JSON的转化函数
	*输入一个JSON字符串
	*var jstr = '{"mykey":"my value"}';
	*var data = JSON.parse(jstr);
	*/
	

	/**
	****************错误对象
	*try{
	*	//发生意外的事情，抛出一个错误
	*	throw{
	*		name:"MyErrorType",	//自定义错误类型
	*		message: "oops",
	*		extra:"This was rather embarrassing",
	*		remedy:genericErrorHandler		//指定应该处理该错误的函数
	*		}；
	*}catch(e){
	*	//通知用户
	*	alert(e.message);//输出"oops"
	*	//优美的处理错误
	*	e.remedy();	//调用函数genericErrorHandler()
	*}
	*/

	/**
	*创建一个用于调用每章内容的调试器
	*
	*/
	
	/**
	*
	*
	*/
	
	var debugfunction = {
			words:"abc",
			say:function(){
				
			}
		};
	var tryfun = function(callbackfuc){
		try{
		callbackfuc.say();
		}catch(e){document.write(e.toString());}
	};
	tryfun(debugfunction);
});