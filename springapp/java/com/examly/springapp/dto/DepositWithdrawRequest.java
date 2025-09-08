package com.examly.springapp.dto;

import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.NotNull;
import lombok.Data;

@Data
public class DepositWithdrawRequest {
    @NotNull
    private Long accountId;

    @Min(value = 1, message = "Amount must be greater than zero")
    private Double amount;

    private String description;
}
 