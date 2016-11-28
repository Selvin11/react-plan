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
