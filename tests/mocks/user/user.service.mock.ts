import { jest } from '@jest/globals';
import { IUser, UserDocument } from 'src/models';
import { MockFunction } from '../type_mock_function';

//type MockFunction<T extends (...args: any) => any> = jest.MockedFunction<T>;


export interface MockUserService<T> {
  getById: MockFunction<(id: string) => Promise<IUser>>;
  getAllPaginate: MockFunction<(pageSize: number, pageNum: number) => Promise<IUser[]>>;
  createEntity: MockFunction<(entity: T) => Promise<any>>;
  updateEntity: MockFunction<(id: string, data: any) => Promise<IUser>>;
  deleteById: MockFunction<(id: string) => Promise<boolean>>;
  getByUserName: MockFunction<(username: string) => Promise<IUser>>;
}

export const UserServiceMock: MockUserService<UserDocument> = {
  getById: jest.fn(),
  getAllPaginate: jest.fn(),
  createEntity: jest.fn(),
  updateEntity: jest.fn(),
  deleteById: jest.fn(),
  getByUserName: jest.fn(),
};