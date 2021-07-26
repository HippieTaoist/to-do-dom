let mainList =[]

let addTaskButton = $('button.task-add')
let incompleteListItem = $('<li class=".task .mainlist .incomplete">\'taskAdd\'</li>')
let taskAdd = $('textarea.task-to-add').val()

function addToList(task) {
    $(mainList).add(task)
}

$(document).ready(function(){
$(addTaskButton).on('click',function(){

    taskAdd = $('textarea.task-to-add').val()
    console.log('addTaskButton Clicked!', taskAdd)
    // taskAdd.clear()
    incompleteListItem.html(taskAdd)
// console.log(incompleted[0])
// addToList($('task-add-area'))
// console.log(mainList)
})









});

// $(document).ready(function(){
//   $("tr:even").css("background-color", "yellow");
// });

// click selection
// dblclick delete option
// key down to reproitizenkeyup to lock in new location

// $("input").focus(function(){
//   $(this).css("background-color", "#cccccc");
// });

// {/* add  focus on mouseover */}