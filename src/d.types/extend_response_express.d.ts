import { Response } from 'express';

declare global {
  namespace Express {
    interface Response {
      sendMcacheResponse?: Response['send'];//mismo type ql send original de Response
    }
  }
}
