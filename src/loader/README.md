Подключение загрузчика на стороннем ресурсе
-------------

Подключить скрипт js и файл со стилями  на стороннем ресурсе. Добавить на стороннем ресурсе кнопку "примерить" с html атрибутом data-goodstyle='{"gender":"woman", "squ":"ntgdgs",  "lang":"ru"}'.
К примеру:

```html
<div data-goodstyle='{"gender":"woman", "squ":"ntgdgs",  "lang":"ru"}'>try on for women </div>

<div data-goodstyle='{"gender":"man", "squ":"ntgdgs",  "lang":"ru"}'>try on for man </div>
```

В json можно включить и другие данные для передачи их в приложение goodstyle. Соответственно в самом goodstyle приложении необходимо реализовать обработку полученных данных. На данный момент для примера обрабатывается изменение пола из внешнего приложения.

Политика одинакового источника в текущей версии настроена на получение от источника http://localhost:3000 и отправка в https://dl5k3yfyoyakh.cloudfront.net. В дальнейшем нужно будет доработать чтобы список доверительных источников предварительно тянулся с нашего сервера.

Чтобы проверить запусить локально онбординг (yarn dev). По умолчанию он запуститься на порту 3000. Добавить скрипт и стили из архива. Подключить их index.html и добавить две произвольные кнопки:

```html
<div data-goodstyle='{"gender":"woman", "squ":"ntgdgs",  "lang":"ru"}'>
  try on for women
</div>

<div data-goodstyle='{"gender":"man", "squ":"ntgdgs",  "lang":"ru"}'>
  try on for man
</div>
```

