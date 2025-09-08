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
 