
package com.examly.springapp.service;

import com.examly.springapp.model.Account;
import com.examly.springapp.model.Transaction;
import com.examly.springapp.repository.AccountRepository;
import com.examly.springapp.repository.TransactionRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

@Service
public class TransactionServiceImpl implements TransactionService {
	
	private final AccountRepository accountRepository;
	private final TransactionRepository transactionRepository;
		
		public TransactionServiceImpl(AccountRepository accountRepository, TransactionRepository transactionRepository) {
			this.accountRepository = accountRepository;
		        this.transactionRepository = transactionRepository;
		    }
		
		    @Override
		    @Transactional
		    public Account deposit(Long accountId, Double amount, String description) {
		        validateAmount(amount);
		
		        Account acc = accountRepository.findById(accountId)
		                .orElseThrow(() -> new NoSuchElementException("Account not found"));
		
		        acc.setBalance(acc.getBalance() + amount);
		        accountRepository.save(acc);
		
		        Transaction tx = createTransaction(accountId, null, amount, "DEPOSIT", description);
		        transactionRepository.save(tx);
		
		        return acc;
		    }
		
		    @Override
		    @Transactional
		    public Account withdraw(Long accountId, Double amount, String description) {
		        validateAmount(amount);
		
		        Account acc = accountRepository.findById(accountId)
		                .orElseThrow(() -> new NoSuchElementException("Account not found"));
		
		        if (acc.getBalance() - amount < 500.0) {
		            throw new IllegalArgumentException("Insufficient funds. Minimum balance of 500.00 must be maintained.");
		        }
		
		        acc.setBalance(acc.getBalance() - amount);
		        accountRepository.save(acc);
		
		        Transaction tx = createTransaction(accountId, null, amount, "WITHDRAW", description);
		        transactionRepository.save(tx);
		
		        return acc;
		    }
		
		    @Override
		    @Transactional
		    public Account transfer(Long fromId, Long toId, Double amount, String description) {
		        validateAmount(amount);
		
		        if (fromId.equals(toId)) {
		            throw new IllegalArgumentException("Cannot transfer to the same account");
		        }
		
		        Account fromAcc = accountRepository.findById(fromId)
		                .orElseThrow(() -> new NoSuchElementException("Sender account not found"));
		        Account toAcc = accountRepository.findById(toId)
		                .orElseThrow(() -> new NoSuchElementException("Recipient account not found"));
		
		        if (fromAcc.getBalance() - amount < 500.0) {
		            throw new IllegalArgumentException("Insufficient funds. Minimum balance of 500.00 must be maintained.");
		        }
		
		        fromAcc.setBalance(fromAcc.getBalance() - amount);
		        toAcc.setBalance(toAcc.getBalance() + amount);
		
		        accountRepository.save(fromAcc);
		        accountRepository.save(toAcc);
		
		        Transaction tx = createTransaction(fromId, toId, amount, "TRANSFER", description);
		        transactionRepository.save(tx);
		
		        return fromAcc;
		    }
		
		    @Override
		    public List<Transaction> getTransactionHistory(Long accountId) {
		        if (accountRepository.findById(accountId).isEmpty()) {
		            throw new NoSuchElementException("Account not found");
		        }
		        return transactionRepository.findByAccountId(accountId);
		    }
		
		    private void validateAmount(Double amount) {
		        if (amount == null || amount <= 0) {
		            throw new IllegalArgumentException("Amount must be greater than zero");
		        }
		    }
		
		    private Transaction createTransaction(Long accountId, Long recipientAccountId, Double amount,
		                                          String transactionType, String description) {
		        Transaction tx = new Transaction();
		        tx.setAccountId(accountId);
		        tx.setRecipientAccountId(recipientAccountId);
		        tx.setAmount(amount);
		        tx.setTransactionType(transactionType);
		        tx.setDescription(description);
		        tx.setTransactionDate(LocalDateTime.now());
		        return tx;
		    }
		}

