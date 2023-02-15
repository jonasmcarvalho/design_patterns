import { MyDatabaseFunction } from './db/my-database-function';
import { myDatabaseClassic as myDatabaseClassicFromMuduleA } from './module_a';

const myDatabaseClassic = MyDatabaseFunction;

myDatabaseClassic.add({ name: 'Roberto', age: 36 });
myDatabaseClassic.add({ name: 'Joana', age: 30 });
myDatabaseClassic.add({ name: 'Luíza', age: 25 });
myDatabaseClassic.show();

console.log(myDatabaseClassic === myDatabaseClassicFromMuduleA);
