(function($){
    $(function(){
	    var $ugent_bib_ref = $(".ugent-bib-ref");
	   	    
	    function showAbstract(){
		$abstract = $(this).find(".ugent-bib-abstract");
		$abstract.toggle(200);
	    }
	    
	    $ugent_bib_ref.on("click", showAbstract);
	});

}(jQuery));
