var page = tabris.create("Page", {
  title: "图片展示demo",
  topLevel: true,
  background: 'black'
});
var IMAGE_PATH = 'images/'
var fullwidth = screen.width;
var fullheight = screen.height;

for (var i = 0; i < 3; i++) {
  tabris.create("ImageView", {
    image: {src: IMAGE_PATH+(i+1)+'.jpeg',width:(fullwidth-40),height:(fullheight-40)},
    id: 'image'+(i+1),
    layoutData: {left: i*fullwidth + 20, centerY:0}
	  }).on('swipe:left',function(widget,event){
	  	var id = widget.get('id');
	  	var order = id.split('image')[1]
	  	if(order == 3) return
 		var images = tabris.ui.children('Page').children('ImageView');
 		images.forEach(function(item){
 			item.animate({
 				 transform: {
				      translationX: -(fullwidth*order)
				    }
 			},{
 				duration: 400,
 				easing: 'ease-in-out'
 			})
 		})
	  }).on('swipe:right',function(widget,event){
	  	var id = widget.get('id');
	  	var order = id.split('image')[1]
	  	console.log(order);
	  	if(order == 1) return
 		var images = tabris.ui.children('Page').children('ImageView');
 		images.forEach(function(item){
 			item.animate({
 				 transform: {
				      translationX: -(fullwidth*(order-2))
				    }
 			},{
 				duration: 400,
 				easing: 'ease-in',
 				reverse: true
 			})
 		})
	  }).appendTo(page);
}

page.open();