//
//package com.examly.springapp.service;
//
//import com.examly.springapp.model.Account;
//import com.examly.springapp.model.Transaction;
//import com.examly.springapp.repository.AccountRepository;
//import com.examly.springapp.repository.TransactionRepository;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//import org.springframework.transaction.annotation.Transactional;
//
//import java.time.LocalDateTime;
//import java.util.List;
//import java.util.NoSuchElementException;
//
//@Service
//public class TransactionServiceImpl implements TransactionService {
//
//    private final AccountRepository accountRepository;
//    private final TransactionRepository transactionRepository;
//
//    public TransactionServiceImpl(AccountRepository accountRepository, TransactionRepository transactionRepository) {
//        this.accountRepository = accountRepository;
//        this.transactionRepository = transactionRepository;
//    }
//
//    @Override
//    @Transactional
//    public Account deposit(Long accountId, Double amount, String description) {
//        validateAmount(amount);
//
//        Account acc = accountRepository.findById(accountId)
//                .orElseThrow(() -> new NoSuchElementException("Account not found"));
//
//        acc.setBalance(acc.getBalance() + amount);
//        accountRepository.save(acc);
//
//        Transaction tx = createTransaction(accountId, null, amount, "DEPOSIT", description);
//        transactionRepository.save(tx);
//
//        return acc;
//    }
//
//    @Override
//    @Transactional
//    public Account withdraw(Long accountId, Double amount, String description) {
//        validateAmount(amount);
//
//        Account acc = accountRepository.findById(accountId)
//                .orElseThrow(() -> new NoSuchElementException("Account not found"));
//
//        if (acc.getBalance() - amount < 500.0) {
//            throw new IllegalArgumentException("Insufficient funds. Minimum balance of 500.00 must be maintained.");
//        }
//
//        acc.setBalance(acc.getBalance() - amount);
//        accountRepository.save(acc);
//
//        Transaction tx = createTransaction(accountId, null, amount, "WITHDRAW", description);
//        transactionRepository.save(tx);
//
//        return acc;
//    }
//
//    @Override
//    @Transactional
//    public Account transfer(Long fromId, Long toId, Double amount, String description) {
//        validateAmount(amount);
//
//        if (fromId.equals(toId)) {
//            throw new IllegalArgumentException("Cannot transfer to the same account");
//        }
//
//        Account fromAcc = accountRepository.findById(fromId)
//                .orElseThrow(() -> new NoSuchElementException("Sender account not found"));
//        Account toAcc = accountRepository.findById(toId)
//                .orElseThrow(() -> new NoSuchElementException("Recipient account not found"));
//
//        if (fromAcc.getBalance() - amount < 500.0) {
//            throw new IllegalArgumentException("Insufficient funds. Minimum balance of 500.00 must be maintained.");
//        }
//
//        fromAcc.setBalance(fromAcc.getBalance() - amount);
//        toAcc.setBalance(toAcc.getBalance() + amount);
//
//        accountRepository.save(fromAcc);
//        accountRepository.save(toAcc);
//
//        Transaction tx = createTransaction(fromId, toId, amount, "TRANSFER", description);
//        transactionRepository.save(tx);
//
//        return fromAcc;
//    }
//
//    @Override
//    public List<Transaction> getTransactionHistory(Long accountId) {
//        if (accountRepository.findById(accountId).isEmpty()) {
//            throw new NoSuchElementException("Account not found");
//        }
//        return transactionRepository.findByAccountId(accountId);
//    }
//
//    @Override
//    public Page<Transaction> getTransactionHistory(Long accountId, Pageable pageable) {
//        if (accountRepository.findById(accountId).isEmpty()) {
//            throw new NoSuchElementException("Account not found");
//        }
//        return (Page<Transaction>) transactionRepository.findByAccountId(accountId);
//    }
//
//    private void validateAmount(Double amount) {
//        if (amount == null || amount <= 0) {
//            throw new IllegalArgumentException("Amount must be greater than zero");
//        }
//    }
//
//    private Transaction createTransaction(Long accountId, Long recipientAccountId, Double amount,
//                                          String transactionType, String description) {
//        Transaction tx = new Transaction();
//        tx.setAccountId(accountId);
//        tx.setRecipientAccountId(recipientAccountId);
//        tx.setAmount(amount);
//        tx.setTransactionType(transactionType);
//        tx.setDescription(description);
//        tx.setTransactionDate(LocalDateTime.now());
//        return tx;
//    }
//}
