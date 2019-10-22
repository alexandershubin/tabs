window.addEventListener('DOMContentLoaded', function() {
'use strict';

let info = document.querySelector('.info-header'),
		infoTab = document.querySelectorAll('.info-header-tab'),
		tabContent = document.querySelectorAll('.info-tabcontent');

		// скрываем все блоки кроме первого
		function hideTab(a) {
			for(let i = a; i < tabContent.length; i++) {
				tabContent[i].classList.remove('show');
				tabContent[i].classList.add('hide');
			}
		}
hideTab(1);
// прописываем условия показа блока
		function showTab(b) {
			if(tabContent[b].classList.contains('hide')) {
				tabContent[b].classList.remove('hide');
				tabContent[b].classList.add('show');
			}
		}
// показываем блоки при клике на табы
		info.addEventListener('click', function(e) {
			let target = e.target;
			if(target && target.classList.contains('info-header-tab')) {
				for(let i = 0; infoTab.length; i++) {
					if(target == infoTab[i]) {
						hideTab(0);
						showTab(i);
						break;
					}
				}
			}
		});
});