import { IAddCommand, IUpdateCommand, IDeleteCommand } from '../api-interfaces/commands.interfaces.js';

export abstract class BaseCommands {
  public abstract AddCommand(cmd: IAddCommand): Promise<void>;
  public abstract UpdateCommand(cmd: IUpdateCommand): Promise<void>;
  public abstract DeleteCommand(cmd: IDeleteCommand): Promise<void>;
}