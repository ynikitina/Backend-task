/*
  Функция для отправки данных на сервер
  url - исполняющий файл на сервере, который в дальнейшем будет работать с данными
  method - метод 
  sData - данные, отправляемые на сервер
  callback - функция, выполняющая обработку данных
*/ 

function sendData(url, method, sData, callback){
    let json = JSON.stringify(sData);//переводим данные в тип json
    ajax(url, method, json,callback);
}

function ajax(url, method, json, callback){
    let xhttp = new XMLHttpRequest();//создаем XMLHttpRequest-объект
    xhttp.open(method, url, true);//формируем запрос
    xhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=utf-8');
    if (json !== '') {
        xhttp.send('data=' + json);//посылаем данные на сервер
    } else{
        xhttp.send();
    }    
    xhttp.onreadystatechange = function(){
        //обработка ошибки 4-состояние done
        if (xhttp.status == 200 && xhttp.readyState == 4) {
            if(callback){
                callback(xhttp);
            }               
        } else if (xhttp.readyState == 4) {
            //это ошибка
            console.error(xhttp);
        }
    }
}