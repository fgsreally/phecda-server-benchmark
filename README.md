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

just need to build `nestjs` and `phecda-server`

```shell
npm run build
```

and exec the output file

```shell
node dist/nestjs/express.js
node dist/phecda-server/express.js

```

> or use `pm2` instead 


# stress test

use [autocannon](https://www.npmjs.com/package/autocannon)
```shell
autocannon localhost:3000/hello
```