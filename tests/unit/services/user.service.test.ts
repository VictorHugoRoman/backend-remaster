const mockingoose = require("mockingoose").default;
import { UserService }  from "@src/services";
import { UserModel } from "@src/models";
import { UserModelMock } from "../../mocks";

let { user, users } = UserModelMock;

describe("User Service Tests", () => {
  beforeEach(() => {
    mockingoose.resetAll();
    jest.clearAllMocks();
  });

  it("Should find a user by id", async () => {
    const _user = { ...user };
    delete _user.password;
    mockingoose(UserModel).toReturn(user, "findOne");
    const service = new UserService(UserModel);
    const expected = await service.getById(_user._id.toString());
    expect(expected).toMatchObject(_user);
    //Investigar metodos de Jest para hacer tipos de comparaciones
  });

  it("Should find a user by username", async () => {
    const _user = { ...user };
    delete _user.password;

    mockingoose(UserModel).toReturn(user, "findOne");
    const service = new UserService(UserModel);
    const expected = await service.getByUserName(_user.username);
    expect(expected).toMatchObject(_user);
  });

  it("Should return a user collection", async () => {
    users = users.map((user) => {
      delete user.password;
      return user;
    });

    mockingoose(UserModel).toReturn(users, "find");
    const _userRepository = new UserService(UserModel);
    const expected = await _userRepository.getAllPaginate();
    expect(expected).toMatchObject(users);
  });

  it("Should update an especific user by id", async () => {
    const _user = { ...user };
    delete _user.password;

    mockingoose(UserModel).toReturn(_user, "findOneAndUpdate");
    const _userRepository = new UserService(UserModel);
    const expected = await _userRepository.updateEntity(user._id.toString(), {
      name: "victor",
    }); //hacemos testing al metodo Update de nuestro repositorio
    expect(expected).toMatchObject(_user);
  });

  it("Should delete an especific user by id", async () => {
    mockingoose(UserModel).toReturn(user, "findOneAndDelete");
    const _userRepository = new UserService(UserModel);
    const expected = await _userRepository.deleteById(user._id.toString());
    expect(expected).toEqual(true);
  });
});
