import { Component } from 'react';

type ServiceWorkerProps = {
  src: string;
  scope?: string;
  unregister?: boolean;
}

export default class ServiceWorker extends Component<ServiceWorkerProps> { }
