jQuery(document).ready(function ($) {
    "use strict";
    
    if($('.attraction_select').length){
        $('.attraction_select').on('change',function(){
          var att_cat =  $(this).val();
          get_attraction_by_cat(att_cat);
        });
    }
    
    function get_attraction_by_cat(cat_id){        
         $.ajax(
                {
                    type: 'get',
                    data: {action : 'get_attraction_by_cat', cat_id : cat_id},
                    url: hillter.url,
                    async: true,
                    beforeSend: function () {                        
                    },
                    success: function (response) {
                        console.log(response);
                        $('.attraction_location').html(response);
                    }
                });
    }
    
    
    // Attraction Detail
    
    if($('.attraction_sidebar').length){
        $('.attraction_sidebar').on('click','.attraction_location a',function(e){
            e.preventDefault(); 
            var att_id = $(this).attr('data-id');
            get_attraction_detail(att_id);
        });
    }
    
    function get_attraction_detail(att_id){
        $.ajax(
                {
                    type: 'get',
                    data: {action : 'get_attraction_detail', att_id : att_id},
                    url: hillter.url,
                    async: true,
                    beforeSend: function () {                        
                    },
                    success: function (response) {
                        console.log(response);
                        $('.attraction .col-md-8').html(response);
                    }
                });
    }
    
    
    });