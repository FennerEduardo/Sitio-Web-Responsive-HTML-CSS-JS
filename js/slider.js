var slider = $('#slider');
var siguiente = $('#btn-next');
var anterior = $('#btn-prev');
//variables de segundo slider
var slider_dos = $('#slider2');
var siguiente_dos = $('#btn-next2');
var anterior_dos = $('#btn-prev2');
//variables de tercer slider
var slider_tres = $('#slider3');
var siguiente_tres = $('#btn-next3');
var anterior_tres = $('#btn-prev3');
//variables de cuarto slider
var slider_cuatro = $('#slider4');
var siguiente_cuatro = $('#btn-next4');
var anterior_cuatro = $('#btn-prev4');
//variables de quinto slider
var slider_cinco = $('#slider5');
var siguiente_cinco = $('#btn-next5');
var anterior_cinco = $('#btn-prev5');
//variables de sexto slider
var slider_seis = $('#slider6');
var siguiente_seis = $('#btn-next6');
var anterior_seis = $('#btn-prev6');
//variables de septimo slider
var slider_siete = $('#slider7');
var siguiente_siete= $('#btn-next7');
var anterior_siete = $('#btn-prev7');
//variables de octavo slider
var slider_ocho = $('#slider8');
var siguiente_ocho= $('#btn-next8');
var anterior_ocho = $('#btn-prev8');
//variables de noveno slider
var slider_nueve = $('#slider9');
var siguiente_nueve= $('#btn-next9');
var anterior_nueve = $('#btn-prev9');
//variables de decimo slider
var slider_diez = $('#slider10');
var siguiente_diez= $('#btn-next10');
var anterior_diez = $('#btn-prev10');
//variables de once slider
var slider_once = $('#slider11');
var siguiente_once= $('#btn-next11');
var anterior_once = $('#btn-prev11');
//variables de doce slider
var slider_doce = $('#slider12');
var siguiente_doce= $('#btn-next12');
var anterior_doce = $('#btn-prev12');
//variables de trece slider
var slider_trece = $('#slider13');
var siguiente_trece= $('#btn-next13');
var anterior_trece = $('#btn-prev13');
//variables de catorce slider
var slider_catorce = $('#slider14');
var siguiente_catorce= $('#btn-next14');
var anterior_catorce = $('#btn-prev14');
//variables de quince slider
var slider_quince = $('#slider15');
var siguiente_quince= $('#btn-next15');
var anterior_quince = $('#btn-prev15');
//variables de quince slider
var slider_dieciseis = $('#slider16');
var siguiente_dieciseis= $('#btn-next16');
var anterior_dieciseis = $('#btn-prev16');




