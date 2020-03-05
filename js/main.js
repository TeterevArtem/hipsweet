$(document).ready(function(){

	//slider
	$('.slider').bxSlider({
		controls: false,
		preloadImage: 'all',
		auto: true,
		pause: 4000,
		autoHover: true
	});


	//tabs
	$('.tabs_item').on('click', function(e){

		e.preventDefault();

		var $this = $(this),
			index = $this.index(),
			content = $('.tabs_content'),
			container = $this.closest('.team'),
			items = container.find(content),
			active = items.filter('.active'),
			reqItem = items.eq(index),
			duration = 300;

		$this.addClass('active').siblings().removeClass('active');
	
		active.stop(true).fadeOut(duration, function(){
			reqItem.fadeIn(duration).addClass('active').siblings().removeClass('active');	
		})
	});

	//accordion
	var flag = true;

	$('.question_title').on('click', function(e){
		e.preventDefault();

		var $this = $(this),
		item = $this.closest('.questions_items'),
		currentContent = item.find('.question_dist'),
		container = $this.closest('.questions_list'),
		content = container.find('.question_dist'),
		duration = 500;
		
		if (flag){

			flag = false;

			if(!item.hasClass('active')){

				content.slideUp(duration);
			
				currentContent.slideDown(duration, function(){

					flag = true;

				});
				
				item.addClass('active').siblings().removeClass('active');

			}else{
				currentContent.slideUp(duration, function(){
					flag = true;
				});

				item.removeClass('active')
			}
		}

		
	});
	//input_mask
	$('.telephone').inputmask("+(999)-999-999-999");

	$('.checkbox_link').on('click', function(e){
		e.preventDefault();
	})
	

	//map
	ymaps.ready(init);
    var myMap,
    	myPlacemark;

    function init(){     
        myMap = new ymaps.Map("map", {
            center: [59.90486391, 30.40259264],
            zoom: 14,
            controls:[]
        });
        myPlacemark = new ymaps.Placemark([59.90003505, 30.41272066], {
          hintContent: 'Санкт-Питербург',
          balloonContent: 'Кондитерский магазин "Hipsweet"!'
        },{

        iconLayout: 'default#image',
        iconImageHref: '../img/backgrounds/mark.png',
        iconImageSize: [40, 56],
        iconImageOffset: [-15, -27]
    })
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }

    //scroll
    
	$('.order_button, .form_link, .menu_link-ndrop').on('click', function(){
		var $this = $(this),
			target = $this.attr('href'),
			bl_top = $(target).offset().top - 600;
		$('body, html').animate({scrollTop: bl_top}, 2000);
		return false;
	})
    


});