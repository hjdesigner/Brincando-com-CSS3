//MONTANTO O AUDIO
var audiotypes={
    "mp3": "audio/mpeg",
    "mp4": "audio/mp4",
    "ogg": "audio/ogg",
    "wav": "audio/wav"
}

function sound(sound){
    var audioComponente = document.createElement('audio')
    if (audioComponente.canPlayType){
        for (var i=0; i<arguments.length; i++){
            var source_element = document.createElement('source')
            source_element.setAttribute('src', arguments[i])
            if (arguments[i].match(/\.(\w+)$/i))
                source_element.setAttribute('type', audiotypes[RegExp.$1])
            audioComponente.appendChild(source_element)
        }
        audioComponente.playclip=function(){
            audioComponente.currentTime=0
            audioComponente.play()
        }
        return audioComponente
    }
}
//SALANDO O AUDIO EM UMA VARIAVEL
var bumbo  = sound('http://www.henriquemelanda.com.br/assests/midia/bumbo.mp3', "http://www.henriquemelanda.com.br/assests/midia/bumbo.mp3");
var chimbal  = sound('http://www.henriquemelanda.com.br/assests/midia/chimbal.mp3', "http://www.henriquemelanda.com.br/assests/midia/chimbal.mp3");
var caixa  = sound('http://www.henriquemelanda.com.br/assests/midia/caixa.mp3', "http://www.henriquemelanda.com.br/assests/midia/caixa.mp3");
var tom1  = sound('http://www.henriquemelanda.com.br/assests/midia/tom1.mp3', "http://www.henriquemelanda.com.br/assests/midia/tom1.mp3");
var tom2  = sound('http://www.henriquemelanda.com.br/assests/midia/tom2.mp3', "http://www.henriquemelanda.com.br/assests/midia/tom2.mp3");
var surdo  = sound('http://www.henriquemelanda.com.br/assests/midia/surdo.mp3', "http://www.henriquemelanda.com.br/assests/midia/surdo.mp3");
var conducao  = sound('http://www.henriquemelanda.com.br/assests/midia/conducao.mp3', "http://www.henriquemelanda.com.br/assests/midia/conducao.mp3");
 
//BUMBO
$('.bumbo').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO BUMBO
	bumbo.playclip();
});
//CHIMBAL
$('.pratos-chimbal').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO CHIMBAL
	chimbal.playclip();
});
//TOM 1
$('.tom-1').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO TOM 1
	tom1.playclip();
});
//TOM 1
$('.tom-2').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO TOM 2
	tom2.playclip();
});
//SURDO
$('.surdo').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO SURDO
	surdo.playclip();
});
//CONDUÇÃO
$('.prato-conducao').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO CONDUÇÃO
	conducao.playclip();
});
//CAIXA
$('.caixa').on('click', function(event) {
	event.preventDefault();
	//TOCANDO O AUDIO QUANDO CLICA NO CAIXA
	caixa.playclip()
});

var precionado;

$(document).ready(function(){
	$("body").keypress(function(e){
		e.preventDefault();
		preciona = (String.fromCharCode(e.which));
			//TOCANDO O AUDIO DA CAIXA QUANDO APERTA A TECLA Z E .
			if( preciona == 'z' || preciona == '.' ){
				caixa.playclip()
			}
			//TOCANDO O AUDIO DO TOM 1 QUANDO APERTA A TECLA L E S
			if( preciona == 'l' || preciona == 's' ){
				tom1.playclip()
			}
			//TOCANDO O AUDIO DO TOM 2 QUANDO APERTA A TECLA K E D
			if( preciona == 'k' || preciona == 'd' ){
				tom2.playclip()
			}
			//TOCANDO O AUDIO DO SURDO QUANDO APERTA J TECLA K E F
			if( preciona == 'j' || preciona == 'f' ){
				surdo.playclip()
			}
			//TOCANDO O AUDIO DO CHIMBAL QUANDO APERTA A TECLA ,
			if( preciona == ',' ){
				chimbal.playclip()
			}
			//TOCANDO O AUDIO DA CONDUÇÃO QUANDO APERTA A TECLA N
			if( preciona == 'n' ){
				conducao.playclip()
			}
			//TOCANDO O AUDIO DO BUMBO QUANDO APERTA M TECLA B
			if( preciona == 'm' || preciona == 'b' ){
				bumbo.playclip();
			}
	});
	$(window).bind('keydown keyup', function(ev) {
			var clickEfeito = ev.which;
			//EFEITO BUMBO QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 77) {
				$('.bumbo').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.bumbo').removeClass('active');
			}
			if (ev.type == 'keydown' && clickEfeito == 66) {
				$('.bumbo').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.bumbo').removeClass('active');
			}
			//EFEITO CONDUÇÃO QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 78) {
				$('.prato-conducao').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.prato-conducao').removeClass('active');
			}
			//EFEITO CHIMBAL QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 188) {
				$('.pratos-chimbal').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.pratos-chimbal').removeClass('active');
			}
			//EFEITO SURDO QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 74) {
				$('.surdo').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.surdo').removeClass('active');
			}
			if (ev.type == 'keydown' && clickEfeito == 70) {
				$('.surdo').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.surdo').removeClass('active');
			}
			//EFEITO TOM 2 QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 75) {
				$('.tom-2').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.tom-2').removeClass('active');
			}
			if (ev.type == 'keydown' && clickEfeito == 68) {
				$('.tom-2').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.tom-2').removeClass('active');
			}
			//EFEITO TOM 1 QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 76) {
				$('.tom-1').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.tom-1').removeClass('active');
			}
			if (ev.type == 'keydown' && clickEfeito == 83) {
				$('.tom-1').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.tom-1').removeClass('active');
			}
			//EFEITO CAIXA QUANDO APERTA A TECLA
			if (ev.type == 'keydown' && clickEfeito == 190) {
				$('.caixa').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.caixa').removeClass('active');
			}
			if (ev.type == 'keydown' && clickEfeito == 90) {
				$('.caixa').addClass('active');
			}
			else if (ev.type == 'keyup') {
				$('.caixa').removeClass('active');
			}
		
	});
})