var selects = document.querySelectorAll('select[data-answer]');
var params = new URLSearchParams(location.search);
var saved = params.get('a');

//При загрузке страницы, если в ссылке есть ответы, автоматически заполнить списки
if (saved) {
    var arr = saved.split(',');
    selects.forEach(function (sel, i) {
        if (arr[i]) {
            sel.selectedIndex = Number(arr[i]);
        }
    });
}

// Привязать событие клика к кнопке "Скопировать ссылку"
document.getElementById('shareBtn').addEventListener('click', function () {
    var answers = [];
    
    // 1.  Пройти по всем выпадающим спискам и собрать ответы
    selects.forEach(function (sel) {
        answers.push(sel.selectedIndex);  
    }); 
    // 2. Сформировать URL со всеми ответами
    var url = location.origin + location.pathname + '?a=' + answers.join(',');
    
    // 3.  Скопировать в буфер обмена
    navigator.clipboard.writeText(url);

    // 4. Показать текст подсказки
    alert('Ссылка успешно скопирована!');
}); // <--- 闭合 addEventListener

//  Привязать событие клика к кнопке "Сбросить"
document.getElementById('resetBtn').addEventListener('click', function () {
    selects.forEach(function (sel) {
        sel.selectedIndex = 0;   
    });
    document.getElementById('result').textContent = ''; 
});