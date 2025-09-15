		//package com.examly.springapp.model;
//
//import lombok.Data;
//import java.time.LocalDateTime;
//
//@Data
//public class Account {
//    private Long accountId;
//    private String accountNumber;
//    private String accountHolderName;
//    private Double balance;
//    private String accountType;
//    private LocalDateTime createdDate;
//}
// 
// 

package com.examly.springapp.model;

import jakarta.persistence.*;
import lombok.Data;
import java.time.LocalDateTime;

@Entity
@Table(name = "Account")
@Data
public class Account {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "account_id")
    private Long accountId;

    @Column(name = "account_number", unique = true, nullable = false)
    private String accountNumber;

    @Column(name = "account_holder_name", nullable = false)
    private String accountHolderName;

    @Column(nullable = false)
    private Double balance;

    @Column(name = "account_type", nullable = false)
    private String accountType;

    @Column(name = "created_date", nullable = false)
    private LocalDateTime createdDate;
}
