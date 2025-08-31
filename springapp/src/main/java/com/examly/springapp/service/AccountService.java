package com.examly.springapp.service;

import com.examly.springapp.model.Account;
import java.util.List;

public interface AccountService {
    Account getAccountById(Long id);
    List<Account> getAllAccounts();
    Account createAccount(Account account);
}
 