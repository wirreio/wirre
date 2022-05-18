type FieldType = {
  name: string;
};

class Field {
  // Name of the Field
  name: string;
  constructor(config: FieldType) {
    this.name = config.name;
  }
}

type TableType = {
  name: string;
};

class Table {
  // Name of the Table
  name: string;
  constructor(config: TableType) {
    this.name = config.name;
  }

  // Limiting the results
  limit(num: number) {
    return;
  }

  // Running querys directly
  raw(query: string) {
    return null;
  }
}

type DatabaseType = {
  name: string;
  tables: TableType[];
};

class Database {
  // Name of the Database
  name: string;
  constructor(config: DatabaseType) {
    this.name = config.name;
  }
}

type ClustureType = {
  name: string;
  type: string;
  uri: string;
  databases: DatabaseType[];
};

class Clusture {
  // The name of the clustur
  name: string;
  // The type of database engine we will be requiring
  type: string;
  // The connection string used to connect with the clustur
  uri: string;
  // All the database
  databases: Map<string, Database>;

  constructor(config: ClustureType) {
    this.name = config.name;
    this.type = config.type;
    this.uri = config.uri;

    // Initializing all the databases
    this.databases = new Map();
    config.databases.forEach((database) => {
      this.databases.set(database.name, new Database(database));
    });
  }

  // Getting the requested database
  database(name: string) {
    return this.databases.get(name);
  }
}
