//import jQuery
define(function(){
	// var a=function(){
	// 	alert('我是模块o-t-c的函数');
	// };测试require
	var until={

		};
	function taskfile(title){
		var self=this;
		this.lists=[];


		//列表的构造
		this.element=$('<dl></dl>');
		this.img=$('<img>').attr('src','./img/close.png');

		this.p=title;
		this.count='';
		this.span=$('<span></span>')//.text('('+this.count+')');
		this.title=$('<dt></dt>').addClass('l-class').html(this.p);
		//this.title.innerHTML=title+'(<span>3</span>)'
		this.title.append(this.span);
		this.element.append(this.title);

		this.title.append(this.img);
		$('#class-list').after(this.element);
		this.show=false;
		//img的出现
		this.title.hover(
			function(){
				self.img.css('opacity',1);
			},
			function(){
				self.img.css('opacity',0);
			}
		);

		//img的点击
		this.img.click(function(){
			self.element.remove();
			// var num=$('#all_count').text();
			// $('#all_count').text(Number(num)-self.count);
			self=null;

		});

		//elelment的点击
		this.element.click(function(event){
			until.choosed?until.choosed.title.removeClass('l-chosed'):null;
			until.choosed=self;
			self.title.addClass('l-chosed');
			//alert(event.target.nodeName);
			if(event.target.nodeName=='DT'){

				if(self.show===true){
						for(var i=0,len=self.lists.length;i<len;i++){
						self.lists[i].element.addClass('disappear');
					}
					self.show=false;
				}
				else{
					self.show=true;
					for(var i=0	,len=self.lists.length;i<len;i++){
						self.lists[i].element.removeClass('disappear')
					}

				}
			}
			return false;
		})

	}

	taskfile.prototype.render=function(){
		$('#class-list').after(this.element);
	};
	taskfile.prototype.add=function(task){
		this.lists.push(task);

	}
	return {
		taskfile:taskfile,
		until:until
	}
});

