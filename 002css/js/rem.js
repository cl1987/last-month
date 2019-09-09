// console.log(11)
;(function(win,doc){
	var root=doc.getElementsByTagName('html')[0]
	function refresh(){
		var width=doc.body.clientWidth || doc.documentElement.clientWidth
		var fontSize=width/10+'px'
		root.style.fontSize=fontSize;
	}
	// refresh()
})(window,document)