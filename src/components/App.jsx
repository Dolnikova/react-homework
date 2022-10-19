import clsx from 'clsx';
export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      React homework template
    </div>
  );
};

// const className = clsx(
//   'first',
//   10,
//   undefined && 'second',
//   true && 'third',
//   false ? 'fourth' : 'fifth'
// );
// console.log(className);
// Button.js
const Button = ({ variant, children }) => {
  // Базовые стили кнопки с несколькими вариантами отображения
  return <button className={clsx('button', variant)}>{children}</button>;
};

// LoginButton.js
const LoginButton = () => {
  // Уникальная логика кнопки логина
  return <Button variant="primary">Login</Button>;
};

// FollowButton.js
const FollowButton = () => {
  // Уникальная логика кнопки подписки
  return <Button variant="secondary">Follow</Button>;
};

// 👎 Class components are verbose
class Counter extends React.Component {
  state = {
    counter: 0,
  };

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ counter: this.state.counter + 1 });
  }

  render() {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    );
  }
}

// 👍 Functional components are easier to read and maintain
function Counter() {
  const [counter, setCounter] = useState(0);

  handleClick = () => setCounter(counter + 1);

  return (
    <div>
      <p>counter: {counter}</p>
      <button onClick={handleClick}>Increment</button>
    </div>
  );
}
