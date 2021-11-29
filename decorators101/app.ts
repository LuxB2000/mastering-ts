/**
 * decorator factories for the different elements of the code
 * @param message some message to print
 * @returns 
 */
function classDecorator(message: string): ClassDecorator {
  console.log(`${message} evaluated`);
  return function (constructor: Function): void { // signature for a class decorator
    console.log(`${message} called`);
  }
}

function propertyDecorator(message: string): PropertyDecorator {
  console.log(`${message} evaluated`);
  return function(target: Object, propertyKey: string) { // signature for a property decorator, target is the class object
    console.log(`${message} called with propertyKey ${propertyKey} with target: ${}`);
  }
}

/**
 * A simple class to illustrate a book
 */
@classDecorator('Book class')
class Book {
  constructor(public title: string, public author: string) {}
}

class Shelf {

  @propertyDecorator('Private data')
  private _data: Book[] = [];

  constructor() {}

  public AddBook(book: Book) {
    this._data.push(book);
  }
}

const book = new Book('The witness', 'Juan José Saer');
const shelf = new Shelf();
shelf.AddBook(book);
