import { CompanyAccount } from './class/CompanyAccount';
import { PeopleAccount } from './class/PeopleAccount';

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
