# InversifyJS Extension

## About
InversifyJS Extension is project 

## Installation

You can get the latest release and the type definitions using npm:

```
$ npm install inversify inversify-extension reflect-metadata
```

## Examples
### AutoNamed factory
The old way for writing named factory:
```ts
container.bind<interfaces.Factory<Katana>>("Factory<Katana>")
  .toFactory<Katana>((context: interfaces.Context) => (named: string): Katana => {
    return context.container.getNamed<Katana>("Katana", named);
  });
```

Now you can write in a more simple way:
```ts
import { ContainerExtension } from 'inversify-extension';

const container = new ContainerExtension();

container.bind<interfaces.Factory<Katana>>("Factory<Katana>")
  .toAutoNamedFactory<Katana>("Katana");
```

The same way for a factory that works with tags:
```ts
import { ContainerExtension } from 'inversify-extension';

const container = new ContainerExtension();

container.bind<interfaces.Factory<Katana>>("Factory<Katana>")
  .toAutoTaggedFactory<Katana>("Katana");
```
