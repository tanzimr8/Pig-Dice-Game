var score = [0,0,0];
var currenTScore = 0;
var currentPlayer = 1;
document.getElementById('c-score-1').innerHTML = 0;
document.getElementById('c-score-2').innerHTML = 0;
document.getElementById('t-score-1').innerHTML = 0;
document.getElementById('t-score-2').innerHTML = 0;

document.getElementById('roll').addEventListener('click',rollDice);
	var turns = ['kichunai','&#xf525','&#xf528','&#xf527','&#xf524','&#xf523','&#xf526' ];
	var imgs = ['kichunai','Dice-1.jpg','Dice-2.jpg','Dice-3.jpg','Dice-4.jpg','Dice-5.jpg','Dice-6.jpg' ];
	function rollDice(){
		
		var turn = Math.floor(Math.random()*6)+1;
		document.getElementById('dice').innerHTML = turns[turn];
		document.getElementById('dice-image').src = imgs[turn] ;		
		if(turn != 1){
			currenTScore+= turn;
			console.log(currenTScore);
			document.querySelector('#c-score-' + currentPlayer).textContent = currenTScore;
			//console.log(document.querySelector('#c-score-' + currentPlayer).textContent);
			
		}
		else{
			
			currenTScore=0;
			document.querySelector('#c-score-' + currentPlayer).textContent = currenTScore;
			currentPlayer === 2 ? currentPlayer =1 : currentPlayer =2 ;
			
			
			
			document.querySelector('#c-score-' + currentPlayer).textContent = currenTScore;
			document.querySelector('.player-1-panel').classList.toggle('active');
			document.querySelector('.player-2-panel').classList.toggle('active');

			/*
			currentPlayer = 2;
			currenTScore+= turn;
			document.querySelector('#c-score-' + currentPlayer).textContent = currenTScore;*/
			
		}
		

	}
document.getElementById('hold').addEventListener('click',function(){
	score[currentPlayer]+= currenTScore;
	document.querySelector('#t-score-'+ currentPlayer).textContent = score[currentPlayer];

	currenTScore = 0;
	document.querySelector('#c-score-'+ currentPlayer).textContent =  0;
	if(score[currentPlayer]>= 100){
		document.querySelector('#player-' + currentPlayer ).textContent = "WINNER";
		document.getElementById('mid').innerHTML = '<h1 style= "color:red">Player ' + currentPlayer + ' Wins</h1>';
		/*document.getElementById('dice').style.display = 'none';
		document.getElementById('roll').style.display = 'none';
		document.getElementById('hold').style.display = 'none';*/
		document.getElementById('dice-image').style.display ='none';

	}
	else{
		currentPlayer === 2 ? currentPlayer =1 : currentPlayer =2 ;
		document.querySelector('.player-1-panel').classList.toggle('active');
		document.querySelector('.player-2-panel').classList.toggle('active');
	}

	
});