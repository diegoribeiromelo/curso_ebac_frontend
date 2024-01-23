    
$(document).ready(function(){

    $("form").on("submit", function(e){
        e.preventDefault();

        const tarefaARealizar = $("#tarefa").val();
        const novaTarefa = $(document.createElement('li'));

        $(novaTarefa).append(tarefaARealizar);
        $(novaTarefa).appendTo("ul");
        $("#tarefa").val("");
    })

    $("ul").on("click", "li",function(event){
        const elemento = event.target;
        $(elemento).css("text-decoration", "line-through")
    })
});
