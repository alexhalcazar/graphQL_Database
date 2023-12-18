# graphQL_Database

Building a b GraphQL API using TypeORM for SQL database interactions, Type-GraphQL for resolver definitions, and Apollo Server integrated with Express for optimal performance.

## Overview

My GraphQL API provides a GraphQL endpoint for querying and mutating book data.

## Installation

1. Clone the Reposotiory:

```bash
git clone https://github.com/alexhalcazar/graphQL_Database.git
cd graphQL_Database
```

## Dependencies 

2. Install Dependencies:

This project relies on the following npm packages:

### Production Dependencies

- [apollo-server-express](https://www.npmjs.com/package/apollo-server-express): ^3.12.0
- [express](https://www.npmjs.com/package/express): ^4.18.2
- [graphql](https://www.npmjs.com/package/graphql): ^15.8.0
- [graphql-type-json](https://www.npmjs.com/package/graphql-type-json): ^0.3.2
- [mysql](https://www.npmjs.com/package/mysql): ^2.18.1
- [reflect-metadata](https://www.npmjs.com/package/reflect-metadata): ^0.1.13
- [type-graphql](https://www.npmjs.com/package/type-graphql): ^1.1.1
- [typeorm](https://www.npmjs.com/package/typeorm): ^0.3.17

### Development Dependencies

- [@types/express](https://www.npmjs.com/package/@types/express): ^4.17.17
- [@types/node](https://www.npmjs.com/package/@types/node): ^20.5.0
- [nodemon](https://www.npmjs.com/package/nodemon): ^3.0.1
- [typescript](https://www.npmjs.com/package/typescript): ^5.1.6

Run the following command to install the required dependencies:

```bash
npm install
```

## Usage

3. Configure your settings in 'tsconfig.json'
4. Run the CLI:

Once the dependencies are installed, you can run the CLI using:

```bash 
npm run dev
```

## Access the GraphQL Playground

Open your web browser and navigate to  http://localhost:4000/graphql
You can use this GraphQL Playground to explore and interact with the API.

## Resolvers

### Book Resolvers

#### 'searchBooks'

- **Description:** Retrieve a list of all books with associated authors.
- **Resolver Signature:** `searchBooks(): Book[]`
- **Usage Example:**
  ```graphql
  query {
    searchBooks {
      id
      title
      author {
        id
        name
      }
    }
  }
  ```

#### 'addBook'
- **Description:** Add a new book to the collection.
- **Resolver Signature:** `addBook(data: NewBookEntry): Book`
- **Arguments:**
    - `data` (Input): An object containing information about the new book.
    - `title` (String): The title of the book.
    - `authorId` (String). The ID of the author for the book.

## Default Author IDs

The GraphQL API includes default author IDs that you can use when adding books. If you don't provide a specific author ID when adding a book, the API will associate the book with one of these default authors. Here are the default author IDs:

1. Default Author 1: `J.K. Rowling`
2. Default Author 2: `J.R.R. Tolkien`
3. Default Author 3: `Stephen King`
4. Default Author 4: `Suzanne Collins`

When adding a book, you can use one of these IDs as the `authorId` in the mutation. For example:
- **Usage Example:**
  ```graphql
  mutation {
    addBook(data: {
        title: "Harry Potter and the Chamber of Secrets",
        authorId: "1"
  }) {
    id
    title
    author {
      id
      name
    }
  }
}
```

## Reporting Issues

If you encounter any issues or have suggestions for improvement, please [create an issue](https://github.com/alexhalcazar/graphQL_Database/issues).

## Authors

Alex Alcazar