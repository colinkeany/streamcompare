$('document').ready(function() {
	$('.th1').hover(function() {
		$('.td1').toggleClass('col-hover');
	});
	$('.th2').hover(function() {
		$('.td2').toggleClass('col-hover');
	});
	$('.th3').hover(function() {
		$('.td3').toggleClass('col-hover');
	});
	$('.th4').hover(function() {
		$('.td4').toggleClass('col-hover');
	});
	$('.th5').hover(function() {
		$('.td5').toggleClass('col-hover');
	});
	$('.th6').hover(function() {
		$('.td6').toggleClass('col-hover');
	});
	$('.th7').hover(function() {
		$('.td7').toggleClass('col-hover');
	});
	$('.th8').hover(function() {
		$('.td8').toggleClass('col-hover');
	});
	$('.th9').hover(function() {
		$('.td9').toggleClass('col-hover');
	});
	$('.filters-button').click(function() {
		$('.filter-panel').toggleClass('panel-active');
	});
	$('.panel-close').click(function() {
		$('.filter-panel').removeClass('panel-active');
	});
	$('.about-modal').click(function() {
		$('.modal').fadeIn();
		$('.modal-body').fadeIn();
	});
	$('.modal, .modal-close').click(function() {
		$('.modal').fadeOut();
		$('.modal-body').fadeOut();
	});
	$("#networks").tablesorter({
		sortList: [[0,0,]],
		textExtraction:function(s){
			if($(s).find('img').length == 0) return $(s).text();
			return $(s).find('img').attr('alt');
		}
	});
	$('.provider1').change(function(){
		$('.th8, .td8').toggleClass('hide-provider');
	});
	$('.provider2').change(function(){
		$('.th5, .td5').toggleClass('hide-provider');
	});
	$('.provider3').change(function(){
		$('.th6, .td6').toggleClass('hide-provider');
	});
	$('.provider4').change(function(){
		$('.th7, .td7').toggleClass('hide-provider');
	});
	$('.provider5').change(function(){
		$('.th3, .td3').toggleClass('hide-provider');
	});
	$('.provider6').change(function(){
		$('.th4, .td4').toggleClass('hide-provider');
	});
	$('.provider7').change(function(){
		$('.th2, .td2').toggleClass('hide-provider');
	});
	$('.provider9').change(function(){
		$('.th9, .td9').toggleClass('hide-provider');
	});
	var $table = $('#networks');
	$table.floatThead();
});