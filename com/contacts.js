var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {},
      React.createElement('li', {},
        React.createElement('h2', {}, "Louis Vichy"),
        React.createElement('a', {
          href: 'mailto:lgvichy@gmail.com'
        }, 'lgvichy@gmail.com')
      ),
      React.createElement('li', {},
        React.createElement('h2', {}, "Alan Roster"),
        React.createElement('a', {
          href: 'mailto:alan@jabsquared.ninja'
        }, 'alan@jabsquared.ninja')
      )
    )
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));
