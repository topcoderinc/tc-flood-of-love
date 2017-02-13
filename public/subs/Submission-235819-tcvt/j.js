/**
 * Author: hi4sandy (https://sandeepyadav.net);
 * Licence: MIT
 */
var kv = ["Jessie", "lovely",
  "emails", "online", "TCO 14", "SFO", "hi4sandy", "love",
  "joy", "first", "7", "Admins", "Copilot", "ideas", "World", "work", "T-shirt", "lovely", "love"
];

$('document').ready(function() {
  $('#tch').on('keyup', function() {
    $('#tchv').text($(this).text());
  })

  $('.action .btn').on('click', function() {
    submit();
  })

  $('.v').on('focus', function() {
    $(this).removeClass('error');
  })

  console.info('>>> >>> >>> >>> >>> >>> Need help ??');
  console.info('>>> >>> >>> >>> >>> >>> Type random() in console  & enjoy !!!');
})

function submit() {
  $('.v').each(function() {
    var im = $(this);
    if (im.text() && $.trim(im.text()) !== '') {
      im.removeAttr('contenteditable');
    } else {
      im.addClass('error');
    }
  })
  if ($('.v.error').length <= 0) {
    $('body').addClass('submitted');
    $('body').scrollTop(1);
  }
}

function random() {
  $('.v').each(function(i) {
    $(this).removeClass('contenteditable');
    $(this).text(kv[i]);
    $('#tchv').text($('#tch').text());    
    $('.error').removeClass('error');
  })
  submit();
}
