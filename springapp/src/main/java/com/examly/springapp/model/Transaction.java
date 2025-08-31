package com.examly.springapp.model;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Transaction {
    private Long transactionId;
    private Long accountId;
    private Double amount;
    private String transactionType; // DEPOSIT / WITHDRAW / TRANSFER
    private String description;
    private Long recipientAccountId;
    private LocalDateTime transactionDate;
}
 