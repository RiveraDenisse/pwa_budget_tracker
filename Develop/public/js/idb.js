// establish the connection to IndexedDB
//variable to hold db connection
let db;
//establish a connection to IndexedDB database called budget_tracker and set to version 1
const request = indexedDB.open("budget_tracker", 1);

//this event will emit if the database version changes
request.onupgradeneeded = function (event) {
  //save a reference to the database
  const db = event.target.result;
  //create an object store, set it to have an auto incrementing primary key
  db.createObjectStore("new_transaction", { autoIncrement: true });
};

//upon a successful
request.onsuccess = function (event) {
  //when db is successfully create with its object store (from onupgradedneeded event above) or simply established a connection, save reference to db in global variable
  db.event.target.result;

  //check if app is online, if yest run uploadTransaction() to send all local db data to api
  if (navigator.onLine) {
    uploadTransaction();
  }
};

request.onerror = function (event) {
  //log error here
  console.log(event.target.errorCode);
};
