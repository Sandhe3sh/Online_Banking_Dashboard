package com.examly.springapp.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.examly.springapp.dto.CreateAccountRequest;
import com.examly.springapp.model.Account;
import com.examly.springapp.service.AccountService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/api/accounts")
public class AccountController {

    private final AccountService accountService;
    public AccountController(AccountService accountService) {
        this.accountService = accountService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Account> getAccount(@PathVariable Long id) {
        Account acc = accountService.getAccountById(id);
        return ResponseEntity.ok(acc);
    }

    @GetMapping
    public ResponseEntity<List<Account>> getAllAccounts() {
        return ResponseEntity.ok(accountService.getAllAccounts());
    }

    @PostMapping
    public ResponseEntity<Account> createAccount(@Valid @RequestBody CreateAccountRequest request) {
        Account acc = new Account();
        acc.setAccountNumber(request.getAccountNumber());
        acc.setAccountHolderName(request.getAccountHolderName());
        acc.setBalance(request.getBalance());
        acc.setAccountType(request.getAccountType());
        return ResponseEntity.status(HttpStatus.CREATED).body(accountService.createAccount(acc));
    }
}
 

//package com.examly.springapp.controller;
//
//import java.util.List;
//
//import org.springframework.core.io.Resource;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.http.HttpHeaders;
//import org.springframework.http.HttpStatus;
//import org.springframework.http.ResponseEntity;
//import org.springframework.web.bind.annotation.*;
//import org.springframework.web.multipart.MultipartFile;
//
//import com.examly.springapp.dto.CreateAccountRequest;
//import com.examly.springapp.model.Account;
//import com.examly.springapp.service.AccountService;
//
//import jakarta.validation.Valid;
//
//@RestController
//@RequestMapping("/api/accounts")
//public class AccountController {
//
//    private final AccountService accountService;
//    
//    public AccountController(AccountService accountService) {
//        this.accountService = accountService;
//    }
//
//    @GetMapping("/{id}")
//    public ResponseEntity<Account> getAccount(@PathVariable Long id) {
//        Account acc = accountService.getAccountById(id);
//        return ResponseEntity.ok(acc);
//    }
//
//    // Pagination and sorting support here
//    @GetMapping
//    public ResponseEntity<Page<Account>> getAllAccounts(Pageable pageable) {
//        Page<Account> page = accountService.getAllAccounts(pageable);
//        return ResponseEntity.ok(page);
//    }
//
//    @PostMapping
//    public ResponseEntity<Account> createAccount(@Valid @RequestBody CreateAccountRequest request) {
//        Account acc = new Account();
//        acc.setAccountNumber(request.getAccountNumber());
//        acc.setAccountHolderName(request.getAccountHolderName());
//        acc.setBalance(request.getBalance());
//        acc.setAccountType(request.getAccountType());
//        Account created = accountService.createAccount(acc);
//        return ResponseEntity.status(HttpStatus.CREATED).body(created);
//    }
//
//    // File upload example endpoint
//    @PostMapping("/{id}/upload")
//    public ResponseEntity<String> uploadFile(@PathVariable Long id, @RequestParam("file") MultipartFile file) {
//        try {
//            accountService.storeFile(id, file);
//            return ResponseEntity.ok("File uploaded successfully");
//        } catch (Exception e) {
//            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("File upload failed: " + e.getMessage());
//        }
//    }
//
//    // File download example endpoint
//    @GetMapping("/{id}/download")
//    public ResponseEntity<Resource> downloadFile(@PathVariable Long id) {
//        Resource file = accountService.loadFile(id);
//        return ResponseEntity.ok()
//                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFilename() + "\"")
//                .body(file);
//    }
//}
