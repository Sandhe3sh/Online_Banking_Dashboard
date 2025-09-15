//package com.examly.springapp.model;
//
//import lombok.Data;
//import java.time.LocalDateTime;
//
//@Data
//public class Transaction {
//    private Long transactionId;
//    private Long accountId;
//    private Double amount;
//    private String transactionType; // DEPOSIT / WITHDRAW / TRANSFER
//    private String description;
//    private Long recipientAccountId;
//    private LocalDateTime transactionDate;
//}
// 

package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "Transaction")
@Data
public class Transaction {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "transaction_id")
    private Long transactionId;

    @Column(name = "account_id", nullable = false)
    private Long accountId;

    @Column(nullable = false)
    private Double amount;

    @Column(name = "transaction_type", nullable = false)
    private String transactionType;  // DEPOSIT, WITHDRAW, TRANSFER

    @Column
    private String description;

    @Column(name = "recipient_account_id")
    private Long recipientAccountId;

    @Column(name = "transaction_date", nullable = false)
    private LocalDateTime transactionDate;
    
}
