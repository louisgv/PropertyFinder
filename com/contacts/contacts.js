var ContactForm = React.createClass({
  propTypes: {
    contact: React.PropTypes.object.isRequired
  },
  render: function () {
    return(
      React.createElement('form', {},
        React.createElement('input', {
          type: 'text',
          placeholder: 'Name',
          value: this.props.contact.name,
        }),
        React.createElement('input', {
          type: 'email',
          placeholder: 'Email',
          value: this.props.contact.email,
        }),
        React.createElement('textarea', {
          placeholder: 'Description',
          value: this.props.contact.description
        }),
        React.createElement('button', {
          type: 'submit'
        }, 'submit')
      )
    );
  }
})

var ContactItem = React.createClass({
  propTypes: {
    name: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    description: React.PropTypes.string
  },

  render: function () {
    return(
      React.createElement('li', {
          className: 'ci'
        },
        React.createElement('h2', {
          className: 'ci-name'
        }, this.props.name),
        React.createElement('a', {
          className: 'ci-email',
          href: 'mailto:' + this.props.email
        }, this.props.email),
        React.createElement('div', {
          className: 'ci-desc'
        }, this.props.description)
      )
    )
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
    return React.createElement(ContactItem, {
      key: contact.key,
      name: contact.name,
      email: contact.email,
      description: contact.description
    })
  })

// var ContactView = React.createClass({
//   propsTypes: {
//     contacts: React.propsTypes.array.isRequired,
//     newContact: React.propsTypes.object.isRequired,
//   },
//   render: function () {
//     return(
//       React.createElement(ContactForm, {})
//     );
//   }
// })

var rootElement =
  React.createElement('div', {},
    React.createElement('h1', {}, 'Contacts'),
    React.createElement('ul', {}, listElements),
    React.createElement(ContactForm, {
      contact: {}
    })
  );

ReactDOM.render(rootElement, document.getElementById('react-app'));
