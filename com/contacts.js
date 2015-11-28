var contacts = [
  {
    key: 1,
    name: "Louis Vichy",
    email: "louis@me.com"
  },
  {
    key: 2,
    name: "Alice",
    email: "alice@me.com"
  }
]

var listElements = contacts.filter((contact) => {
    return contact.email;
  })
  .map((contact) => {
    return React.createElement('li', {
        key: contact.key
      },
      React.createElement('h2', {}, contact.name),
      React.createElement('a', {
        href: 'mailto:' + contact.email
      }, contact.email))
  })

var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, "Contacts"),
    React.createElement('ul', {}, listElements)
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));
