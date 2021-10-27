    //задания из раздела Frond end developer freeCodeCamp

    // Раздел React

    1. const JSX = <h1>Hello JSX!</h1>;   // Без дива сразу пишем текст с html атрибутами в константу

    2. const JSX = <div>    // ПРосто в один див написали много всего, а див засунули в переменную
    <h1>Заголовок</h1>
    <p>Список:</p>
    <ul>
    <li> раз</li>
    <li>два</li>
    <li>три</li>
    </ul>
    </div>

    3. const JSX = (
        <div>
          <h1>This is a block of JSX</h1>
          {/*комент в react*/}            // комент в react
          <p>Here's a subtitle</p>
        </div>
      );

    4. const JSX = (
        <div>
          <h1>Hello World</h1>
          <p>Lets render this to the DOM</p>
        </div>
      );
      ReactDOM.render(JSX,document.getElementById('challenge-node') )   // указываю с помощью команды что ходим отображать на экране
      // Change code below this line

    5. const JSX = (
        <div className='myDiv'>   // в реакте вместо class используется className
          <h1>Add a class to this div</h1>
        </div>
      );  

    6. const JSX = (
        <div>
          <h2>Welcome to React!</h2> <br />   // самозакрывающиеся тэги
          <p>Be sure to close all tags!</p>
          <hr />
        </div>
      );  

      7. const MyComponent = function() {
        // Change code below this line
      return (                                        //  первый способ создания обьекта в реакте
        <div>строка текста!</div>
      );
      
      
        // Change code above this line
      }

      10. class MyComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          // Change code below this line
      return (                                           // второй способ создания обьекта в реакте
        <div>
      <h1>Hello React!</h1>
      </div>
      );
      
      
          // Change code above this line
        }
      }; 

      11. 