define(['jquery'],function ($) {
	function Carousel() {
		this.defaultVal = {
			buttonStyle:'square',
			speed:800,
		}
		// 把html文件封成属性
		this.$container = $('<div class="carousel-container">');
		this.$content = $('<div class="carousel-content">');
		this.$tab = $('<ul class="carousel-tab">');
		this.$arrow = $('<div class="carousel-arrow">');
		this.$prev = $('<span class="carousel-prev">&lt;</span>');
		this.$next = $('<span class="carousel-next">&gt;</span>');
	}

	Carousel.prototype.init = function (options) {

		var iNow = 0;

		var _this = this;

		$.extend(this.defaultVal,options);
		
		this.$container.append(this.$content).append(this.$tab).append(this.$arrow);  //把content, tab, arrow插入到container

		//插图片
		for (var i = 0; i < this.defaultVal.imgData.length; i++) {
			this.$content.append('<img class="'+(i == 0?'selected':'')+'" src="'+this.defaultVal.imgData[i]+'" alt="" />');
			this.$tab.append('<li class="'+this.defaultVal.buttonStyle+(i == 0?' selected':'')+'">'+(i+1)+'</li>');
		}

		this.$arrow.append(this.$prev).append(this.$next);

		$(this.defaultVal.selector).append(this.$container);

		$('li',this.$tab).on('click', function() {
			changeImg($(this).index());
		});

		function changeImg(idx) {
			$('li',_this.$tab).eq(idx).addClass('selected').siblings().removeClass('selected');
			$('img',_this.$content).eq(idx).addClass('selected').siblings().removeClass('selected');

		}

		this.$prev.on('click',function(){
            iNow--;
            if(iNow == -1){
                iNow = _this.defaultVal.imgData.length-1;
            }

            changeImg(iNow);
        });
        this.$next.on('click',function(){
            iNow++;
            if(iNow == _this.defaultVal.imgData.length){
                iNow = 0;
            }

            changeImg(iNow);
        });

		var timer;

		function run() {
			timer = setInterval(function () {
				_this.$next.trigger('click');
			},_this.defaultVal.speed);
		}
			
		run();

		this.$container.hover(function() {
			clearInterval(timer);
		}, function() {
			run();
		});
	}

	return Carousel;
})