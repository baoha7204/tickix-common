import { NextFunction, Request, Response } from "express";
import { validationResult } from "express-validator";

import { RequestValidationError } from "../errors/request-validation-error";

export const requestValidation = async (
  req: Request,
  _: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    throw new RequestValidationError(errors.array());
  }
  next();
};
