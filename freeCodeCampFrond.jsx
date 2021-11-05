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


16.     const CurrentDate = (props) => {
  return (
    <div>
      { /* Change code below this line */ }
      <p>The current date is:{props.date} </p>    //какое-то свойство добавляю
      { /* Change code above this line */ }
    </div>
  );
};

class Calendar extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>

        { /* Change code below this line */ }
        <CurrentDate date={Date()}/>                          // здесь тоже
        { /* Change code above this line */ }
      </div>
    );
  }
};  


17.   const List = (props) => {
  { /* Change code below this line */ }
  return <p>{props.tasks.join(' ,  ')}</p>           // передача массива как свойства, ниже в list пишем что нам необходимо передать, и в этой строке
  { /* Change code above this line */ }
};

class ToDo extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        { /* Change code below this line */ }
        <List tasks={["поиграть", "собака"]}/>
        <h2>Tomorrow</h2>
        
        <List tasks={["кот", "пёс", "хоп-хэй"]}/>
        { /* Change code above this line */ }
      </div>
    );
  }
};    


18.     const ShoppingCart = (props) => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
    </div>
  )
};
ShoppingCart.defaultProps = {items : 0}     // обьявление свойств по умолчанию



19.     const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    { /* Change code below this line */ }
    return <Items quantity={10}/>;    // здесь переопределяется свойство по-умолчанию
    { /* Change code above this line */ }
  }
};


20.    const Items = (props) => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};

// Change code below this line
Items.propTypes = {quantity : PropTypes.number.isRequired};   // это проверка требует чтобы свойство {props.quantity} было числом
// Change code above this line

Items.defaultProps = {
  quantity: 0
};

class ShoppingCart extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Items />
  }
};

21.


решение для BootStrap







1.     <link href="https://fonts.googleapis.com/css?family=Lobster" rel="stylesheet" type="text/css">

<style>
  .red-text {
    color: red;
  }

  h2 {
    font-family: Lobster, Monospace;
  }

  p {
    font-size: 16px;
    font-family: Monospace;
  }

  .thick-green-border {
    border-color: green;
    border-width: 10px;
    border-style: solid;
    border-radius: 50%;
  }

  .smaller-image {
    width: 100px;
  }
</style>
<div class = container-fluid>
<h2 class="red-text">CatPhotoApp</h2>

<p>Click here for <a href="#">cat photos</a>.</p>

<a href="#"><img class="smaller-image thick-green-border" src="https://cdn.freecodecamp.org/curriculum/cat-photo-app/relaxing-cat.jpg" alt="A cute orange cat lying on its back."></a>

<p>Things cats love:</p>
<ul>
  <li>cat nip</li>
  <li>laser pointers</li>
  <li>lasagna</li>
</ul>
<p>Top 3 things cats hate:</p>
<ol>
  <li>flea treatment</li>
  <li>thunder</li>
  <li>other cats</li>
</ol>
<form action="https://freecatphotoapp.com/submit-cat-photo">
  <label><input type="radio" name="indoor-outdoor"> Indoor</label>
  <label><input type="radio" name="indoor-outdoor"> Outdoor</label>
  <label><input type="checkbox" name="personality"> Loving</label>
  <label><input type="checkbox" name="personality"> Lazy</label>
  <label><input type="checkbox" name="personality"> Crazy</label>
  <input type="text" placeholder="cat photo URL" required>
  <button type="submit">Submit</button>
</form>
</div>