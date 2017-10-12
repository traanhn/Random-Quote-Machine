'use strict'

var quotes = [
  '\"Life is about making an impact, not making an income\". _Kevin Kruse', 
  '\"Whatever the mind of man can conceive and believe, it can achieve.\" _Napoleon Hill',
  '\"Strive not to be a success, but rather to be of value.\" _Albert Einstein',
  '\"Two roads diverged in a wood, and I took the one less traveled by, And that has made all the difference.\"  _Robert Frost',
  '\"I attribute my success to this: I never gave or took any excuse.\" _Florence Nightingale',
  '\"You miss 100% of the shots you do not take.\" _Wayne Gretzky', 
  '\"I\'ve missed more than 9000 shots in my career. I\'ve lost almost 300 games. 26 times I\'ve been trusted to take the game winning shot and missed. I\'ve failed over and over and over again in my life. And that is why I succeed.\" _Michael Jordan', 
  '\"The most difficult thing is the decision to act, the rest is merely tenacity.\" _Amelia Earhart', 
  '\"Every strike brings me closer to the next home run.\" _Babe Ruth', 
  '\"Definiteness of purpose is the starting point of all achievement.\" _W. Clement Stone'
];

function newQuote() {
		var randomNumber = Math.floor(Math.random()*(quotes.length));
		document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber]; 
	}







