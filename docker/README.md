# Running the app locally

1. Run the development server using `npm run dev`.
2. Open [http://localhost:3000](http://localhost:3000)

# Using Docker and Makefile

## Development environment - for doing testing

```
make build-development
make start-development
```

Open [http://localhost:3001](http://localhost:3001)

## Staging environment - for doing UAT testing

```
make build-staging
make start-staging
```

Open [http://localhost:3002](http://localhost:3002)

## Production environment - for users

```
make build-production
make start-production
```

Open [http://localhost:3003](http://localhost:3003)