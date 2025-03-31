import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';
import { fomartCurrencyToBRL } from './utils/FormatUtils';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(`Conta criada
  --------------------------------------
  Nome: ${peopleAccount.getName()}
  Saldo: ${fomartCurrencyToBRL(peopleAccount.getBalance())}
  --------------------------------------
  `);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
console.log(`Saldo: ${fomartCurrencyToBRL(peopleAccount.getBalance())}`);

const specialAccount: SpecialAccount = new SpecialAccount('Jose', 12);
console.log(`Conta criada
  --------------------------------------
  Nome: ${specialAccount.getName()}
  Saldo: ${fomartCurrencyToBRL(specialAccount.getBalance())}
  --------------------------------------
  `);
specialAccount.deposit(100);
console.log(`Saldo: ${fomartCurrencyToBRL(specialAccount.getBalance())}`);

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 11);
console.log(`Conta criada
  --------------------------------------
  Nome: ${companyAccount.getName()}
  Saldo: ${fomartCurrencyToBRL(companyAccount.getBalance())}
  --------------------------------------
  `);
companyAccount.deposit(100);
companyAccount.getLoan(5000);
console.log(`Saldo: ${fomartCurrencyToBRL(companyAccount.getBalance())}`);
companyAccount.withdraw(6000);
