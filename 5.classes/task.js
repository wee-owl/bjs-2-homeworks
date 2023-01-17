"use strict"

// task 4-1
class PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    this.name = name;
    this.releaseDate = releaseDate;
    this.pagesCount = pagesCount;
    this.state = 100;
    this.type = null;
  }

  fix() {
    this.state = this.state*1.5;
    return this.state;
  }

  set state(fixState) {
    if (fixState < 0) {
      this._state = 0;
    } else if (fixState > 100) {
      this._state = 100;
    } else {
      this._state = fixState;
    }
  }

  get state() {
    return this._state;
  }
}

class Magazine extends PrintEditionItem {
  constructor(name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.type = 'magazine';
  }
}

class Book extends PrintEditionItem {
  constructor(author, name, releaseDate, pagesCount) {
    super(name, releaseDate, pagesCount);
    this.author = author;
    this.type = 'book';
  }
}

class NovelBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'novel';
  }
}

class FantasticBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'fantastic';
  }
}

class DetectiveBook extends Book {
  constructor(author, name, releaseDate, pagesCount) {
    super(author, name, releaseDate, pagesCount);
    this.type = 'detective';
  }
}


// task 4-2
class Library {
  constructor(name) {
    this.name = name;
    this.books = [];
  }

  addBook(book) {
    if (book.state > 30) {
      this.books.push(book);
    } else {
      return
    }
  }

  findBookBy(type, value) {
    if (this.books.find(item => item[type] === value)) {
      return this.books.find(item => item[type] === value)
    } else {
      return null
    }
  }

  giveBookByName(bookName) {
    if (this.books.find(item => item.name === bookName)) {
      let findBook = this.books.find(item => item.name === bookName);
      return this.books.splice(this.books.indexOf(findBook), 1)[0]
    } else {
      return null
    }
  }
}


// task 4-3
