# Dev

set env `PORT` first

```shell
cross-env PORT=3000
```

## phecda-server

for example

```shell
phecda phecda-server/express.ts phecda-server
```

## nestjs

for example

```shell
node --import @swc-node/register/esm-register nestjs/express.ts # for esm project with node>=20.6
```

## others

for example

```shell
node express.js
```

# Build

build `nestjs` and `phecda-server`

```shell
npm run build
```

and exec the output

```shell
node dist/nestjs/express.js
node dist/phecda-server/express.js

```
