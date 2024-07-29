import { jest } from '@jest/globals';

export type MockFunction<T extends (...args: any) => any> = jest.MockedFunction<T>;
