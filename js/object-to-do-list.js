define(['object-task-celection'],function(List){
	// var a=function(){
	// 	alert('我是模块o-t-d-l的函数');
	// };//测试require
	var until=List.until;
	var getDate=function(){
		var date=new Date();
		return date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate();
	}
	var todo=function(title){
		this.date=getDate();
		this.title=title;
		this.element=$('<dd></dd>').html(this.title);
		
		this.done=false;
		var self=this;

		this.content='';

		this.element.click(function(){
			until.choosed_todo?until.choosed_todo.element.removeClass('c-chosed'):null;
			until.choosed_todo=self;
			$(this).addClass('c-chosed');

			self.render();
		});
	}
	todo.prototype.render=function(){
		$('.r-title h3').text(this.title);
		$('.r-timer time').text(this.date);
		$('.r-content p').text(this.content);
	}

	return{
		todo:todo
	}
})