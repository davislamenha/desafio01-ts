import { fomartCurrencyToBRL } from '../utils/FormatUtils';
import { DioAccount } from './DioAccount';

export class SpecialAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  deposit(amount: number): void {
    if (this.validateStatus()) {
      const amountWithBonus = amount + 10;
      this.setBalance(this.getBalance() + amountWithBonus);

      console.log(
        `Você depositou ${fomartCurrencyToBRL(
          amountWithBonus,
        )} (com bônus de 10 reais). Saldo: ${fomartCurrencyToBRL(
          this.getBalance(),
        )}`,
      );
    }
  }
}
