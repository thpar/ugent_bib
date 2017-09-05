(function($){
    $(function(){
	    var $ugent_bib_ref = $(".ugent-bib-ref");
	    var $ugent_bib_abstract_link = $(".ugent-bib-abstract-link");

	   	    
	    function showAbstract(){
		$abstract = $(this).find(".ugent-bib-abstract");
		$abstract.toggle(200);
	    }

	    function abstractLinkClicked(){
		$ugent_bib = $(this).parent().parent();
		$abstract = $ugent_bib.find(".ugent-bib-abstract");
		$abstract.toggle(200);
		return false;
	    }
	    
	    $ugent_bib_ref.on("click", showAbstract);
	    $ugent_bib_abstract_link.on("click", abstractLinkClicked);

	});

}(jQuery));
