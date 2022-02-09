# Form constructor

В тэг ```<FormEditor />``` передаётся массив объектов, каждый из которов является полем.

### Типы полей:

-_textInput_ - обычный текстовый инпут;
-_numberInput_ - обычный инпут типа *number*;
-_passwordInput_ - инпут для пароля;
-_areaInput_ - обычный инпут типа *textarea*;
-_checkInput_ - инпут типа *checkbox*;
-_multiInput_ - набор текстовых инпутов;
-_multiCheck_ - набор чекбоксов;

##### Пример использования:
![IMG](https://sun9-57.userapi.com/impg/ZLzeKIpY7qafSqobCSBuhtEmpjhBIiLVpoNZjQ/tBQLq39Gnow.jpg?size=425x908&quality=96&sign=6cc570805743b9faf96b7fc3460f089a&type=album)
```const randomProps = [
    {
        name: "Login",
        placeholder: "Введите логин...",
        type: "textInput"
    },
    { 
        name : "Blog",
        placeholder: "Введите текст...",
        type: "multiInput",
        quantity: 3
    },
    { 
        name: "Quiz",
        type: "multiCheck",
        quantity: 3
    },
    { 
        name : "List",
        placeholder: "Введите текст...",
        type: "multiInput",
        quantity: 3
    },
    {
        name: "Password",
        placeholder: "Введите пароль",
        type: "passwordInput"
    }
]```

