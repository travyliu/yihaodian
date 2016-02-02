//1兼容函数
//功能：IE8中不支持.getElementsByClassName();
//参数说明：classname:想找的类名 obj:
function getClass(classname,obj){
      	var obj=obj||document
      	if(obj.getElementsByClassName){
      		return obj.getElementsByClassName(classname);
      	}else{
      		var all=obj.getElementsByTagName("*");
      		var arr=[];
      		for(var i=0;i<all.length;i++){
      			if(cheakRel(all[i].className,classname)){
      				arr.push(all[i]);
      			}
      		}
      		return arr;
      	}
      }
       //str:多个类名集合以后的字符串
       //val:想找的类名
      function cheakRel(str,val){
      	var newarr=str.split(" ");
      	for(var j=0;j<newarr.length;j++){
      		if(newarr[j]==val){
      			return true;
      		}
      	}
         return false;
      };



/************************************************/
//2获取与设置纯文本的兼容问题
//obj：那个对象用这个函数  val：接受第二个参数，表示设置一个文本
                                    

  function getText(obj,val){
   if(val==undefined){//如果val为undefined，表示只有一个参数，这个函数实现的功能是获取文本
      if(obj.innerText){//如果为真是IE8浏览器
         return obj.innerText;
      }else{
         return obj.textContent;
      }
   }else{
      if(obj.innerText||obj.innerText==""){
      //IE8中，当浏览器有innerText这个属性时，或者当对象的内容为空字符串时，都可以给这个对象设置文本
       
         return obj.innerText=val;
      }else{
         return obj.textContent=val;
      }

   }
  };


  /***************************************************/
  //3解决样式获取
  function getStyle(obj,attr){
   if(obj.currentStyle){
      return obj.currentStyle[attr];//获取时attr的实参需加引号
   }else{
      return getComputedStyle(obj,null)[attr];
   }
  }; 


/***************************************************/
function $(select,obj){
  obj=obj||document;
   if(typeof select=="string"){                         
    //去掉前后的空格
    select=select.replace(/^\s*|\s*$/g,"");
      if(select.charAt(0)=="."){
         return getClass(select.slice(1),obj);
      }else if(select.charAt(0)=="#"){
         return obj.getElementById(select.slice(1));
      }else if(/^[a-z|1-6]{1,10}$/g.test(select)){return obj.getElementsByTagName(select);
      }
   }else if(typeof select=="function"){
    //表示是一个函数
    window.onload=function(){
      select();
    }
   }
};

/*****************************************/
//getChilds(parent)
//"a"  获取元素子节点的兼容函数
//"b"  获取元素+文本节点
//原理：先获取所有的儿子，然后根据节点的类型
 function getChilds(parent,type){
  var type=type||"a";
  var childs=parent.childNodes;
  //获取所有儿子
  var arr=[];
  for(var i=0;i<childs.length;i++){
    if(type=="a"){
      if(childs[i].nodeType==1){
          arr.push(childs[i]);
        }
      }else if(type=="b"){
        if(childs[i].nodeType==1||(childs[i].nodeType==3&&childs[i].nodeValue.replace(/^\s*|\s*$/g,""))){
          arr.push(childs[i]);
        }

      }
  }
  return arr;
 }


 //获取第一个子节点
 function getFirst(parent){
  return getChilds(parent)[0];
 }


 //获取最后一个子节点
 function getLast(parent){
  return getChilds(parent)[getChilds(parent).length-1];
 }

 //获得指定的子节点
 function getNum(parent,num){
  return getChilds(parent)[num];
 }

 //获得下一个兄弟节点
function getNext(obj){
     var next=obj.nextSibling;
     if(up==null){
      return false;
     }
     while(next.nodeType==3||next.nodeType==8){
      next=next.nextSibling;
      if(next==null){
        return false;
      }
     }
     return next;
}

//获得上一个兄弟节点
function getUp(obj){
     var up=obj.previousSibling;
     if(up==null){
      return false;
     }
     while(up.nodeType==3||up.nodeType==8){
      up=up.previousSibling;
      if(up==null){
        return false;
      }
     }
     return up;
}

