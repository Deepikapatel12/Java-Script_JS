$(document).ready(function(){
    $('#btn').click(function(){
        $('p').fadeOut(2000)
    })
    $('#btn1').click(function(){
        $('.head').fadeIn(3000)
    })
    
    $('#btn2').click(function(){
        $('p').fadeToggle(2000)
    })
    $('#btn3').click(function(){
        $('p').fadeToggle(2000)
        $('.head').fadeToggle(3000)
    })

    $('#button').click(function(){
        $('p').slideUp(3000)
    })
    $('#button1').click(function(){
        $('p').slideDown(3000)
    })
    $('#button2').click(function(){
        $('p').slideToggle(3000)
    })
})