
import { UserRepository } from "../../../src/repositories";
import { UserModelMock, UserServiceMock } from '../../mocks';
import UserService from "src/services/user_service";
let { user, users } = UserModelMock;

describe("User Repository Tests", () => {
  beforeEach(() => {
    jest.clearAllMocks(); 
  });

  it("Should find a user by id", async () => {
    UserServiceMock.getById.mockReturnValue(Promise.resolve(user));
    const userService = UserServiceMock as unknown as UserService;
    //const ur = new UserRepository(userService);
    userService.getById(user._id.toString());
    const expected = await UserServiceMock.getById(user._id.toString());
    expect(expected).toMatchObject(user);
  });

  it("Should find a user by username", async () => {
    UserServiceMock.getByUserName.mockReturnValue(Promise.resolve(user));
    const userService = UserServiceMock as unknown as UserService;
    const _userService = new UserRepository(userService);
    const expected = await _userService.getByUserName(user.username);
    expect(expected).toMatchObject(user);
  });

  it("Should return a user collection", async () => {
    UserServiceMock.getAllPaginate.mockReturnValue(Promise.resolve(users));
    const UserServie = UserServiceMock as unknown as UserService;
    const _userService = new UserRepository(UserServie);
    const expected = await _userService.getAllPaginate();
    expect(expected).toMatchObject(users);
  });

  it("Should update a user by id", async () => {
    UserServiceMock.updateEntity.mockReturnValue(Promise.resolve(user));
    const userService = UserServiceMock as unknown as UserService;
    const _userService = new UserRepository(userService);
    const expected = await _userService.updateEntity(user._id.toString(), user);
    expect(expected).toMatchObject(user);
  });

  it("Should delete a user by id", async () => {
    UserServiceMock.deleteById.mockReturnValue(Promise.resolve(true));
    const userService = UserServiceMock as unknown as UserService;
    const _userService = new UserRepository(userService);
    const expected = await _userService.deleteById(user._id.toString());
    expect(expected).toEqual(true);
  });
});
