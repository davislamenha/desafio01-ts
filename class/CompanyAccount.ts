import { fomartCurrencyToBRL } from '../utils/FormatUtils';
import { DioAccount } from './DioAccount';

export class CompanyAccount extends DioAccount {
  constructor(name: string, accountNumber: number) {
    super(name, accountNumber);
  }

  getLoan = (amount: number): void => {
    if (this.validateStatus()) {
      this.setBalance(this.getBalance() + amount);
      console.log(
        `Voce pegou um empréstimo de ${fomartCurrencyToBRL(
          amount,
        )}. Saldo: ${fomartCurrencyToBRL(this.getBalance())}`,
      );
    }
  };
}
