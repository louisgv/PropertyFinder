var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
  },

  render: function () {
    return {
      React.createElement('li', {
          className: 'Contact'
        },
        React.createElement('h2', {
          className: 'Contact-name'
        }, this.props.name),
        React.createElement('a', {
          className: 'Contact-email'
        }, this.props.email),
        React.createElement('p', {
          className: 'Contact-description'
        }, this.props.description)
      )
    }
  }
})

var contacts = [
  {
    key: 1,
    name: 'Louis Vichy',
    email: 'louis@me.com',
    description: 'do everything'
  },
  {
    key: 2,
    name: 'Alice',
    email: 'alice@me.com'
  },
  {
    key: 3,
    name: 'Balista'
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
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {}, listElements)
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));
