//output port, interface for the repository pattern
//will act as a protocol for the repository
//protecting the domain from the infrastructure

export interface IEntityRepository<T> {
  getAll(): Promise<T>;
}