//mover ultima imagen al primer lugar
$('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider2
$('#slider2 .slider__section:last').insertBefore('#slider2 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_dos.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider3
$('#slider3 .slider__section:last').insertBefore('#slider3 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_tres.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider4
$('#slider4 .slider__section:last').insertBefore('#slider4 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_cuatro.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider5
$('#slider5 .slider__section:last').insertBefore('#slider5 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_cinco.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider6
$('#slider6 .slider__section:last').insertBefore('#slider6 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_seis.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider7
$('#slider7 .slider__section:last').insertBefore('#slider7 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_siete.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider8
$('#slider8 .slider__section:last').insertBefore('#slider8 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_ocho.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider9
$('#slider9 .slider__section:last').insertBefore('#slider9 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_nueve.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider10
$('#slider10 .slider__section:last').insertBefore('#slider10 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_diez.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider11
$('#slider11 .slider__section:last').insertBefore('#slider11 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_once.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider12
$('#slider12 .slider__section:last').insertBefore('#slider12 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_doce.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider13
$('#slider13 .slider__section:last').insertBefore('#slider13 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_trece.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider14
$('#slider14 .slider__section:last').insertBefore('#slider14 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_catorce.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider15
$('#slider15 .slider__section:last').insertBefore('#slider15 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_quince.css('margin-left','-'+100+'%');

//mover ultima imagen al primer lugar slider16
$('#slider16 .slider__section:last').insertBefore('#slider16 .slider__section:first');
//mostrar la primera imagen con un margen de -100%
slider_dieciseis.css('margin-left','-'+100+'%');



//mover del primer slider
function moverDerecha() {
	"user strict";
    slider.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider .slider__section:first').insertAfter('#slider .slider__section:last');
        slider.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda() {
    slider.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider .slider__section:last').insertBefore('#slider .slider__section:first');
        slider.css('margin-left', '-'+100+'%');
    });
}
//mover del segundo slider
	function moverDerecha2() {
	"user strict";
    slider_dos.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider2 .slider__section:first').insertAfter('#slider2 .slider__section:last');
        slider_dos.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda2() {
    slider.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider2 .slider__section:last').insertBefore('#slider2 .slider__section:first');
        slider_dos.css('margin-left', '-'+100+'%');
    });
}
//mover del tercer slider
	function moverDerecha3() {
	"user strict";
    slider_tres.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider3 .slider__section:first').insertAfter('#slider3 .slider__section:last');
        slider_tres.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda3() {
    slider_tres.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider3 .slider__section:last').insertBefore('#slider3 .slider__section:first');
        slider_tres.css('margin-left', '-'+100+'%');
    });
}
//mover del cuarto slider
	function moverDerecha4() {
	"user strict";
    slider_cuatro.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider4 .slider__section:first').insertAfter('#slider4 .slider__section:last');
        slider_cuatro.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda4() {
    slider_cuatro.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider4 .slider__section:last').insertBefore('#slider4 .slider__section:first');
        slider_cuatro.css('margin-left', '-'+100+'%');
    });
}
//mover del quinto slider
	function moverDerecha5() {
	"user strict";
    slider_cinco.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider5 .slider__section:first').insertAfter('#slider5 .slider__section:last');
        slider_cinco.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda5() {
    slider_cinco.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider5 .slider__section:last').insertBefore('#slider5 .slider__section:first');
        slider_cinco.css('margin-left', '-'+100+'%');
    });
}
//mover del sexto slider
	function moverDerecha6() {
	"user strict";
    slider_seis.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider6 .slider__section:first').insertAfter('#slider6 .slider__section:last');
        slider_seis.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda6() {
    slider_seis.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider6 .slider__section:last').insertBefore('#slider6 .slider__section:first');
        slider_seis.css('margin-left', '-'+100+'%');
    });
}
//mover del septimo slider
	function moverDerecha7() {
	"user strict";
    slider_siete.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider7 .slider__section:first').insertAfter('#slider7 .slider__section:last');
        slider_siete.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda7() {
    slider_siete.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider7 .slider__section:last').insertBefore('#slider7 .slider__section:first');
        slider_siete.css('margin-left', '-'+100+'%');
    });
}
//mover del octavo slider
	function moverDerecha8() {
	"user strict";
    slider_ocho.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider8 .slider__section:first').insertAfter('#slider8 .slider__section:last');
        slider_ocho.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda8() {
    slider_ocho.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider8 .slider__section:last').insertBefore('#slider8 .slider__section:first');
        slider_ocho.css('margin-left', '-'+100+'%');
    });
}
//mover del noveno slider
	function moverDerecha9() {
	"user strict";
    slider_nueve.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider9 .slider__section:first').insertAfter('#slider9 .slider__section:last');
        slider_nueve.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda9() {
    slider_nueve.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider9 .slider__section:last').insertBefore('#slider9 .slider__section:first');
        slider_nueve.css('margin-left', '-'+100+'%');
    });
}
//mover del decimo slider
	function moverDerecha10() {
	"user strict";
    slider_diez.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider10 .slider__section:first').insertAfter('#slider10 .slider__section:last');
        slider_diez.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda10() {
    slider_diez.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider10 .slider__section:last').insertBefore('#slider10 .slider__section:first');
        slider_diez.css('margin-left', '-'+100+'%');
    });
}
//mover del once slider
	function moverDerecha11() {
	"user strict";
    slider_once.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider11 .slider__section:first').insertAfter('#slider11 .slider__section:last');
        slider_once.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda11() {
    slider_once.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider11 .slider__section:last').insertBefore('#slider11 .slider__section:first');
        slider_once.css('margin-left', '-'+100+'%');
    });
}
//mover del doce slider
	function moverDerecha12() {
	"user strict";
    slider_doce.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider12 .slider__section:first').insertAfter('#slider12 .slider__section:last');
        slider_doce.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda12() {
    slider_doce.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider12 .slider__section:last').insertBefore('#slider12 .slider__section:first');
        slider_doce.css('margin-left', '-'+100+'%');
    });
}
//mover del trece slider
	function moverDerecha13() {
	"user strict";
    slider_trece.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider13 .slider__section:first').insertAfter('#slider13 .slider__section:last');
        slider_trece.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda13() {
    slider_trece.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider13 .slider__section:last').insertBefore('#slider13 .slider__section:first');
        slider_trece.css('margin-left', '-'+100+'%');
    });
}
//mover del catorce slider
	function moverDerecha14() {
	"user strict";
    slider_catorce.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider14 .slider__section:first').insertAfter('#slider14 .slider__section:last');
        slider_catorce.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda14() {
    slider_catorce.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider14 .slider__section:last').insertBefore('#slider14 .slider__section:first');
        slider_catorce.css('margin-left', '-'+100+'%');
    });
}
//mover del quince slider
	function moverDerecha15() {
	"user strict";
    slider_quince.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider15 .slider__section:first').insertAfter('#slider15 .slider__section:last');
        slider_quince.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda15() {
    slider_quince.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider15 .slider__section:last').insertBefore('#slider15 .slider__section:first');
        slider_quince.css('margin-left', '-'+100+'%');
    });
}
//mover del dieciseis slider
	function moverDerecha16() {
	"user strict";
    slider_dieciseis.animate({
        marginLeft:'-'+200+'%'
    } ,700, function(){
		
        $('#slider16 .slider__section:first').insertAfter('#slider16 .slider__section:last');
        slider_dieciseis.css('margin-left', '-'+100+'%');
    });
}

