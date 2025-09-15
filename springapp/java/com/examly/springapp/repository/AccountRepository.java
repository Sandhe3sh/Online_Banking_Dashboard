 

package com.examly.springapp.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.examly.springapp.model.Account;

@Repository
public interface AccountRepository extends JpaRepository<Account, Long> {
}

//
//package com.examly.springapp.repository;
//
//import org.springframework.data.jpa.repository.JpaRepository;
//import org.springframework.stereotype.Repository;
//
//import com.examly.springapp.model.Account;
//
//@Repository
//public interface AccountRepository extends JpaRepository<Account, Long> {
//}
