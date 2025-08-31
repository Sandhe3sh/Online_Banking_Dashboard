package com.examly.springapp.repository;

import com.examly.springapp.model.Account;
import org.springframework.stereotype.Repository;
import java.util.*;

@Repository
public class AccountRepository {
    private final Map<Long, Account> accountStore = new HashMap<>();
    private long sequence = 1;

    public Account save(Account account) {
        if (account.getAccountId() == null) {
            account.setAccountId(sequence++);
        }
        accountStore.put(account.getAccountId(), account);
        return account;
    }

    public Optional<Account> findById(Long id) {
        return Optional.ofNullable(accountStore.get(id));
    }

    public List<Account> findAll() {
        return new ArrayList<>(accountStore.values());
    }

    public void clear() {
        accountStore.clear();
    }
}
 