function moverIzquierda16() {
    slider_dieciseis.animate({
        marginLeft:0
    } ,700, function(){
        $('#slider16 .slider__section:last').insertBefore('#slider16 .slider__section:first');
        slider_dieciseis.css('margin-left', '-'+100+'%');
    });
}


//hacer que el slider sea automático
function autoplay() {
	    interval = setInterval(function(){
        moverDerecha();
    }, 5000);
}
//hacer que el slider2 sea automático
function autoplay2() {
	    interval = setInterval(function(){
        moverDerecha2();
    }, 5000);
}
//hacer que el slider3 sea automático
function autoplay3() {
	    interval = setInterval(function(){
        moverDerecha3();
    }, 5000);
}
//hacer que el slider4 sea automático
function autoplay4() {
	    interval = setInterval(function(){
        moverDerecha4();
    }, 5000);
}
//hacer que el slider5 sea automático
function autoplay5() {
	    interval = setInterval(function(){
        moverDerecha5();
    }, 5000);
}
//hacer que el slider6 sea automático
function autoplay6() {
	    interval = setInterval(function(){
        moverDerecha6();
    }, 5000);
}
//hacer que el slider7 sea automático
function autoplay7() {
	    interval = setInterval(function(){
        moverDerecha7();
    }, 5000);
}
//hacer que el slider8 sea automático
function autoplay8() {
	    interval = setInterval(function(){
        moverDerecha8();
    }, 5000);
}
//hacer que el slider9 sea automático
function autoplay9() {
	    interval = setInterval(function(){
        moverDerecha9();
    }, 5000);
}
//hacer que el slider10 sea automático
function autoplay10() {
	    interval = setInterval(function(){
        moverDerecha10();
    }, 5000);
}
//hacer que el slider11 sea automático
function autoplay11() {
	    interval = setInterval(function(){
        moverDerecha11();
    }, 5000);
}
//hacer que el slider12 sea automático
function autoplay12() {
	    interval = setInterval(function(){
        moverDerecha12();
    }, 5000);
}
//hacer que el slider13 sea automático
function autoplay13() {
	    interval = setInterval(function(){
        moverDerecha13();
    }, 5000);
}
//hacer que el slider14 sea automático
function autoplay14() {
	    interval = setInterval(function(){
        moverDerecha14();
    }, 5000);
}
//hacer que el slider15 sea automático
function autoplay15() {
	    interval = setInterval(function(){
        moverDerecha15();
    }, 5000);
}
//hacer que el slider16 sea automático
function autoplay16() {
	    interval = setInterval(function(){
        moverDerecha16();
    }, 5000);
}

//clic slider 1
siguiente.on('click',function() {
    "use strict";
    moverDerecha();
    clearInterval(interval);
    autoplay();
});

anterior.on('click',function() {
    "use strict";
    moverIzquierda();
    clearInterval(interval);
    autoplay();
});

//clic slider 2
	siguiente_dos.on('click',function() {
    "use strict";
    moverDerecha2();
    clearInterval(interval);
    autoplay2();
});

