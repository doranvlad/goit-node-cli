const path = require("node:path");
const fs = require("fs").promises;

const contactsPath = path.join(__dirname, "db", "contacts.json");
console.log("Шлях до файлу contacts.json:", contactsPath);

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    console.log(JSON.parse(data));

    return JSON.parse(data);
  } catch (error) {
    throw new Error("Unable to read contacts file.");
  }
  return fs.readFile(contactsPath).toString();
}
listContacts();

async function getContactById(contactId) {
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}

async function removeContact(contactId) {
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}

async function addContact(name, email, phone) {
  // ...твій код. Повертає об'єкт доданого контакту (з id).
}
