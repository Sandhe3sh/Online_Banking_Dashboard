	package com.examly.springapp.controller;
	
	import java.util.List;
	
	import org.springframework.http.ResponseEntity;
	import org.springframework.web.bind.annotation.*;
	
	import com.examly.springapp.dto.DepositWithdrawRequest;
	import com.examly.springapp.dto.TransferRequest;
	import com.examly.springapp.model.Account;
	import com.examly.springapp.model.Transaction;
	import com.examly.springapp.service.TransactionService;
	
	import jakarta.validation.Valid;
	
	@RestController
	@RequestMapping("/api/transactions")
	public class TransactionController {
	
	    private final TransactionService transactionService;
	    public TransactionController(TransactionService transactionService) {
	        this.transactionService = transactionService;
	    }
	
	    @PostMapping("/deposit")
	    public ResponseEntity<Account> deposit(@Valid @RequestBody DepositWithdrawRequest request) {
	        return ResponseEntity.ok(
	                transactionService.deposit(request.getAccountId(), request.getAmount(), request.getDescription())
	        );
	    }
	
	    @PostMapping("/withdraw")
	    public ResponseEntity<Account> withdraw(@Valid @RequestBody DepositWithdrawRequest request) {
	        return ResponseEntity.ok(
	                transactionService.withdraw(request.getAccountId(), request.getAmount(), request.getDescription())
	        );
	    }
	
	    @PostMapping("/transfer")
	    public ResponseEntity<Account> transfer(@Valid @RequestBody TransferRequest request) {
	        return ResponseEntity.ok(
	                transactionService.transfer(request.getFromAccountId(), request.getToAccountId(), request.getAmount(), request.getDescription())
	        );
	    }
	
	    @GetMapping("/account/{accountId}")
	    public ResponseEntity<List<Transaction>> getHistory(@PathVariable Long accountId) {
	        return ResponseEntity.ok(transactionService.getTransactionHistory(accountId));
	    }
	}
	 
	
//	
//	
//	package com.examly.springapp.controller;
//	
//	import org.springframework.data.domain.Page;
//	import org.springframework.data.domain.Pageable;
//	import org.springframework.http.ResponseEntity;
//	import org.springframework.web.bind.annotation.*;
//	
//	import com.examly.springapp.dto.DepositWithdrawRequest;
//	import com.examly.springapp.dto.TransferRequest;
//	import com.examly.springapp.model.Account;
//	import com.examly.springapp.model.Transaction;
//	import com.examly.springapp.service.TransactionService;
//	
//	import jakarta.validation.Valid;
//	
//	import java.util.List;
//	
//	@RestController
//	@RequestMapping("/api/transactions")
//	public class TransactionController {
//	
//	    private final TransactionService transactionService;
//	    
//	    public TransactionController(TransactionService transactionService) {
//	        this.transactionService = transactionService;
//	    }
//	
//	    @PostMapping("/deposit")
//	    public ResponseEntity<Account> deposit(@Valid @RequestBody DepositWithdrawRequest request) {
//	        Account acc = transactionService.deposit(request.getAccountId(), request.getAmount(), request.getDescription());
//	        return ResponseEntity.ok(acc);
//	    }
//	
//	    @PostMapping("/withdraw")
//	    public ResponseEntity<Account> withdraw(@Valid @RequestBody DepositWithdrawRequest request) {
//	        Account acc = transactionService.withdraw(request.getAccountId(), request.getAmount(), request.getDescription());
//	        return ResponseEntity.ok(acc);
//	    }
//	
//	    @PostMapping("/transfer")
//	    public ResponseEntity<Account> transfer(@Valid @RequestBody TransferRequest request) {
//	        Account acc = transactionService.transfer(request.getFromAccountId(), request.getToAccountId(), request.getAmount(), request.getDescription());
//	        return ResponseEntity.ok(acc);
//	    }
//	
//	    // Pagination and sorting support for transaction history
//	    @GetMapping("/account/{accountId}")
//	    public ResponseEntity<Page<Transaction>> getHistory(@PathVariable Long accountId, Pageable pageable) {
//	        Page<Transaction> transactions = transactionService.getTransactionHistory(accountId, pageable);
//	        return ResponseEntity.ok(transactions);
//	    }
//	}
