(function($){

	$(function(){
		var url;
                var page_params='&per_page=10&page=1'
		try{
			url='/search_products?ids='+getRecordedIds($,'recently_viewed')+page_params;
		}
		catch(err){
			// alert(err);
		}
			

		$.ajax({
			complete:function(request)
			{
				$("#recently_viewed_ajax_loader").hide();
			},
			type:'get',
			dataType:'json',
			url:url,
			success: function(data,textStatus,jqXHR)
			{
				var len=data.entries.length;
					for(var i=0;i<len;i++)
					{
						var source   = $("#recently_viewed_template").html().replace(/\[\[name\]\]/g,"{{name}}");
						source=source.replace(/\[\[price\]\]/g,"{{price}}");
						source=source.replace(/\[\[product_image_url\]\]/g,"{{product_image_url}}");
						source=source.replace(/\[\[url\]\]/g,"{{url}}");
						var template = Handlebars.compile(source);
						var context = data.entries[i];
						var html    = template(context);
						$('#recently_viewed_products_holder').append(html);
					}
			}
		});  


		// var url="search_products?name=nike"

		// $.ajax({
		// 	// complete:function(request)
		// 	// {
		// 	// 	$("#recently_viewed_ajax_loader").hide();
		// 	// },
		// 	type:'get',
		// 	dataType:'json',
		// 	url:url,
		// 	success: function(data,textStatus,jqXHR)
		// 	{
		// 		var len=data.length;
		// 			for(var i=0;i<len;i++)
		// 			{
		// 				var source   = $("#product_display_template").html().replace(/\[\[name\]\]/g,"{{name}}");
		// 				source=source.replace(/\[\[price\]\]/g,"{{price}}");
		// 				source=source.replace(/\[\[product_image_url\]\]/g,"{{product_image_url}}");
		// 				source=source.replace(/\[\[url\]\]/g,"{{url}}");
		// 				var template = Handlebars.compile(source);
		// 				var context = data.entries[i];
		// 				var html    = template(context);
		// 				$('#filtered_products_holder').html("");
		// 				$('#filtered_products_holder').append(html);
		// 			}
		// 	}
		// });

	});


})(jQuery);