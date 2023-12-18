import { Resolver, Query, Mutation, Arg } from "type-graphql";
import { Book } from '../models/book';
import { NewBookEntry } from '../inputs/book.input';
import { Author } from '../models/author'

@Resolver()
export class BookResolver {

    @Query(() => [Book] )
    async searchBooks(): Promise<Book[]> {
        const books = await Book.find({
            relations: ['author']
        });
        return books;
    }

    @Mutation(() => Book)
     async addBook(@Arg("data") data: NewBookEntry): Promise<Book> {
        // Attempt to find the existing author
        let author = await Author.findOne({ where: { id: data.authorId } });

        // If the author doesn't exist, create a new one
        if (!author) {
            author = Author.create({
                name: data.name,
        });

        await author.save();
    }

        const newBook = Book.create({
            title: data.title,
            author: author,
        });
        return newBook.save();
     }

}