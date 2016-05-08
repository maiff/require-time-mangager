//模块task—list
define(['object-task-celection'],function(List){
	// var a=function(){
	// 	alert('我是模块o-t-l的函数');
	// };//测试require
	var until=List.until;
	var task=function(title,parent){
		var self=this;
		this.count=0;
		this.parent=parent;
		this.todoLists={};
		this.title=title;
		//this.span=$('<span></span>').text(this.count);
		 this.span=$('<span></span>').text('('+this.count+')');
		this.element=$('<dd></dd>').html(title);
		
		this.img=$('<img>').attr('src','./img/close.png');
		this.element.append(this.span);
		this.element.append(this.img);

		this.element.click(function(){
			
			until.choosed_task?until.choosed_task.element.removeClass('t-chosed'):null;
			until.choosed_task=self;
			$(this).addClass('t-chosed');
			self.render();

			// $('.c-title li').removeClass('intro');
			// $('.c-title li:nth-child(1)').addClass('intro');
			$('.c-title li:nth-child(1)').click();

		});


		this.element.hover(
			function(event){
				self.img.css('opacity',1);
				event.stopPropagation();
			},
			function(event){
				self.img.css('opacity',0);
				event.stopPropagation();
			}
		);

		this.img.click(function(){
			self.element.remove();
			self.dlDisappear();
			// var num1=$('#all_count').text();
			// $('#all_count').text(Number(num1)-self.count);
			// // var num2=until.choosed.span.text();
			// // num2=num2.slice(1,this.length-1);
			// // alert(num2)
	 	// 	until.choosed.span.text('('+(until.choosed.count-self.count)+')');
	 		self=null;
		});
		
		parent.append(this.element);
	};
	task.prototype.render=function(){
		this.dlDisappear();
		for(var i in this.todoLists){
			// var dt=$('<dt></dt>').addClass('t-title').text(i);
			// this.todoLists[i].dl.append(dt);
			// for(var j=0,len=this.todoLists[i].item.length;j<len;j++){
			// 	this.todoLists[i].dl.append(this.todoLists[i].item[j].element)
			// }
			this.todoLists[i].dl.css('display','block');
		}



	};
	task.prototype.renderTask=function(){
		this.parent.append(this.element);
	}
	task.prototype.Tocount=function(){
		
		for(var i in this.todoLists){
			this.count=this.todoLists[i].item.length;
		}
		this.span.text('('+this.count+')');
	}
	task.prototype.dlDisappear=function(){
	 	$('.c-ele').css('display','none');//remove 释放掉了

	};

	task.prototype.add=function(todo){
		if(this.todoLists[todo.date]){
			this.todoLists[todo.date].item.push(todo);
			this.todoLists[todo.date].dl.append(todo.element);
			this.Tocount();
		}
		else{
			this.todoLists[todo.date]={};
			this.todoLists[todo.date].item=[];
			this.todoLists[todo.date].item.push(todo);
			console.log(this.todoLists[todo.date])
			var dl=$('<dl></dl>').addClass('c-ele');
			this.todoLists[todo.date].dl=dl;
			var dt=$('<dt></dt>').addClass('t-title').text(todo.date);
			this.todoLists[todo.date].dl.append(dt);
			this.todoLists[todo.date].dl.append(todo.element);
			$('.center').append(dl);
			this.Tocount();
		}
	};
	// var a=function(){
	// 	console.log(until)

	// }
	return {
		task:task
	}
});