 

package com.examly.springapp.service;

import java.util.List;

import com.examly.springapp.model.Account;

public interface AccountService {
    Account getAccountById(Long id);
    List<Account> getAllAccounts();
    Account createAccount(Account account);
}



//package com.examly.springapp.service;
//
//import com.examly.springapp.model.Account;
//import org.springframework.data.domain.Page;
//import org.springframework.data.domain.Pageable;
//
//public interface AccountService {
//    Account getAccountById(Long id);
//    Page<Account> getAllAccounts(Pageable pageable);   // changed to return Page<Account> with Pageable
//    Account createAccount(Account account);
//
//    // Optional: methods for file upload/download (if needed)
//    void storeFile(Long accountId, org.springframework.web.multipart.MultipartFile file) throws Exception;
//    org.springframework.core.io.Resource loadFile(Long accountId);
//}
