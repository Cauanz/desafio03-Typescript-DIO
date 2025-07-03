import {
  changeLocalStorage,
  createLocalStorage,
  getAllLocalStorage,
} from "./storage";

const dioBank = {
  login: false,
  email: "Joao@dio.bank",
  password: "123456",
};

describe("storage", () => {
  const mockSetItem = jest.spyOn(Storage.prototype, "setItem");
  const mockGetItem = jest.spyOn(Storage.prototype, "getItem");
  it("Deve retornar o objeto no localStorage com a chave diobank", () => {
    getAllLocalStorage();
    expect(mockGetItem).toHaveBeenCalledWith("diobank");
  });

  it("Deve criar o objeto no localStorage", () => {
    createLocalStorage();
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve alterar o valor do objeto no localStorage", () => {
    changeLocalStorage(dioBank);
    expect(mockSetItem).toHaveBeenCalledWith(
      "diobank",
      JSON.stringify(dioBank)
    );
  });

  it("Deve conter as propriedades email e senha no localStorage", () => {
    mockGetItem.mockReturnValue(JSON.stringify(dioBank));

    const data = getAllLocalStorage();
    const parsedData = JSON.parse(data!);

    expect("email" in parsedData).toBe(true);
    expect("password" in parsedData).toBe(true);
  });

  it("Deve retornar um erro caso o email ou senha armazenados no localStorage estejam errados", () => {
    mockGetItem.mockReturnValue(JSON.stringify(dioBank));

    const data = getAllLocalStorage();
    const parsedData = JSON.parse(data!);

    expect(parsedData.email).toBe("Joao@dio.bank");
    expect(parsedData.password).toBe("123456");
  });
});
