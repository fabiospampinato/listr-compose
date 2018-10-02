# Listr Compose

Compose multiple [listr](https://github.com/SamVerschueren/listr) task lists into one.

## Install

```sh
npm install --save listr-compose
```

## Usage

```ts
import * as Listr from 'listr';
import compose from 'listr-compose';

const listFoo = new Listr ([
  {
    title: 'Foo',
    task: () => true
  }
]);

const listBar = new Listr ([
  {
    title: 'Bar',
    task: () => true
  }
]);

const listFooBar = compose ( listFoo, listBar );

listFooBar.run ();
```

## License

MIT © Fabio Spampinato
