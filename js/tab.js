window.onload=function(){

   
   var floors=$(".floors");
   var jump=$(".dianti")[0];
   var btnlc=$("li",jump);
   var beijing=$(".beijing");
  //alert(floors[1].offsetTop)
   //var scrollT=getScrollT();
   var num6; 

window.onscroll=function(){
     
     //楼层跳转
     var scrollT=getScrollT();
      //document.title=scrollT;
  if(scrollT>=1050){
     jump.style.display="block";
         }else{
      jump.style.display="none";
            }
  //滚动条控制按钮
  for(var i=0;i<floors.length;i++){
   floors[i].t=floors[i].offsetTop;
    
    if(floors[i].t-150<=scrollT){//如果scrollTop大于当前楼层的top
    for(var j=0;j<btnlc.length;j++){
     /*btnlc[j].style.background="none";*/
     beijing[j].style.display="none";
    }
   
   beijing[i].style.display="block";
   num6=beijing[i].index;   
                }
     //floors[i].index=i;
};
  //document.title=scrollT;
 }    
  for(var i=0;i<btnlc.length;i++){
      btnlc[i].index=i;
      
      btnlc[i].onclick=function(){

     //alert(floors[this.index].t)
      var obj=document.documentElement.scrollTop?document.documentElement:document.body;

        var scrollT=getScrollT();       
      //obj.scrollTop=floors[this.index].t;
        animate(obj,{scrollTop:floors[this.index].offsetTop},600,Tween.Linear);
       
            }
            /*btnlc[i].onmouseover=function(){
              beijing[num6].style.display="block";
         beijing[this.index].style.display="block";
          }
      btnlc[i].onmouseout=function(){
         
         beijing[this.index].style.display="none";
          }  */
          }
  


//banner轮播
	var bannermiddle=$(".bannermiddle")[0];
	 var img=$("img",bannermiddle);
    var btn=$(".lonbobtn");
      var btnleft=$(".btnleft")[0];
       var btnright=$(".btnright")[0];
       /*var banner=$(".banner")[0];
       var yanse=["red","blue","yellow","pink"]*/
       var num=0;
       /*for(var i=0;i<img.length;i++){
         img.index=i;
       }*/
       function move(type){
	       	
          if(type=="r"){
	        num++;
	        if(num==7){
	        num=0
	        }
	      }
         if(type=="l"){
	        num--;
	       if(num<=-1){
	        num=img.length-1;
	        }
	      }
        for(var i=0;i<img.length;i++){
          	img[i].style.zIndex=2;
          	btn[i].style.background="#ccc";
           }
          img[num].style.zIndex=3;
          btn[num].style.background="#ff6700";
          
	      
          //banner.style.background=yanse[num];
          
       }
       var s=setInterval(function(){move("r")},2000);
       for(var i=0;i<btn.length;i++){
       	btn[i].index=i;
       	btn[i].onmouseover=function(){
       		
       		for(var j=0;j<btn.length;j++){
       			img[j].style.zIndex=2;
       			btn[j].style.background="#ccc";
          }
       		clearInterval(s);
       		img[this.index].style.zIndex=3;
       		btn[this.index].style.background="#ff6700";
          //banner.style.background=yanse[this.index];
       	}
       	btn[i].onmouseout=function(){
       		
       		s=setInterval(function(){move("r")},2000);
       		num=this.index;
       	}
       }
      bannermiddle.onmouseover=function(){
         clearInterval(s);
      btnleft.style.display="block";
      btnright.style.display="block";
    }
    bannermiddle.onmouseout=function(){
      clearInterval(s);

      s=setInterval(function(){move("r")},2000);
      btnleft.style.display="none";
      btnright.style.display="none";
    }
    btnleft.onmouseover=function(){
      clearInterval(s);
       
    }
    btnleft.onclick=function(){
    	  move("l")
    }
    btnright.onclick=function(){
    	move("r")
    } 


//左菜单滑出效果
var  wenzi=$(".wenzi")
 var zuocaidan=$(".zuocaidan"); 
    for(var i=0;i<wenzi.length;i++){
         wenzi[i].index=i;
        
    wenzi[i].onmouseover=function(){
      /*for(var j=0;j<zuocaidan.length;j++){
          
          }*/
       wenzi[this.index].style.width="200px";
          wenzi[this.index].style.paddingLeft="10px";
          wenzi[this.index].style.background="#872222";
           /*animate(wenzi[this.index],{paddingLeft:10},40);*/
        }
        
        wenzi[i].onmouseout=function(){
          wenzi[this.index].style.width="210px";
          wenzi[this.index].style.paddingLeft="0px";
          wenzi[this.index].style.background="#C23131";
          /*animate(zuocaidan[this.index],{})*/
        } 
        
        
}


//下拉框
var xiala=$(".xiala");
var xialakuang=$(".xialakuang");
for(var i=0;i<xiala.length;i++){
    xiala[i].index=i;
    hover(xiala[i],function(){
      var erji=$("li",xialakuang[this.index]);

      var h=erji[0].offsetHeight;
      xialakuang[this.index].style.height=0+"px";
      animate(xialakuang[this.index],{height:erji.length*h},4,Tween.Linear)
    },function(){animate(
      xialakuang[this.index],{
        height:0
      },4,Tween.Linear);})
}


var zhangshangxiala=$(".zhangshangxiala")[0];
var zhangshang1hao=$(".zhangshang1hao")[0];
hover(zhangshang1hao,function(){
   zhangshangxiala.style.height=0+"px";
      animate(zhangshangxiala,{height:142},400,Tween.Linear)
    },function(){animate(
      zhangshangxiala,{
        height:0
      },4,Tween.Linear)})


//楼层轮播
function aa(z,u){
      var bigbox11=$(".bigconbox")[z];
      var fan=$(".con2btnbox")[z];
      var tupians=$("img",bigbox11);
      var floormiddlefan=$(".con2btnbox")[z];
      var smallbtn=$("li",fan);
      var numss=1;
      var nn=0; 
      var smallbtnding=$("div",floormiddlefan);
      animate(smallbtnding[nn],{width:40},u,Tween.Linear);
             /*
               var  annius1=$(".f-1-father-left-2-1")[z];
               var  annius2=$(".f-1-father-left-2-3")[z];*/
      function moveleft()
               {
                nn++;
                if(nn>2)
                {
                    nn=0;
                }
                if(nn>=0&&nn<=2)
                {   
                    for(var i=0;i<smallbtnding.length;i++)
                    {
                        smallbtnding[i].style.width="0px";
                        smallbtnding[i].style.display="none";
                    }
                    smallbtnding[nn].style.display="block";
                     animate(smallbtnding[nn],{width:40},u);
                }
                if(numss>2)
                {
                    numss=0;
                    animate(bigbox11,{left:0},500,Tween.Linear);
                }
                if(numss>=0&&numss<=2)
                {
                    animate(bigbox11,{left:-330*numss},500,Tween.Linear);
                }
                numss++;   
               }
               var t=setInterval(moveleft,u);
               for(var i=0;i<tupians.length;i++)
               {
                tupians[i].index=i;
                hover(tupians[i],function()
                {
                    clearInterval(t);
                    for(var j=0;j<smallbtnding.length;j++)
                    {
                        smallbtnding[j].style.display="none";
                        smallbtnding[j].style.width="0px";
                    }

                    smallbtn[this.index].style.backgroundColor="#E84312";
                },function()
                {
                    t=setInterval(moveleft,u);
                    numss=this.index+1;
                    smallbtn[this.index].style.backgroundColor="#fff";
                    smallbtnding[this.index].style.display="block";
                    animate(smallbtnding[this.index],{width:30},u,Tween.Linear);
                })
               };
//指向小按钮然后图片不动
        for(var i=0;i<smallbtn.length;i++)
                {
                    smallbtn[i].index=i;
                    smallbtn[i].onmouseover=function()
                   {
                    clearInterval(t);
                   
                    for(var j=0;j<smallbtn.length;j++)
                    {
                        smallbtnding[j].style.width="0px";
                        smallbtnding[j].style.display="none"; 
                    }
                     smallbtnding[this.index].style.width="40px";
                     smallbtnding[this.index].style.display="block";
                      animate(bigbox11,{left:-330*this.index},500,Tween.Linear);
                   }
                   smallbtn[i].onmouseout=function()
                   { 
                      nn=this.index;
                      t=setInterval(moveleft,u);

                   }
               }
             

   }
    aa(0,3000);
    aa(1,2700);
    aa(2,2500);
    aa(3,3500);
    aa(4,3000);
    aa(5,2900);
    aa(6,3500);
    aa(7,2800);


//10楼选项卡
var word=$(".xzdp");
  var word1=$(".meiycj");
  for(var i=0;i<word.length;i++){   
  
    word[i].index=i;//index保存相应的对象的i的值
    //给每一个标题添加单击事件
    word[i].onmouseover=function(){
      for(var j=0;j<word1.length;j++){
        word1[j].style.display="none";
        
        word[j].style.color="#666";

      }
      word1[this.index].style.display="block";
      this.style.color="#CEA145";
      
    }
  }

//7楼左侧小轮播
  var innerbox=$(".xlbbox")[0];
  var leftbox=$(".xbannerlbleftbox")[0];
  var rightbox=$(".xbannerlbrightbox")[0];
  function moveleft(){

    var last=getLast(innerbox);
    var first=getFirst(innerbox);

  animate(innerbox,{left:-100},600,Tween.Linear,function(){
    innerbox.appendChild(first);
    innerbox.style.left=0;
  });
  }; 
  function moveright(){

    var last=getLast(innerbox);
    var first=getFirst(innerbox);
  innerbox.insertBefore(last,first);
   innerbox.style.left=-100+"px";
  animate(innerbox,{left:0},600,Tween.Linear);
  };
    var t=setInterval(moveright,2000);
    leftbox.onmouseover=rightbox.onmouseover=function(){
      clearInterval(t);
    };
    leftbox.onmouseout=rightbox.onmouseout=function(){
      t=setInterval(moveleft,2000);
    };
    leftbox.onclick=function(){
      moveleft();
    };
    rightbox.onclick=function(){
      moveright();
    }

}
