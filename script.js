//функция для подключения любого js файла
function include(url) {
    var script = document.createElement('script');
    script.src = url;
    document.getElementsByTagName('head')[0].appendChild(script);
    }

include('send_data.js');//подключаем отправку на сервер

const but = document.querySelector('.button_add');
but.addEventListener('click', addRow);

const but2 = document.querySelector('.button_send');
but2.addEventListener('click', createdate);

var n = 1; //счетчик записей
let aData = [];


function addRow(){
    creatediv(true);
}

function creatediv(rowCreate){
    n++;   
    let div2 = div_row_1.cloneNode(true);

    if (rowCreate){
        div2.classList.add('added');
    }

    div2.querySelector('.text_edit').value = "";
    div2.querySelector('.input_number').value = "";  
    div2.querySelector('div').innerHTML = n;             
    div2.id = 'div_row_' + n;  //id нового блока
    let my_element = document.querySelector('.table_content');
    my_element.append(div2);
}

function createdate(){
    //проверка пустых полей
    for(i = n; i !== 0; i--) {
        if (table.querySelector('#div_row_' + (n-i)+1).querySelector('.text_edit').value === ''){
            return false;
        }
    }
    const elements = document.querySelectorAll('.added');
    aData = [];
    for(const element of elements){
        let obj = {
            name:element.querySelector('.text_edit').value,
            age:element.querySelector('.input_number').value,
            city:element.querySelector('select').value,
        }
        aData.push(obj);
    }
    sendData('send_data.php','POST',aData);
}

function loaddata(){
    sendData('load_data.php','GET','', drawData);
}

function drawData(date){
    let aDate = JSON.parse(date.responseText);
    console.log(aDate);
    //удаление текущих элементов кроме 1
    for(i=2; i<=n; i++){
        table.querySelector('#div_row_' + i).remove;
    }    
    n = 1;
    //создать col-1 элементов, потому что уже есть 1
    while (n < aDate.length){ 
        creatediv();
    }    
    //заполнение
    for (i=1; i<=n; i++){
        table.querySelector('#div_row_' + i).querySelector('.text_edit').value = aDate[i-1][0];
        table.querySelector('#div_row_' + i).querySelector('.input_number').value = aDate[i-1][1];
        table.querySelector('#div_row_' + i).querySelector('select').value = aDate[i-1][2];

    }

}

loaddata();
