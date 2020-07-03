/*
	call by value O	call by reference X // 자바스크립트는 없음 // C언어 같은 포인터가 있는 언어에서는 있음


-----------------------------
	function 함수 (매개변수) {
		매개변수 = 8; // 매개변수 자체를 바꿀 경우에는 참조 관계가 끊긴다.
		console.log(매개변수);
	}
	var 인자 = {a: 5};
	함수(인자); //{a: 5}
	console.log(인자); // 8

-----------------------------
	function 함수 (매개변수) {
		매개변수.a = 10; // 매개변수의 속성을 바꿀 수 있음
		console.log(매개변수);
	}
	var 인자 = {a: 5};
	함수(인자); // {a: 10}
	console.log(인자); // {a: 10}
-----------------------------


	var prototype = {
		type: '카드';
	}
	function 카드공장 (name, att, hp) {
		var 카드 = Object.create(prototype);
		카드.name = name;
		카드.att = att;
		카드.hp = hp;
		return 카드;
	}

	객체지향프로그래밍 ↓
	function Card(name, att, hp) {
		this.name = name;
		this.att = att;
		this.hp = hp;
	}
	Card.prototype = prototype;

	var zero = new Card('zero', 5, 10);

	var prototype = {type : '카드'}
	function Card(name, att, hp) {
		"use strict" // 엄격모드
		this.name = name;
		this.att = att;
		this.hp = hp;
	}
	Card.prototype = prototype;
	var 제로초 = new Card('제로초', 5, 10);
 */

var rival_hero = document.getElementById('rival_hero');
var my_hero = document.getElementById('my-hero');
var rival_deck = document.getElementById('rival_deck');
var my_deck = document.getElementById('my_deck');
var rivalDeckData = [];
var myDeckData = [];
var rivalHeroData;
var myHeroData;

function cardDomConnect (data, dom, hero) {
	var card = document.querySelector('.card-hidden .card').cloneNode(true); // cloneNode로 복사
	card.querySelector('.card-cost').textContent = data.cost;
	card.querySelector('.card-att').textContent = data.att;
	card.querySelector('.card-hp').textContent = data.hp;
	if (hero) {
		card.querySelector('.card-cost').style = true;
		var name = document.createElement('div');
		name.textContent = '영웅';
		card.appendChild(name);
	}
	dom.appendChild(card);
}

function createRivalDeck (num) {
	for (var i = 0; i < num; i++) {
		rivalDeckData.push(cardFactory());
	}
	rivalDeckData.forEach(function (data) {
		cardDomConnect(data, rival_deck);
	});
}

function createMyDeck (num) {
	for (var i = 0; i < num; i++) {
		myDeckData.push(cardFactory());
	}
	myDeckData.forEach(function (data) {
		cardDomConnect(data, my_deck);
	});
}

function createMyHero () {
	myHeroData = cardFactory(true);
	cardDomConnect (myHeroData, my_hero, true);
}

function createRivalHero () {
	rivalHeroData = cardFactory();
	cardDomConnect (rivalHeroData, rival_hero, true);
}

function InitialSetup () {
	createRivalDeck(5);
	createMyDeck(5);
	createMyHero();
	createRivalHero();

}

function Card (heros) {
	if (heros) {
		this.att = Math.ceil(Math.random() * 2);
		this.hp = Math.ceil(Math.random() * 5) + 25;
		this.hero = true;
	} else {
		this.att = Math.ceil(Math.random() * 5);
		this.hp = Math.ceil(Math.random() * 5);
		this.cost = Math.floor((this.att + this.hp) / 2);
	}
}

function cardFactory (heros) {
	return new Card(heros);
}

InitialSetup ();
