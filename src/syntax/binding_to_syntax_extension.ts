import { interfaces } from 'inversify'
import { IBindingToSyntaxExtension } from '../interfaces/interfaces';

export class BindingToSyntaxExtension<T> implements IBindingToSyntaxExtension<T> {
  constructor (protected wrapeed: interfaces.BindingToSyntax<T>) {
  }
  
  to (constructor: { new (...args: any[]): T }): interfaces.BindingInWhenOnSyntax<T> {
    return this.wrapeed.to(constructor);
  }
  
  toAutoFactory<T2> (serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toAutoFactory(serviceIdentifier);
  }
  
  toConstantValue (value: T): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toConstantValue(value);
  }
  
  toConstructor<T2> (constructor: interfaces.Newable<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toConstructor(constructor);
  }
  
  toDynamicValue (func: (context: interfaces.Context) => T): interfaces.BindingInWhenOnSyntax<T> {
    return this.wrapeed.toDynamicValue(func);
  }
  
  toFactory<T2> (factory: interfaces.FactoryCreator<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toFactory(factory);
  }
  
  toFunction (func: T): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toFunction(func);
  }
  
  toProvider<T2> (provider: interfaces.ProviderCreator<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toProvider(provider);
  }
  
  toSelf (): interfaces.BindingInWhenOnSyntax<T> {
    return this.wrapeed.toSelf();
  }
  
  toService (service: interfaces.ServiceIdentifier<T>): void {
    this.wrapeed.toService(service);
  }
  
  toAutoNamedFactory<T2> (serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toFactory((context: interfaces.Context) => (named: string) => {
      return context.container.getNamed<T2>(serviceIdentifier, named);
    });
  }
  
  toAutoTaggedFactory<T2> (serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T> {
    return this.wrapeed.toFactory((context: interfaces.Context) => (named: string, value: any) => {
      return context.container.getTagged<T2>(serviceIdentifier, named, value);
    });
  }
}
