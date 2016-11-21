// jsx中嵌入js对象
function formatName(user) {
  return user.firstName + 　' ' + user.lastName;
}

const user = {
  firstName: 'selvin',
  lastName: 'walter'
};

const element1 = (
  <h1>
    Hello,{formatName(user)}!
  </h1>
);

// jsx本身充当对象 
function getGreeting(user) {
  if (user) {
    return <h1>Hello , {formatName(user)}</h1>
  }
  return <h1>Hello,Jessica.</h1>
}

// 更新已经渲染的virtual DOM
function tick() {
  const element = (
    <div>
      <h1>Hello,selvin</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )

  ReactDOM.render(
    element,
    document.getElementById('example')
  );
}
setInterval(tick, 1000);

// components and props  components like js function mostly

// define component two same way

/*
  component 1
 */
function Welcome(props) {
  return <h1>Hello,{props.name}</h1>
}

/*
  component 2
 */

// class Welcome extends React.Component {
//   render() {
//     return <h1>Hello,{this.props.name}</h1>
//   }
// }

// -  component 复用 components only one root element , so add div 
function App() {
  return (
    <div>
      <Welcome name="selvin"/>
      <Welcome name="selvin"/>
      <Welcome name="selvin"/>
      <Welcome name="selvin"/>
    </div>
  )
}

// - 提取组件
// example:
/*
function Comment(props) {
  return (
    <div className="Comment">
      <div className="UserInfo">
        <img className="Avatar"
          src={props.author.avatarUrl}
          alt={props.author.name}
        />
        <div className="UserInfo-name">
          {props.author.name}
        </div>
      </div>
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
 */
// this component accepts three object . author / text / date
// first extract author
/*
 function Avatar(props) {
  return (
    <img className="Avatar"
      src={props.user.avatarUrl}
      alt={props.user.name}
    />
  );
}
  */
// second extract user
/*
 function UserInfo(props) {
  return (
    <div className="UserInfo">
      <Avatar user={props.user} />
      <div className="UserInfo-name">
        {props.user.name}
      </div>
    </div>
  );
}
  */
// finally
/*
 function Comment(props) {
  return (
    <div className="Comment">
      <UserInfo user={props.author} />
      <div className="Comment-text">
        {props.text}
      </div>
      <div className="Comment-date">
        {formatDate(props.date)}
      </div>
    </div>
  );
}
  */

// - this is a object , we call this object "props" in react .
// const element3 = <Welcome name="selvin"/>;

// ReactDOM.render(
//   <App/>,
//   document.getElementById("example")
// );

// 通过ReactDOM.render()渲染虚拟DOM

/**
 * element1  getGreeting()  virtual DOM 可以是声明的jsx对象，也可以是js声明的组件
 */