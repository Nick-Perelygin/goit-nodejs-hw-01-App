const contacts = require('./contacts')
const { Command } = require('commander');
const program = new Command();
program
  .option('-a, --action <type>', 'choose action')
  .option('-i, --id <type>', 'user id')
  .option('-n, --name <type>', 'user name')
  .option('-e, --email <type>', 'user email')
  .option('-p, --phone <type>', 'user phone');

program.parse(process.argv);

const argv = program.opts();
function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case 'list':
        const allContacts = contacts.listContacts()
        console.table(allContacts)
        

    case 'get':
        const contact = contacts.getContactById(id)
        console.log(contact)
        break;

    case 'add':
        const newContact = contacts.addContact({name, email, phone})
        console.log(newContact)
        break;

    case 'remove':
        const removeContact = contacts.removeContact(id)
        console.log(removeContact)
        break;

    default:
      console.warn('\x1B[31m Unknown action type!');
  }
}

invokeAction(argv);