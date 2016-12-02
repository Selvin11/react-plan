# react-plan

> JXS 语法

* React.DOM(element,document.getElementById('root'))

    此方法中element必须为单节点元素，即只有一个根节点
    
* 变量需在{}中进行存储，才能得到解析

    ```javascript
    function Test() {
            const obj = {
                width: "99px",
                height: "99px"
            };
            return <h1 name="ss" style={{width:obj.width,height:obj.height}}></h1>;
        }
    
    //实际调用的是React.createElement（）方法，上面只是JSX语法糖的简写模式
    function Test() {
        var obj = {
            width: "99px",
            height: "99px"
        };
        return React.createElement("h1", 
          { 
              name: "ss", 
              style: { 
                width: obj.width, 
                height: obj.height
            } 
        });
    }
    ```
    
    
* React 点击获取`input`输入值

    ```javascript
        class Test extends React.Component{
            constructor(props){
                super(props);
                this.state = {value:"test"};
                //将this的指向固定在React对象中
                this.handleClick = this.handleClick.bind(this);
            }
            handleClick(){
                let value = document.getElementById("postValue").value;
                this.setState({
                    value:  value ? value : "test"
                })
            }
            render(){
                return (
                    <div>
                        <input type="text" id="postValue" />
                        <input type="button" value={this.state.value} onClick={this.handleClick}/>
                    </div>
                );
            }
        }
    ```
    

* React state初始设置
    
    ```javascript
    // jsx
      class Test extends React.Component{
          constructor(props){
              super(props);
              this.state = {
                  liked:false
              };
              this.handleClick = this.handleClick.bind(this);
          }
          handleClick(){
              this.setState({
                  liked: !this.state.liked
              });
          }
          render(){
              let text = this.state.liked ? 'like' : 'don\'t like';
              return(
                  <p onClick={this.handleClick}>
                      I {text} you.
                  </p>
              );
          }
      }
    // js原生
      const Test = React.createClass({
          getInitialState: function(){
              return {liked:false};
          },
          handleClick: function () {
              this.setState({liked:!this.state.liked});
          },
          render:function () {
              let text = this.state.liked ? 'like' : 'don\'t like';
              return <p onClick={this.handleClick}>I {text} you</p>
          }
      });
    ```