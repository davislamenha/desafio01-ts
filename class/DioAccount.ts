import { fomartCurrencyToBRL } from '../utils/FormatUtils';
export abstract class DioAccount {
  private name: string;
  private readonly accountNumber: number;
  balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  setName = (name: string): void => {
    this.name = name;
    console.log('Nome alterado com sucesso!');
  };

  getName = (): string => {
    return this.name;
  };

  deposit(amount: number): void {
    if (this.validateStatus()) {
      this.balance += amount;
      console.log(
        `Voce depositou ${fomartCurrencyToBRL(
          amount,
        )} reais. Saldo: ${fomartCurrencyToBRL(this.balance)}`,
      );
    }
  }

  withdraw = (amount: number): void => {
    if (amount > this.balance)
      throw new Error(
        `Saldo insuficiente! Ola ${
          this.name
        }, voce nao pode sacar ${fomartCurrencyToBRL(
          amount,
        )}, pois possui ${fomartCurrencyToBRL(
          this.balance,
        )} de saldo disponivel.`,
      );
    if (this.validateStatus()) {
      this.balance -= amount;
      console.log(
        `Voce sacou ${fomartCurrencyToBRL(
          amount,
        )}. Saldo: ${fomartCurrencyToBRL(this.balance)}`,
      );
    }
  };

  getBalance = (): void => {
    console.log(
      `Ola ${this.name}, voce possui ${fomartCurrencyToBRL(this.balance)}`,
    );
  };

  protected validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error('Conta inválida');
  };
}
