interface IDIoBank {
  login: boolean;
  email?: string;
  password?: string
}

const dioBank = {
  login: false,
  email: "Joao@dio.bank",
  password: "123456",
};

export const getAllLocalStorage = (): string | null => {
  return localStorage.getItem("diobank");
};

export const createLocalStorage = (): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};

export const changeLocalStorage = (dioBank: IDIoBank): void => {
  localStorage.setItem("diobank", JSON.stringify(dioBank));
};