anterior_dos.on('click',function() {
    "use strict";
    moverIzquierda2();
    clearInterval(interval);
    autoplay2();
});
//clic slider 3
	siguiente_tres.on('click',function() {
    "use strict";
    moverDerecha3();
    clearInterval(interval);
    autoplay3();
});

anterior_tres.on('click',function() {
    "use strict";
    moverIzquierda3();
    clearInterval(interval);
    autoplay3();
});
//clic slider 4
	siguiente_cuatro.on('click',function() {
    "use strict";
    moverDerecha4();
    clearInterval(interval);
    autoplay4();
});

anterior_cuatro.on('click',function() {
    "use strict";
    moverIzquierda4();
    clearInterval(interval);
    autoplay4();
});
//clic slider 5
	siguiente_cinco.on('click',function() {
    "use strict";
    moverDerecha5();
    clearInterval(interval);
    autoplay5();
});

anterior_cinco.on('click',function() {
    "use strict";
    moverIzquierda5();
    clearInterval(interval);
    autoplay5();
});
//clic slider 6
	siguiente_seis.on('click',function() {
    "use strict";
    moverDerecha6();
    clearInterval(interval);
    autoplay6();
});

anterior_seis.on('click',function() {
    "use strict";
    moverIzquierda6();
    clearInterval(interval);
    autoplay6();
});
//clic slider 7
	siguiente_siete.on('click',function() {
    "use strict";
    moverDerecha7();
    clearInterval(interval);
    autoplay7();
});

anterior_siete.on('click',function() {
    "use strict";
    moverIzquierda7();
    clearInterval(interval);
    autoplay7();
});
//clic slider 8
	siguiente_ocho.on('click',function() {
    "use strict";
    moverDerecha8();
    clearInterval(interval);
    autoplay8();
});

anterior_ocho.on('click',function() {
    "use strict";
    moverIzquierda8();
    clearInterval(interval);
    autoplay8();
});
//clic slider 9
	siguiente_nueve.on('click',function() {
    "use strict";
    moverDerecha9();
    clearInterval(interval);
    autoplay9();
});

anterior_nueve.on('click',function() {
    "use strict";
    moverIzquierda9();
    clearInterval(interval);
    autoplay9();
});
//clic slider 10
	siguiente_diez.on('click',function() {
    "use strict";
    moverDerecha10();
    clearInterval(interval);
    autoplay10();
});

anterior_diez.on('click',function() {
    "use strict";
    moverIzquierda10();
    clearInterval(interval);
    autoplay10();
});
//clic slider 11
	siguiente_once.on('click',function() {
    "use strict";
    moverDerecha11();
    clearInterval(interval);
    autoplay11();
});

anterior_once.on('click',function() {
    "use strict";
    moverIzquierda11();
    clearInterval(interval);
    autoplay11();
});
//clic slider 12
	siguiente_doce.on('click',function() {
    "use strict";
    moverDerecha12();
    clearInterval(interval);
    autoplay12();
});

anterior_doce.on('click',function() {
    "use strict";
    moverIzquierda12();
    clearInterval(interval);
    autoplay12();
});
//clic slider 13
	siguiente_trece.on('click',function() {
    "use strict";
    moverDerecha13();
    clearInterval(interval);
    autoplay13();
});

anterior_trece.on('click',function() {
    "use strict";
    moverIzquierda13();
    clearInterval(interval);
    autoplay13();
});
//clic slider 14
	siguiente_catorce.on('click',function() {
    "use strict";
    moverDerecha14();
    clearInterval(interval);
    autoplay14();
});

anterior_catorce.on('click',function() {
    "use strict";
    moverIzquierda14();
    clearInterval(interval);
    autoplay14();
});
//clic slider 15
	siguiente_quince.on('click',function() {
    "use strict";
    moverDerecha15();
    clearInterval(interval);
    autoplay15();
});

anterior_quince.on('click',function() {
    "use strict";
    moverIzquierda15();
    clearInterval(interval);
    autoplay15();
});
//clic slider 16
	siguiente_dieciseis.on('click',function() {
    "use strict";
    moverDerecha16();
    clearInterval(interval);
    autoplay16();
});

anterior_dieciseis.on('click',function() {
    "use strict";
    moverIzquierda16();
    clearInterval(interval);
    autoplay16();
});

autoplay();
autoplay2();
autoplay3();
autoplay4();
autoplay5();
autoplay6();
autoplay7();
autoplay8();
autoplay9();
autoplay10();
autoplay11();
autoplay12();
autoplay13();
autoplay14();
autoplay15();
autoplay16();