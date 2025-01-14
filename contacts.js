import path from "path";
import { v4 as uuidv4 } from "uuid";
import fs from "fs/promises";

const contactsPath = path.join(process.cwd(), "db", "contacts.json");

export async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    return JSON.parse(data);
  } catch (error) {
    throw new Error("Unable to read contacts file.");
  }
}

export async function getContactById(contactId) {
  const allContacts = await listContacts();

  const contact = allContacts.find((contact) => contact.id === contactId);

  return contact || null;
}

export async function removeContact(contactId) {
  const allContacts = await listContacts();

  const findContactIndex = allContacts.findIndex(
    (contact) => contact.id === contactId
  );

  if (findContactIndex === -1) {
    return null;
  }

  const removedContact = allContacts[findContactIndex];

  allContacts.splice(findContactIndex, 1);

  fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return removedContact;
}

export async function addContact(name, email, phone) {
  const allContacts = await listContacts();
  const id = uuidv4();

  allContacts.push({ id, name, email, phone });

  fs.writeFile(contactsPath, JSON.stringify(allContacts, null, 2));

  return allContacts[allContacts.length - 1];
}
