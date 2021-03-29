import { Container, interfaces } from 'inversify';
import { BindingToSyntaxExtension } from '../syntax/binding_to_syntax_extension';

export class ContainerExtension extends Container {
  public bind<T>(serviceIdentifier: interfaces.ServiceIdentifier<T>): interfaces.BindingToSyntax<T> {
    const service = super.bind(serviceIdentifier);
    
    return new BindingToSyntaxExtension(service);
  }
}

