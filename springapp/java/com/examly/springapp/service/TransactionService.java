////package com.examly.springapp.service;
////
////import com.examly.springapp.model.Account;
////import com.examly.springapp.model.Transaction;
////import java.util.List;
////
////public interface TransactionService {
////    Account deposit(Long accountId, Double amount, String description);
////    Account withdraw(Long accountId, Double amount, String description);
////    Account transfer(Long fromId, Long toId, Double amount, String description);
////    List<Transaction> getTransactionHistory(Long accountId);
////}
////  
//
//package com.examly.springapp.service;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.NoSuchElementException;
//
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import com.examly.springapp.model.Account;
//import com.examly.springapp.model.Transaction;
//import com.examly.springapp.repository.AccountRepository;
//import com.examly.springapp.repository.TransactionRepository;
//
//@Service
//public class TransactionService {
//
//    private final TransactionRepository transactionRepository;
//    private final AccountRepository accountRepository;
//
//    public TransactionService(TransactionRepository transactionRepository, AccountRepository accountRepository) {
//        this.transactionRepository = transactionRepository;
//        this.accountRepository = accountRepository;
//    }
//
//    @Transactional
//    public Account deposit(Long accountId, Double amount, String description) {
//        Account account = accountRepository.findById(accountId)
//                .orElseThrow(() -> new NoSuchElementException("Account not found"));
//
//        account.setBalance(account.getBalance() + amount);
//
//        Transaction transaction = new Transaction();
//        transaction.setAccountId(accountId);
//        transaction.setAmount(amount);
//        transaction.setTransactionType("DEPOSIT");
//        transaction.setDescription(description);
//        transaction.setTransactionDate(LocalDateTime.now());
//
//        transactionRepository.save(transaction);
//        return accountRepository.save(account);
//    }
//
//    @Transactional
//    public Account withdraw(Long accountId, Double amount, String description) {
//        Account account = accountRepository.findById(accountId)
//                .orElseThrow(() -> new NoSuchElementException("Account not found"));
//
//        if (account.getBalance() < amount) {
//            throw new IllegalArgumentException("Insufficient balance");
//        }
//
//        account.setBalance(account.getBalance() - amount);
//
//        Transaction transaction = new Transaction();
//        transaction.setAccountId(accountId);
//        transaction.setAmount(amount);
//        transaction.setTransactionType("WITHDRAW");
//        transaction.setDescription(description);
//        transaction.setTransactionDate(LocalDateTime.now());
//
//        transactionRepository.save(transaction);
//        return accountRepository.save(account);
//    }
//
//    @Transactional
//    public Account transfer(Long fromAccountId, Long toAccountId, Double amount, String description) {
//        Account fromAccount = accountRepository.findById(fromAccountId)
//                .orElseThrow(() -> new NoSuchElementException("Sender Account not found"));
//
//        Account toAccount = accountRepository.findById(toAccountId)
//                .orElseThrow(() -> new NoSuchElementException("Recipient Account not found"));
//
//        if (fromAccount.getBalance() < amount) {
//            throw new IllegalArgumentException("Insufficient balance");
//        }
//
//        fromAccount.setBalance(fromAccount.getBalance() - amount);
//        toAccount.setBalance(toAccount.getBalance() + amount);
//
//        // From Account Transaction
//        Transaction transactionFrom = new Transaction();
//        transactionFrom.setAccountId(fromAccountId);
//        transactionFrom.setAmount(amount);
//        transactionFrom.setTransactionType("TRANSFER");
//        transactionFrom.setDescription(description);
//        transactionFrom.setRecipientAccountId(toAccountId);
//        transactionFrom.setTransactionDate(LocalDateTime.now());
//
//        // To Account Transaction (optional)
//        Transaction transactionTo = new Transaction();
//        transactionTo.setAccountId(toAccountId);
//        transactionTo.setAmount(amount);
//        transactionTo.setTransactionType("DEPOSIT");
//        transactionTo.setDescription("Received from account " + fromAccountId);
//        transactionTo.setTransactionDate(LocalDateTime.now());
//
//        transactionRepository.save(transactionFrom);
//        transactionRepository.save(transactionTo);
//
//        accountRepository.save(fromAccount);
//        return accountRepository.save(toAccount);
//    }
//
//    public List<Transaction> getTransactionHistory(Long accountId) {
//        return transactionRepository.findByAccountId(accountId);
//    }
//}


package com.examly.springapp.service;

import com.examly.springapp.model.Account;
import com.examly.springapp.model.Transaction;
import java.util.List;

public interface TransactionService {
    Account deposit(Long accountId, Double amount, String description);
    Account withdraw(Long accountId, Double amount, String description);
    Account transfer(Long fromId, Long toId, Double amount, String description);
    List<Transaction> getTransactionHistory(Long accountId);
}
