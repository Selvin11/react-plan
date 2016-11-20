// state and lifecycle

// one way to update the UI (more like nature js function)
function tick() {
  const element = (
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root')
  );
}

setInterval(tick, 1000);
// another way to compelete reusable and encapsulated
    // use es6 class extend React.component ways
class Clock extends React.Component {
    // es6 构造函数方法 
  constructor(props) {
    super(props);
    // 继承元对象this 并拓展继承之后的类所含有的属性
    this.state = {date: new Date()};
  }
  /*
    add lifecycle methods  ==> lifecycle hooks
   */
  // lifecycle Mounting ==> rendered to the DOM
  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }
  // lifecycle Unmounting ==> remove from the DOM
  componentWillUnmount() {
    clearInterval(this.timerID);
  }
  // 异步函数
  tick() {
    this.setState({
      date: new Date()
    });
  }
  // component
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);