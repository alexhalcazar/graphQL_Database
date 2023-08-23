import "reflect-metadata"
import express from 'express'
import { ApolloServer  } from 'apollo-server-express';
import { TaskResolver } from './resolvers/task';
import { buildSchema } from 'type-graphql';
import {ApolloServerPluginLandingPageGraphQLPlayground} from 'apollo-server-core'
import { DataSource } from 'typeorm'
import { Book } from './models/book'
import { Author } from './models/author'
import { BookResolver } from "./resolvers/book.resolver";

const main = async () => {

    const AppDataSource = new DataSource({
        type: "mysql",
        host: "localhost",
        port: 3306,
        username: "root",
        password: "Alexbg03",
        database: "library",
        entities: [ Book, Author ],
    })

    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err)
    })

    const apolloServer = new ApolloServer({
        schema: await buildSchema({
            resolvers: [TaskResolver, BookResolver ],
            validate: false
        }),
        plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
    })

    await apolloServer.start()
    const app = express();

    apolloServer.applyMiddleware({app});

    app.get('/', (_req, res) => {
        res.send("hello world");
    });

    const PORT = 8000;
    app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    console.log('Test');
}

void main();