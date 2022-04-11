import request from 'axios';
import { toast } from 'react-toastify';

import { ErrorType } from '../types/error';
import { HttpCode } from '../const';

export const errorHandle = (error: ErrorType): void => {
  if (!request.isAxiosError(error)) {
    throw error;
  }

  const {
    response,
    message,
  } = error;

  if (response) {
    switch (response.status) {
      case HttpCode.BAD_REQUEST:
        toast.info(response.data.error);
        break;
      case HttpCode.UNAUTHORIZED:
        toast.info(response.data.error);
        break;
      case HttpCode.NOT_FOUND:
        toast.info(response.data.error);
        break;
    }
  } else {
    toast.error(message);
  }
};
