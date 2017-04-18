require(['jquery','carousel'],function ($,Carousel) {
	var car1 = new Carousel();
	car1.init({
		selector:'#content1',     //控制 把轮播图放在哪
		buttonStyle:'circle',
		speed:400,
		imgData:['images/timg.jpg','images/timg2.jpg','images/timg3.jpg']
	});	
})