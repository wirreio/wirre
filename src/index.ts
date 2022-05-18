class Field {}

class Table {}

class Database {
  // Name of the database
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}

class Clusture {
  // The type of database engine we will be requiring
  type: string;
  // The connection string used to connect with the clustur
  uri: string;
  // All the database
  databases: Database[] = [];

  constructor(type: string, uri: string) {
    this.type = type;
    this.uri = uri;
  }

  addDatabase(database_name: string) {
    this.databases.push(new Database(database_name));
  }
}
