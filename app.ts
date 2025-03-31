import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';
import { SpecialAccount } from './class/SpecialAccount';

const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10);
console.log(`Conta criada
  --------------------------------------
  Nome: ${peopleAccount.getName()}
  Saldo: ${peopleAccount.balance}
  --------------------------------------
  `);
peopleAccount.deposit(100);
peopleAccount.withdraw(50);
peopleAccount.getBalance();

const specialAccount: SpecialAccount = new SpecialAccount('Jose', 12);
console.log(`Conta criada
  --------------------------------------
  Nome: ${specialAccount.getName()}
  Saldo: ${specialAccount.balance}
  --------------------------------------
  `);
specialAccount.deposit(100);
specialAccount.getBalance();

const companyAccount: CompanyAccount = new CompanyAccount('DIO', 11);
console.log(`Conta criada
  --------------------------------------
  Nome: ${companyAccount.getName()}
  Saldo: ${companyAccount.balance}
  --------------------------------------
  `);
companyAccount.deposit(100);
companyAccount.getLoan(5000);
companyAccount.getBalance();
companyAccount.withdraw(6000);
