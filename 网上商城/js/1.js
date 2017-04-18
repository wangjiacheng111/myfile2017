$(function () {
	// body...
	// 搜索框
	$("#inputSearch").on('focus', function() {
		if (this.value == this.defaultValue) {
			this.value = "";
		}
	}).on('blur', function() {
		 if(this.value == ""){
            this.value = this.defaultValue;
        }
	});
})