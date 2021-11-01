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



11.     const ChildComponent = () => {
        return (
          <div>
            <p>I am the child</p>
          </div>
        );
      };
      
      class ParentComponent extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h1>I am the parent</h1>
              { /* Change code below this line */ }
            <ChildComponent/>                            // добавил стрелочную функцию для отображения
      
              { /* Change code above this line */ }
            </div>
          );
        }
      };



12.     const TypesOfFruit = () => {
        return (
          <div>
            <h2>Fruits:</h2>
            <ul>
              <li>Apples</li>
              <li>Blueberries</li>
              <li>Strawberries</li>
              <li>Bananas</li>
            </ul>
          </div>
        );
      };
      
      const Fruits = () => {
        return (
          <div>
            { /* Change code below this line */ }
      <TypesOfFruit/>
      
            { /* Change code above this line */ }
          </div>
        );
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
          super(props);
        }
      
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Change code below this line */ }
      <Fruits/>
              { /* Change code above this line */ }
            </div>
          );
        }
      };



 13.     class Fruits extends React.Component {
        constructor(props) {
          super(props);
        }
        render() {
          return (
            <div>
              <h2>Fruits:</h2>
              { /* Change code below this line */ }
      <NonCitrus/>                                       // два этих кампонента где-то закулисами редактора
      <Citrus/>
      
              { /* Change code above this line */ }
            </div>
          );
        }
      };
      
      class TypesOfFood extends React.Component {
        constructor(props) {
           super(props);
        }
        render() {
          return (
            <div>
              <h1>Types of Food:</h1>
              { /* Change code below this line */ }
      <Fruits/>                                           // затем всё это в другой компонент вкладываем)
              { /* Change code above this line */ }
              <Vegetables />
            </div>
          );
        }
      };
      
14.       class TypesOfFood extends React.Component {
          constructor(props) {
          super(props);
                }
          render() {
          return (
         <div>
        <h1>Types of Food:</h1>
        {/* Change code below this line */}
                   <Fruits/>
                   <Vegetables/>
        {/* Change code above this line */}
          </div>
             );
               }
                 };
               ReactDOM.render(<TypesOfFood/>,document.getElementById('challenge-node'))
// Change code below this line

15.      class MyComponent extends React.Component{         //мой реакт компанент написанный полностью мной
  constructor(props){
  super(props);
  }
  render(){
  return (
    <div id="challenge-node">
  <h1>My First React Component!</h1>
  
  </div>
  
  );
  
  
  }
  };
  ReactDOM.render(<MyComponent/>, document.getElementById("challenge-node"));


16.       