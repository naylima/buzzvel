# Buzzvel

Back-end for the Buzzvel QR generator.

## How to run for development

1. Clone this repository
2. Install all dependencies

```bash
npm i
```

3. Create a PostgreSQL database with whatever name you want
4. Configure the `.env` file using the `.env.example` file (see "Running application locally" for details)
5. Run all migrations

```bash
npm run dev:migration:generate
```

6. Run the back-end in a development environment:

```bash
npm run dev
```

## How to run tests

1. Follow the steps in the last section
1. Configure the `.env.test` file using the `.env.example` file (see "Running application" section for details)
1. Run all migrations

```bash
npm test:migration:generate
```

3. Run test:
   (locally)

```bash
npm run test
```

## Running application locally 

`.env` and `.env.test` must be changed if you want to run the application locally. You can populate files based on `.env.example` file, but you need to consider the following:

- Running application locally (postgres and node):

Add your postgres credentials and make sure to create given database before running the application.
