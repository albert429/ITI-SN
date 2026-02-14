const library = [];

function findBookByTitle(title) {
  const target = title.trim().toLowerCase();
  return (
    library.find((book) => book.title.trim().toLowerCase() === target) || null
  );
}

function askRequiredText(message, fieldName) {
  const value = prompt(message);
  if (!value || !value.trim()) {
    alert(`${fieldName} cannot be empty.`);
    return null;
  }
  return value.trim();
}

function addBook() {
  const title = askRequiredText('Enter book title:', 'Book title');
  if (!title) {
    return;
  }

  const authorInput = prompt('Enter author name:');
  const author =
    authorInput && authorInput.trim() ? authorInput.trim() : 'Unknown';

  const copiesInput = prompt('Enter number of copies:');
  const copies = Number.parseInt(copiesInput, 10);
  if (Number.isNaN(copies) || copies <= 0) {
    alert('Copies must be a number greater than 0.');
    return;
  }

  const existingBook = findBookByTitle(title);
  if (existingBook) {
    existingBook.availableCopies += copies;
    alert('Duplicate title found. Copies increased successfully.');
    return;
  }

  library.push({
    title,
    author,
    availableCopies: copies,
    borrowedCopies: 0,
    borrowCount: 0,
  });

  alert('Book added successfully.');
}

function borrowBook() {
  const title = askRequiredText('Enter book title to borrow:', 'Book title');
  if (!title) {
    return;
  }

  const book = findBookByTitle(title);
  if (!book) {
    alert('Book not found.');
    return;
  }

  if (book.availableCopies <= 0) {
    alert('No available copies. Please try later.');
    return;
  }

  book.availableCopies -= 1;
  book.borrowedCopies += 1;
  book.borrowCount += 1;
  alert('Book borrowed successfully.');
}

function returnBook() {
  const title = askRequiredText('Enter book title to return:', 'Book title');
  if (!title) {
    return;
  }

  const book = findBookByTitle(title);
  if (!book) {
    alert('Book not found.');
    return;
  }

  if (book.borrowedCopies <= 0) {
    alert('No borrowed copies to return.');
    return;
  }

  book.availableCopies += 1;
  book.borrowedCopies -= 1;
  alert('Book returned successfully.');
}

function showReport() {
  if (library.length === 0) {
    alert('Library is empty.');
    return;
  }

  let totalAvailable = 0;
  let totalBorrowed = 0;
  const lines = ['Library Report', '----------------'];

  library.forEach((book, index) => {
    totalAvailable += book.availableCopies;
    totalBorrowed += book.borrowedCopies;
    const status =
      book.availableCopies === 0
        ? 'Out of Stock'
        : book.availableCopies <= 2
          ? 'Limited'
          : 'Available';

    lines.push(
      `${index + 1}. ${book.title}`,
      `   Author: ${book.author}`,
      `   Available: ${book.availableCopies}`,
      `   Borrowed: ${book.borrowedCopies}`,
      `   Borrow Count: ${book.borrowCount}`,
      `   Status: ${status}`,
      '',
    );
  });

  lines.push(
    '----------------',
    `Total available: ${totalAvailable}`,
    `Total borrowed: ${totalBorrowed}`,
  );

  const report = lines.join('\n');
  console.log(report);
  alert(report);
}

function showMenu() {
  let isRunning = true;

  while (isRunning) {
    const choice = prompt(
      '=== LIBRARY SYSTEM ===\n' +
        '1: Add New Book\n' +
        '2: Borrow Book\n' +
        '3: Return Book\n' +
        '4: Show Library Report\n' +
        '5: Exit',
    );

    switch (choice) {
      case '1':
        addBook();
        break;
      case '2':
        borrowBook();
        break;
      case '3':
        returnBook();
        break;
      case '4':
        showReport();
        break;
      case '5':
        isRunning = false;
        alert('Goodbye!');
        break;
      default:
        alert('Invalid option. Please choose 1-5.');
    }
  }
}

showMenu();
