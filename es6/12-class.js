class Foo {
  constructor() {
  }
};

var foo = new Foo();
foo instanceof Foo; // true

class FooDefault {
};

var fooDefault = new FooDefault();
fooDefault instanceof FooDefault; // true

class FooNew {
  constructor() {
    return Object.create({});
  }
}

var fooNew = new FooNew();
fooNew instanceof FooNew; // false
fooNew instanceof Object; // true

class FooTestInt {
  constructor() {
    return 1;
  }
}

var fooTestInt = new FooTestInt();
fooTestInt instanceof FooTestInt; // true

class FooTestString {
  constructor() {
    return 'Test String';
  }
}

var fooTestString = new FooTestString();
fooTestString instanceof FooTestString; // true

class FooTestNewString {
  constructor() {
    return new String('Test String');
  }
}

var fooTestNewString = new FooTestNewString();
fooTestNewString instanceof FooTestNewString; // false
fooTestNewString instanceof String; // true