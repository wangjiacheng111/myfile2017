require(["jquery","carousel"],function ($,Carousel) {
	var car1 = new Carousel();
	car1.init({
		selector:".wrapper1",
		speed:400,
		imgData:['img/showcaseme.jpg','img/showcaseis.jpg','img/showcaseyour.jpg','img/showcasedad.jpg']
	});
})