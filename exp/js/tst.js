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
	**********自调用构造函数*************
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
	*******消除术语歧义
	*命名函数表达式
	*var add = function add(a ,b ){
		*  return a + b;
	*}
	*未命名函数表达式(匿名函数或函数表达式)
	*var add = function(a,b){
		*  return a + b;
	*}
	*函数声明中不需要分号结尾，函数表达式需要分号结尾。
	*************声明VS表达式：名称和变量声明提升
	*声明变量和实现都会被提升：函数声明
	*变量被提升但是实现并未被提升：函数表达式
	*/
	
	/**
	**************回调模式
	*function writeCode(callback){
	*	//执行一些事务。。。
	*	callback();
	*	//...
	*}
	*writeCode(introduceBugs);
	*关键在于函数作为参数传递的时候不带括号，表示传递引用。在调用执行的时候带括号。
	*************回调与作用域
	*简单的回调：
	*callback(parameters);
	*稍微复杂的回调函数：
	*回调的并不是一次性匿名函数或全局函数，而是对象的方法。
	*如果回调方法使用this来引用它所属的对象：
	*var myapp = {};
	*myapp.color = "green";
	*myapp.paint = function(node){
	*	node.style.color = this.color;
	*};
	*
	*函数findNodes()执行以下语句：
	*var findNodes = function(callback){
	*	//...
	*	if(typeof callback === "function"){
	*		callback(found);
	*	}
	*	//...
	*};//没有达到预期效果
	*
	*var findNodes(myapp.paint,myapp);
	*var findNodes = function(callback,callback_obj){
	*	if(typeof callback === "function"){
	*		callback.call(callback_obj,found);
	*	}
	*	//...
	*};
	***********************自定义函数
	*var scareMe = function(){
	*	alert("Boo!");
	*	scarMe = function(){
	*		alert("Double boo!");
	*	}
	*}
	*使用自定义函数
	*scareMe();	//输出Boo!
	*scareMe();//输出Double boo!
	*/

	/**
	**********************即时函数
	*即时函数示例：
	*(function(){
	*	alert("watch out!");
	*}());
	*即时函数的参数：
	*(function(who,when){
	*	console.log("I met "+ who + "on "+ when);
	*}("Joe Black",new Date()))
	*注意不应该传递过多参数给即时函数会造成阅读负担。
	*即时函数的返回值：
	*var result = (function(){
	*	return 2 + 2 ;
	*})();
	******进一步演化即时函数的返回值是一个函数
	*var getResult = (function(){
	*	var res = 2 + 2;
	*	return function(){
	*		return res;
	*	};
	*}());
	*/
	
	/**
	***********即时对象初始化
	*({
	*	//在这里可以定义设定值
	*	//又名配置常数
	*	maxwidth:600,
	*	maxheight:400,
	*
	*	//还可以定义一些实用的方法
	*	gimmeMax:function(){
	*		return this.maxwidth + "x" + this.maxheight ;
	*	},
	*
	*	//初始化
	*	init:function(){
	*		console.log(this.gimmeMax());
	*		//更多初始化任务。。。
	*	}
	*}).init();
	*运行方式可以是如下：
	*({...}).init();
	*({...}.init());
	*
	*/
	
	/**
	*初始化分支
	*	//接口
	*	var utils = {
	*	addListener:null,
	*	removeListener:null
	*};
	*	//实现
	*	if(typeof window.addEventListener === 'function'){
	*		utils.addListener = function(el,type,fn){
	*			el.addEventListener(type, fn, false);
	*		};
	*	if(typeof window.addEventlistener === 'function'){
	*		utils.removeListener = function(el, type, fn){
	*			el.removeListener(type, fn, false);
	*		};
	*	}else if (typeof document.attachEvent === 'function'){
	*	//判断为IE浏览器
	*		utils.addListener = function(el,type,fn){
	*			el.attachEvent('on' + type , fn);
	*		};
	*		utils.removeListener = function(el,type,fn){
	*			el.detachEvent('on' + type,fn);
	*		};
	*	}else{ //更早版本的浏览器
	*		utils.addListener = function(el,type,fn){
	*			el['on'+type] = fn;
	*		};
	*		utils.removeListener = function(el,type,fn){
	*			el['on'+type] = null;
	*		};
	*	}
	*/
	
	/**
	*函数属性--备忘模式
	*var myFunc = function(){
	*	//arguments.callee表示引用该函数名称
	*	// var f = arguments.callee;
	*	var cachekey = JSON.stringify(Array.prototype.slice.call(arguments)),
	*		result;
	*	if ( !myFunc.cache[cachekey]){
	*		result = {};
	*		//...开销很大的操作...
	*		myFunc.cache[cachekey] = result;
	*	}
	*	return myFunc.cache[cachekey];
	*};
	*	//缓存存储
	*	myFunc.cache = {};
	*/
	
	/**
	**************配置对象
	*var conf = {
	*	username:"batman",
	*	first:"Bruce",
	*	last:"Wayne"
	*};
	*addPerson(conf);
	*/
	
	/**
	****************Curry*************
	********函数应用
	*	//定义函数
	*	var sayHi = function(who){
	*		return "Hello" + (who ? "," + who : "") + "!" ;
	*};
	*	//调用函数
	*	sayHi();  //输出 "Hello"
	*	sayHi('world'); //输出"Hello , world!"
	*	//应用函数
	*	sayHi.apply(null,["hello"]);//输出"Hello , hello!"
	*当函数是第一个对象的方法时，此时不能传递null引用，对象将成为apply()的第一个参数：
	*	var alien = {
	*		sayHi:function(who){
	*			return "Hello" + (who ? " ," + who : "") + "!";
	*		}
	*	};
	*	alien.sayHi('world');//输出"Hello,world!"
	*	sayHi.apply(alien,["humans"]);//输出"Hello , humans!"	
	*apply()参数是一个数组，call()参数是一个元素
	***********部分应用
	*部分应用会得到另一个新函数，假设有两个参数，替换了一个参数后并不会返回结果，而是返回一个函数
	*如上的过程称为是Curry化
	*	函数定义举例
	*	function add(x,y){
	*		return x + y;
	*	}
	*	//完全应用
	*	add.apply(null,[5,4]);//9
	* curry化的add()函数
	*	function add(x,y){
	*		var oldx = x, oldy = y;
	*		if(typeof oldy === "undefined"){//部分
	*			return function(newy){
	*				return oldx + newy;
	*			};
	*		}
	*		//完全应用
	*		return x + y;
	*	}
	*	//测试
	*	typeof add(5); //输出 "function"
	*	add(3)(4); //7
	*	//创建并存储一个新函数
	*	var add2000 = add(2000);
	*	addd2000(10); //输出2010
	******************第二版本简易化的Curry化
	*	function add(x,y){
	*		if(typeof y === "undefined"){//部分
	*			return function(y){
	*				return x + y;
	*			};
	*		}
	*		//完全应用
	*		return x + y;
	*	}
	***************通用curry化函数示例：
		function schonfinkelize(fn){
			var slice = Array.prototype.slice,
				stored_args = slice.call(arguments,1);
			return function(){
				var new_args = slice.call(arguments),
					args = stored_args.concat(new_args);
				return fn.apply(null,args);
			};
		}
	*/
	
	/**
	**********************第五章 对象创建模式**********************
	***********命名空间模式
	*一个全局变量
	*	var MYAPP = {};
	*
	*	构造函数
	*	MYAPP.Parent = function(){};
	*	MYAPP.Child = function(){};
	*
	*	一个变量
	*	MYAPP.some_var = 1;
	*	一个对象容器
	*	MYAPP.modules = {};
	*	嵌套对象
	*	MYAPP.modules.module1 = {};
	*	MYAPP.modules.module1.data = {a:1,b:2};
	*	MYAPP.modules.module2 = {};
	***********通用命名空间函数
	*	使用命名空间函数
	*	MYAPP.namespace('MYAPP.modules.module2');
	*	相当于以下代码
	*	var MYAPP = {
	*		modules:{
	*			module2:{}
	*		}
	*	};
	*	命名空间函数的实现
	*	var MYAPP = MYAPP || {};
	*	MYAPP.namespace = function(ns_string){
	*		var parts = ns_string.split('.'),
	*			parent = MYAPP,
	*			i;
	*	//剥离最前面的冗余全局变量
	*		if(parts[0] === "MYAPP"){
	*			parts = parts.slice(1);
	*		}
	*		for(i = 0; i < parts.length; i +=1){
	*			//如果它不存在，就创建一个属性
	*			if(typeof parent[i] === "undefiend"){
	*				parent[parts[i]] = {};
	*			}
	*			parent = parent[parts[i]];
	*		}
	*		return parent;
	*	};
	**********声明依赖关系
	*	
	*/
	
	/**
	*
	*
	*/
	
	/**
	*
	*
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