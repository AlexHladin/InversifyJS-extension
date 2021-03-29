import { interfaces } from 'inversify';

export interface IBindingToSyntaxExtension<T> extends interfaces.BindingToSyntax<T> {
  toAutoNamedFactory<T2>(serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T>;
  toAutoTaggedFactory<T2>(serviceIdentifier: interfaces.ServiceIdentifier<T2>): interfaces.BindingWhenOnSyntax<T>;
}
