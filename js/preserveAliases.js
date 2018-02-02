/*
 * Preserve aliases when sorting.
 */
(function($){
    $(function(){
        var aliases = [];
        $('thead th').mousedown(function(){

            // Remember the aliases and remove them from the display
            $('table.dev-sites tr.alias').each(function() {
                var master = $(this).prevAll('tr.master').attr("id");
                var alias = $(this).attr("id");
                //trace(master + " -> " + alias );
                if (typeof aliases[master] === 'undefined') {
                    aliases[master] = [];
                }
                aliases[master].push(alias);
            });
        }).mouseup(function(){
            // Restore the aliases after sorting has completed
            setTimeout(function(){
                for (var m in aliases) {
                    $.each(aliases[m], function(i, a) {
                        $('table.dev-sites tr#'+a).insertAfter('table.dev-sites tr#'+m);
                    });
                }
            }, 50);
        });
    });
})(jQuery);
