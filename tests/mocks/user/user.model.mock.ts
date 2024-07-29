import { IUser } from "src/models";
import { Types } from "mongoose";

type IUserDummy = { user: IUser; users: IUser[] };

const userDummy: IUserDummy = {
  user: {
    _id: new Types.ObjectId("507f191e810c19729de860ea"),
    name: "Marluan",
    username: "Marluan03",
    password: "mystrongPassword",
  },
  users: [
    {
      _id: new Types.ObjectId("507f191e810c19729de860ea"),
      name: "Marluan",
      username: "Marluan03",
      password: "mystrongPassword",
    },
    {
      _id: new Types.ObjectId("507f191e810c19729de860eb"),
      name: "Erick",
      username: "Erick_34",
      password: "mystrongPassword",
    },
  ],
};

export default userDummy;
