package com.examly.springapp.model;

import lombok.Data;
import java.time.LocalDateTime;

@Data
public class Account {
    private Long accountId;
    private String accountNumber;
    private String accountHolderName;
    private Double balance;
    private String accountType;
    private LocalDateTime createdDate;
}
 
 