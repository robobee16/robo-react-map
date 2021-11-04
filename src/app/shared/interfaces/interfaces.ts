export interface Routing {
  path: string;
  component: any;
  routes?: Routing[];
}
