<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>React Counter App</title>
</head>

<body>

  <div id="root"></div>

  <!-- React CDN -->
  <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>

  <!-- Your React App -->
  <script type="text/babel">
    // Destructuring for better readability
    const { useState } = React;

    // Define a functional component with hooks
    function CounterApp() {
      const [count, setCount] = useState(0);

      const increment = () => {
        setCount(count + 1);
      };

      const decrement = () => {
        setCount(count - 1);
      };

      return (
        <div>
          <h1>Counter: {count}</h1>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
        </div>
      );
    }

    // Render the component to the DOM
    ReactDOM.render(
      React.createElement(CounterApp),
      document.getElementById('root')
    );
  </script>

</body>

</html>
