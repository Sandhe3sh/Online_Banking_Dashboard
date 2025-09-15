// 

package com.examly.springapp.service;

import com.examly.springapp.model.Account;
import com.examly.springapp.model.Transaction;
import java.util.List;

public interface TransactionService {
    Account deposit(Long accountId, Double amount, String description);
    Account withdraw(Long accountId, Double amount, String description);
    Account transfer(Long fromId, Long toId, Double amount, String description);
    List<Transaction> getTransactionHistory(Long accountId);
	Transaction logTransaction(Transaction transaction);
 
 	List<Transaction> getAllTransactions(); 
	Object getTransactionById(Long id);
	 
}

//
//package com.examly.springapp.service;
//
//import com.examly.springapp.model.Account;
//import com.examly.springapp.model.Transaction;
//
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//
//import java.util.List;
//
//public interface TransactionService {
//    Account deposit(Long accountId, Double amount, String description);
//    Account withdraw(Long accountId, Double amount, String description);
//    Account transfer(Long fromId, Long toId, Double amount, String description);
//
//    List<Transaction> getTransactionHistory(Long accountId);
//    Page<Transaction> getTransactionHistory(Long accountId, Pageable pageable);  // add pageable version
//}
