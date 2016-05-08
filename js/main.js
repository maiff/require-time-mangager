require.config({
　　　　paths: {
　　　　　　"jquery": "http://libs.baidu.com/jquery/2.0.0/jquery.min"//没有js
　　　　}
　　});
require(['jquery','object-task-celection','object-task-list','object-to-do-list'],
		function ($,List,task,todo){
　　　　// some code here
		//List.a();
		//task.a();
		//todo.a();
		
		var all={
			taskFile:[],
			taskList:[],
			todo:[]
		};
		

		var until=List.until;
		//new list
		$('#class-list').click(function(){
			var name = prompt('请输入分类名称', 'no name');
			var taskFile=null;
			  if (name != null && name != '') {

			  	taskFile=new List.taskfile(name);
			  	all.taskFile.push(taskFile);

			  }
		});

		//new task
		$('#new-class').click(function(){
			var _task=null;
			if(!until.choosed){
				return;
			}
			var name = prompt('请输入task名称', 'no name');
			var taskCollection=null;
			if (name != null && name != '') {
				_task=new task.task(name,until.choosed.element);
				all.taskList.push(_task);
			  	until.choosed.add(_task);
			}
			
			
		});

		$('.to-do').click(function(){
			var _todo=null;
			if(!until.choosed_task){
				return;
			}
			var name = prompt('请输入todo名称', 'no name');
			if (name != null && name != '') {
				_todo=new todo.todo(name);
				all.todo.push(_todo);
				until.choosed_task.add(_todo);
				//count();

			}
		})
		$('.img2').click(function(){
			if(until.choosed_todo){
				$('.right-masker').css('display','block');
				$('#title').val(until.choosed_todo.title);
				$('#content').val(until.choosed_todo.content);
			}


		});
		$('.img1').click(function(){
			if(until.choosed_todo){
				until.choosed_todo.element.addClass('c-done');
				until.choosed_todo.done=true;
			}
		});

		$('#insure').click(function(){
			$('.right-masker').css('display','none');
			until.choosed_todo.title=$('#title').val();
			until.choosed_todo.content=$('#content').val();
			until.choosed_todo.render();
			until.choosed_todo.element.html($('#title').val());

		});
		$('#quit').click(function(){
			$('.right-masker').css('display','none');
		});

		$('.c-title li:nth-child(1)').click(function(){
			var todolist=[];
			if(until.choosed_task){
				$('.c-title li').removeClass('intro');
				$(this).addClass('intro');
				for(var j in until.choosed_task.todoLists){
					todolist=todolist.concat(until.choosed_task.todoLists[j].item);
					for(var i=0,len=todolist.length;i<len;i++){
						todolist[i].element.css('display','block');
					}
				}
			}

		});
		$('.c-title li:nth-child(2)').click(function(){
			var todolist=[];
			if(until.choosed_task){
				$('.c-title li').removeClass('intro');
				$(this).addClass('intro');
				for(var j in until.choosed_task.todoLists){
					todolist=todolist.concat(until.choosed_task.todoLists[j].item);
					for(var i=0,len=todolist.length;i<len;i++){
						todolist[i].element.css('display','block');
						if(todolist[i].done===true){
							todolist[i].element.css('display','none');
						}
					}
				}
				//until.choosed_task.render();
			}
		});
		$('.c-title li:nth-child(3)').click(function(){
			var todolist=[];
			if(until.choosed_task){
				$('.c-title li').removeClass('intro');
				$(this).addClass('intro');
				for(var j in until.choosed_task.todoLists){
					todolist=todolist.concat(until.choosed_task.todoLists[j].item);
					for(var i=0,len=todolist.length;i<len;i++){
						todolist[i].element.css('display','block');
						if(todolist[i].done===false){
							todolist[i].element.css('display','none');
						}
					}
				}
				//until.choosed_task.render();
			}
		});

		// function count(){
		// 	$('#all_count').text(all.todo.length);
		// 	until.choosed.count=0
		// 	for(var i=0,len=until.choosed.lists.length;i<len;i++){
		// 		until.choosed.count+=until.choosed.lists[i].count;
		// 	}
		// 	until.choosed.span.text('('+until.choosed.count+')');

		// }
		
		// function test(){
		// 	console.log(until.choosed)
		// }
		// test()
		// $('.to-do').click(function(){
		// 	test()
		// })


});


