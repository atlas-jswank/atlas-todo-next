# Todo List App

## Task Assignments

You will be taking an existing todo app that runs as client components and update to use server components reading and writing to a database.

1. Update the components to display the list of items from the db. Read the list of Todos from the database.
2. Update the components to add new items to database when the add button is clicked.
3. Update the components to remove items from the database when the delete button is clicked.
4. Update the components to update an items checkes status when the checkbox is clicked.

### Database

A database connection is create in the `db.ts` file. To understand how to use the database see https://www.npmjs.com/package/sqlite

There is a todos table in the database. The table has the following columns:

| id  | todoText    | completed |
| --- | ----------- | --------- |
| 1   | Buy Apples  | false     |
| 2   | Buy Bananas | true      |

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!
