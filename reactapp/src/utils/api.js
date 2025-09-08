import axios from 'axios';

const API_BASE_URL = 'http://localhost:8081/api';

export const createAccount = (accountData) => {
  return axios.post(`${API_BASE_URL}/accounts`, accountData);
};

export const depositMoney = (depositData) => {
  return axios.post(`${API_BASE_URL}/transactions/deposit`, depositData);
};

export const withdrawMoney = (withdrawData) => {
  return axios.post(`${API_BASE_URL}/transactions/withdraw`, withdrawData);
};

export const transferMoney = (transferData) => {
  return axios.post(`${API_BASE_URL}/transactions/transfer`, transferData);
};

export const getTransactionHistory = (accountId) => {
  return axios.get(`${API_BASE_URL}/transactions/account/${accountId}`);
};

export const getAccountDetails = (accountId) => {
  return axios.get(`${API_BASE_URL}/accounts/${accountId}`);
};

export const getAllAccounts = () => {
  return axios.get(`${API_BASE_URL}/accounts`);
};
 