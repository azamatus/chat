/**
 * Created by azama_000 on 22.04.15.
 */

$(document).ready(function() {
    $('.users li').click(function(){
        var name = $(this).find('.user_name').text();
        $('#dialog_page').attr('data-title', name);

//        $.afui.loadContent("#dialog_page",false,true,"pop");
//        $.afui.disableTabBar();
    });
});