jQuery(function ($) {

    var file_frame = [],
        $button = $('.set-post-thumbnail-second'),
        $value = $('.post-thumbnail-second-value'),
        $removebutton = $('.remove-post-thumbnail-second');

    $button.on('click', function (event) {

        event.preventDefault();

        var $this = $(this),
            id = $this.attr('id');
        // If the media frame already exists, reopen it.
        if (file_frame[id]) {
            file_frame[id].open();
            return;
        }

        // Create the media frame.
        file_frame[id] = wp.media.frames.file_frame = wp.media({
            title: $this.data('uploader_title'),
            button: {
                text: 'Set featured image'
            },
            multiple: false  // Set to true to allow multiple files to be selected
        });

        // When an image is selected, run a callback.
        file_frame[id].on('select', function () {

            // We set multiple to false so only get one image from the uploader
            var attachment = file_frame[id].state().get('selection').first().toJSON();

            // set preview
            var img = '<img src="' + attachment.url + '" style="max-width:100%;" /><br/>';

            $('.preview-image').html(img);
            $button.hide('set-post-thumbnail-second');
            $removebutton.show();
            $value.val(attachment.id); // Set current attachment id
        });

        // Finally, open the modal
        file_frame[id].open();

    });

    $removebutton.on('click', function (event) {
        event.preventDefault();
        $('.preview-image').html('');
        $button.show();
        $removebutton.hide();
        $value.val("");
    });

});
