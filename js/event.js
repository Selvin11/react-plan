/**
 * Created by Selvin11 on 2016/11/21 0021.
 */
// react events using camelCase
/*
  - in html
 <button onclick="activateLasers()">
    Activate Lasers
 </button>
  - in react
 <button onClick={activateLasers}>
     Activate Lasers
 </button>
 */
class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }
    //prevState 防止this.state and this.props 异步更新，将初始状态直接赋予给prevState
    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }
    //在此事例中，两者效果一致，不存在上述情况
    // handleClick() {
    //     this.setState({
    //         isToggleOn: !this.state.isToggleOn
    //     });
    // }
    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);