define(['jquery'],function ($) {
	function Carousel() {
		this.ok = {
			speed:800,
		}

	// 把html封成属性
	this.$container = $('<div class="carousel-container">');
	this.$content = $('<div class="carousel-content">');
	// this.$tab = $('<ul class="carousel-tab">');
	this.$prev = $('<span id="prev"></span>');
	this.$next = $('<span id="next"></span>');
	}

	Carousel.prototype.init = function (options) {
		var iNow = 0;

		var _this = this;

		$.extend(this.ok,options);

		this.$container.append(this.$content).append(this.$prev).append(this.$next);

		// 插入图片
		for (var i = 0; i < this.ok.imgData.length; i++) {
			this.$content.append('<img class="'+(i == 0?'selected':'')+'" src="'+this.ok.imgData[i]+'" alt="" />');
			// this.$tab.append('<li class="'+(i == 0?'selected':'')+'">'+(i+1)+'</li>');
		}

		$(this.ok.selector).append(this.$container);

		$('.wrapper1').hover(function() {
			$('#prev').css('display', 'block');
			$('#next').css('display', 'block');
		}, function() {
			$('#prev').css('display', 'none');
			$('#next').css('display', 'none');
		});

		function changeImg(idx) {
			$('img',_this.$content).eq(idx).addClass('selected').siblings().removeClass('selected');
		}

		this.$prev.on('click',function(){
            iNow--;
            if(iNow == -1){
                iNow = _this.ok.imgData.length-1;
            }

            changeImg(iNow);
        });

        this.$next.on('click',function(){
            iNow++;
            if(iNow == _this.ok.imgData.length){
                iNow = 0;
            }

            changeImg(iNow);
        });

        var timer;

		function run() {
			timer = setInterval(function () {
				_this.$next.trigger('click');
			},_this.ok.speed);
		}
			
		run();

		$('.wrapper1').hover(function() {
			clearInterval(timer);
		}, function() {
			run();
		});
	}

	return Carousel;

})