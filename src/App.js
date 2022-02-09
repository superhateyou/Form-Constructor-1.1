import './App.css';
import { FormEditor } from './components/editor/FormEditor';

let arr = [
  {
    name : "sometext",
    placeholder: "Введите логин...",
    type: "textInput",
    value: "Dwayne Johnson",
    index: 0
  },
  { 
    name : "Blog",
    placeholder: "Введите текст...",
    type: "multiInput",
    value: ['one', 'two', 'three', 'four', 'five'],
    quantity: 3,
    index: 1
  },
  { 
    name : "PhoneNumber",
    placeholder: "Введите число...",
    type: "numberInput",
    value: "123",
    index: 2
  },
  {
    name: "Password",
    placeholder: "Введите пароль",
    type: "passwordInput",
    index: 3
  },
  {
    name : "input_checkbox",
    type : "checkInput",
    value: true,
    index: 4
  },
  { 
    name : "Quiz",
    type: "multiCheck",
    quantity: 3,
    checked: [true, false, true],
    index: 5
  },
  {
    name: "Radio",
    type: "radioInput",
    value: true,
    index: 6
  },
  {
    name: "Selection",
    type: "selectInput",
    options : ["blue", "red", "yellow", "green", "brown", "pink"],
    index: 7,
    value: "brown"
  },
  {
    name: "ColorPalette",
    type: "multiSelect",
    options : ["blue", "red", "brown", "pink"],
    value: ["blue", "pink"],
    index: 8
  },
  { 
    name : "inputtextarea",
    placeholder: "Введите текст...",
    type : "areaInput",
    index: 9
  },
  {
    name: "Choice",
    type: "keyValue",
    placeholder: "Введите текст",
    index: 10,
    options: ["60Hz", "75Hz", "120Hz", "144Hz", "240Hz", "360Hz"],
    keys: [0, 5, 4, 3, 2, 1],
    values: [
      "some text 1",
      "some text 2",
      "some text 3",
      "some text 4",
      "some text 5",
      "some text 6"
    ]
  }
]

function App() {
  return (
    <div className='App'>
      <div className="app-wrapper">
        <FormEditor arr={arr} />
      </div>
    </div>
  );
}

export default App;
