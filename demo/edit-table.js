    $(document).ready(function(){
    $("#salesData").on('dblclick', 'td', function (event) {
        event.preventDefault();
        var elem, defaultText;
        defaultText = $(this).text().trim();
        elem = $(this);

        elem.html('<input id= "in" type= "text" value="' + defaultText + '" />');
        elem.children().first().focus();

        $(document).on({
            keypress: function (event) {
                if (event.which === 13) {
                    elem.text(elem.children().val());
                }
            },
            click: function (event) {
                if (event.target.tagName !== "INPUT") {
                    elem.text(elem.children().val());
                }
            }
        });

    });
    $("#addRecord").click(function(){
        $("#salesData").append("<tr> </tr>");
        $("#salesData th").each(function(){
        $("#salesData tr:last").append("<td><input type='text'/></td>");
        });
            $("input").bind("keypress",function(event){
                if(event.which === 13){
                    $("input").each(function(){
                    $(this).parent().text($(this).val());
                });
                }

            });
    });

});

