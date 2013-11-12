$(function() {
    var parent_div_data;
    $(".tire").draggable({
        appendTo: "body",
        cursor: "move",
        helper: 'clone',
        revert: "invalid",
        start: function( event, ui ) {
            parent_div_data = $(this).parent().attr("id");
        }

    });
    $(".tire_deck").droppable({
        tolerance: "intersect",
        accept: ".tire",
        activeClass: "ui-state-default",
        hoverClass: "ui-state-hover",
        drop: function(event, ui) {
            $("#tire_deck").append($(ui.draggable)).clone();
        }
    });
    $(".drop_1").droppable({
        tolerance: "intersect",
        accept: ".tire",
        drop: function(event, ui) {
            the_clone = ui.draggable.clone();
            $(the_clone).attr('id', ID());
            $(the_clone).children('.title').hide();
            $(the_clone).children('.content').show();
            $(this).append(the_clone);

        }
    });

    var toolbarbtns = '.content > .toolbar > .btn-toolbar > .btn-group > button';

    $('body').on('click', toolbarbtns+'[name="close_btn"]',function(){
        $(this).closest('.tire').remove();
    })
});

