package com.examly.springapp.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.Data;

@Data
public class CreateAccountRequest {
    @NotBlank(message = "Account number is required")
    @Size(min = 10, message = "Account number must be at least 10 digits")
    private String accountNumber;

    @NotBlank(message = "Account holder name is required")
    private String accountHolderName;

    @Min(value = 0, message = "Balance must be non-negative")
    private Double balance;

    @NotBlank(message = "Account type is required")
    private String accountType;
}
  