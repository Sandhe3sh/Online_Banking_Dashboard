////package com.examly.springapp.service;
////
////import com.examly.springapp.model.Account;
////import java.util.List;
////
////public interface AccountService {
////    Account getAccountById(Long id);
////    List<Account> getAllAccounts();
////    Account createAccount(Account account);
////}
//// 
//
//package com.examly.springapp.service;
//
//import org.springframework.stereotype.Service;
//import com.examly.springapp.model.Account;
//import com.examly.springapp.repository.AccountRepository;
//
//import java.util.List;
//import java.util.Optional;
//
//@Service
//public class AccountService {
//
//    private final AccountRepository accountRepository;
//
//    public AccountService(AccountRepository accountRepository) {
//        this.accountRepository = accountRepository;
//    }
//
//    public Account getAccountById(Long id) {
//        return accountRepository.findById(id)
//                .orElseThrow(() -> new RuntimeException("Account not found"));
//    }
//
//    public List<Account> getAllAccounts() {
//        return accountRepository.findAll();
//    }
//
//    public Account createAccount(Account acc) {
//        return accountRepository.save(acc);
//    }
//}



package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Account;

public interface AccountService {
    Account getAccountById(Long id);
    List<Account> getAllAccounts();
    Account createAccount(Account account);
}
