$(function() {
	$('#table-of-contents a').smoothScroll()
	$( '.outline-2' ).searchable({
		selector      : 'li',
		childSelector : 'a',
		searchField   : '#search',
		searchType    : 'helm',
		ignoreDiacritics : true,
		hide          : function( elem ) {
			elem.fadeOut(100);
		},
		show          : function( elem ) {
			elem.fadeIn(100);
		},
		onSearchActive : function( elem, term ) {
			elem.show();
		},
	});
});