//插入那个对象之后
//插入到下一个对象之前
//重点 给对象的原型添加此方法
//原理 找到第二个参数的下一个兄弟节点，将第一个参数插入到此兄弟节点之前（插入到下一个对象之前)
//obj1:当前的对象
//next：要插入的位置
//obj2:当前对象的下一个
Object.prototype.insertAfter=function(obj1,obj2){
  var next=getNext(obj2);
  if(next){
    this.insertBefore(obj1,next);
  }else{
    this.appendChild(obj2);
  }
}

//获取滚动条与页面顶部的距离
function getScrollT(){
  var ScrollT=document.documentElement.scrollTop||document.body.scrollTop;
    return ScrollT;
}



/*************************************/
//同一个元素添加多个事件的兼容函数
//obj 给那个对象添加
//ev 什么事件
//fun 事件处理方式
function addEvent(obj,ev,fun){
  if(obj.addEventListener){
    return obj.addEventListener(ev,function(){fun.call(obj);
    },false);
  }else{
  return obj.attachEvent("on"+ev,function(){fun.call(obj);});
}
};


//获取事件对象的兼容性
/*box.onclick=function(e){
  var ev=e||window.event;
  alert(ev);
}*/

//获取浏览器的宽
function getCW(){
  return document.documentElement.clientWidth;
};
//获取浏览器的高
function getCH(){
  return document.documentElement.clientHeight;
};

/**********************************/
//滚轮事件获取滚轮滚动的方向兼容问题
//obj  那个对象添加滚轮对象
//upfun 处理滚轮向上的函数
//downfun 处理滚轮向下的对象

function mouseWheel(obj,upfun,downfun){
  if(obj.attachEvent){ 
    obj.attachEvent("onmousewheel",scrollFn);   
    }else if(
    obj.addEventListener){ 
    obj.addEventListener("mousewheel",scrollFn,false);  
     obj.addEventListener("DOMMouseScroll",scrollFn,false);
   }

function scrollFn(e){
      var ev=e||window.event
      if(ev.preventDefault ){
      ev.preventDefault(); //阻止默认浏览器动作(W3C) 
      }else{ 
      ev.returnValue=false;}//IE中阻止函数器默认动作的方式
      var num=ev.detail||ev.WheelDelta;
      if(num==-3||num==120){
        if(upfun){
          upfun();
        }
      }
      if(num==3||num==-120){
        if(downfun){
          downfun();
        }
      }
    }
 }; 


//15.hover
//判断某个元素是否包含有另外一个元素
 function contains (parent,child) {
  if(parent.contains){
     return parent.contains(child) && parent!=child;
  }else{
    return (parent.compareDocumentPosition(child)===20);
  }
 }

//判断鼠标是否真正的从外部移入，或者是真正的移出到外部；
  function checkHover (e,target) {
   if(getEvent(e).type=="mouseover"){
      return !contains(target,getEvent(e).relatedTarget || getEvent(e).fromElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).fromElement)===target)
   }else{
    return !contains(target,getEvent(e).relatedTarget || getEvent(e).toElement)&&
    !((getEvent(e).relatedTarget || getEvent(e).toElement)===target)
    }
  }
//鼠标移入移出事件
/*
  obj   要操作的对象
  overfun   鼠标移入需要处理的函数
  outfun     鼠标移除需要处理的函数
*/
function hover (obj,overfun,outfun) {
    if(overfun){
      obj.onmouseover=function  (e) {
        if(checkHover(e,obj)){
           overfun.call(obj,[e]);
        }
      }
    }
    if(outfun){
      obj.onmouseout=function  (e) {
        if(checkHover(e,obj)){
           outfun.call(obj,[e]);
        }
      }
    }
}
 function getEvent (e) {
      return e||window.event;
 }
/********************************/


//阻止事件流
/*uls.onclick=function(e){
  var ev=e||window.event;
  if(ev,stopPropagation){
    return ev.stopPropagation();
  }else{
    return ev.cancelBubble=true;
  }
}*/  