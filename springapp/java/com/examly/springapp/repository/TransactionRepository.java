//package com.examly.springapp.repository;
//
//import com.examly.springapp.model.Transaction;
//import org.springframework.stereotype.Repository;
//import java.util.*;
//
//@Repository
//public class TransactionRepository {
//    private final Map<Long, List<Transaction>> txStore = new HashMap<>();
//    private long sequence = 1;
//
//    public Transaction save(Transaction tx) {
//        tx.setTransactionId(sequence++);
//        txStore.computeIfAbsent(tx.getAccountId(), k -> new ArrayList<>()).add(tx);
//        return tx;
//    }
//
//    public List<Transaction> findByAccountId(Long accountId) {
//        return txStore.getOrDefault(accountId, new ArrayList<>());
//    }
//
//    public void clear() {
//        txStore.clear();
//    }
//}
// 


package com.examly.springapp.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Transaction;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, Long> {
    List<Transaction> findByAccountId(Long accountId);
}
