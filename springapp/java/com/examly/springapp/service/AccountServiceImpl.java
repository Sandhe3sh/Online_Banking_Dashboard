	package com.examly.springapp.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.stereotype.Service;

import com.examly.springapp.model.Account;
import com.examly.springapp.repository.AccountRepository;

@Service
public class AccountServiceImpl implements AccountService {

    private final AccountRepository accountRepository;
    public AccountServiceImpl(AccountRepository accountRepository) {
        this.accountRepository = accountRepository;
    }

    @Override
    public Account getAccountById(Long id) {
        return accountRepository.findById(id)
                .orElseThrow(() -> new NoSuchElementException("Account not found"));
    }
	
    @Override
    public List<Account> getAllAccounts() {
        return accountRepository.findAll();
    }

    @Override
    public Account createAccount(Account account) {
        account.setCreatedDate(LocalDateTime.now());
        return accountRepository.save(account);
    }
} 


//
//package com.examly.springapp.service;
//
//import com.examly.springapp.model.Account;
//import com.examly.springapp.repository.AccountRepository;
//
//import org.springframework.core.io.Resource;
//import org.springframework.core.io.UrlResource;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//import org.springframework.stereotype.Service;
//import org.springframework.web.multipart.MultipartFile;
//
//import java.net.MalformedURLException;
//import java.nio.file.Files;
//import java.nio.file.Path;
//import java.nio.file.Paths;
//import java.time.LocalDateTime;
//import java.util.NoSuchElementException;
//
//@Service
//public class AccountServiceImpl implements AccountService {
//
//    private final AccountRepository accountRepository;
//
//    // Folder path for storing files (update if needed)
//    private final Path fileStorageLocation = Paths.get("uploads").toAbsolutePath().normalize();
//
//    public AccountServiceImpl(AccountRepository accountRepository) {
//        this.accountRepository = accountRepository;
//
//        try {
//            Files.createDirectories(fileStorageLocation);
//        } catch (Exception e) {
//            throw new RuntimeException("Could not create upload directory", e);
//        }
//    }
//
//    @Override
//    public Account getAccountById(Long id) {
//        return accountRepository.findById(id)
//                .orElseThrow(() -> new NoSuchElementException("Account not found"));
//    }
//
//    @Override
//    public Page<Account> getAllAccounts(Pageable pageable) {
//        return accountRepository.findAll(pageable);
//    }
//
//    @Override
//    public Account createAccount(Account account) {
//        account.setCreatedDate(LocalDateTime.now());
//        return accountRepository.save(account);
//    }
//
//    @Override
//    public void storeFile(Long accountId, MultipartFile file) throws Exception {
//        Account account = getAccountById(accountId);
//
//        Path targetLocation = fileStorageLocation.resolve("account-" + accountId + "-" + file.getOriginalFilename());
//        Files.copy(file.getInputStream(), targetLocation);
//
//        // Optional: save file path in account entity (if you want to track)
//        // account.setDocumentPath(targetLocation.toString());
//        // accountRepository.save(account);
//    }
//
//    @Override
//    public Resource loadFile(Long accountId) {
//        try {
//            Path dir = fileStorageLocation;
//            Path filePath = Files.list(dir)
//                    .filter(path -> path.getFileName().toString().startsWith("account-" + accountId + "-"))
//                    .findFirst()
//                    .orElseThrow(() -> new RuntimeException("File not found"));
//
//            Resource resource = new UrlResource(filePath.toUri());
//            if (resource.exists() || resource.isReadable()) {
//                return resource;
//            } else {
//                throw new RuntimeException("File not readable");
//            }
//        } catch (Exception e) {
//            throw new RuntimeException("File not found", e);
//        }
//    }
//}
