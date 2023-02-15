import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseClassic = MyDatabaseModule;

myDatabaseClassic.add({ name: 'Jonas', age: 36 });
myDatabaseClassic.add({ name: 'Maria', age: 30 });
myDatabaseClassic.add({ name: 'Eduardo', age: 25 });
myDatabaseClassic.show();

export { myDatabaseClassic };
