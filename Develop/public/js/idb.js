// establish the connection to IndexedDB
//variable to hold db connection
let db;
//establish a connection to IndexedDB database called budget_tracker and set to version 1
const request = indexedDB.open("budget_tracker", 1);
