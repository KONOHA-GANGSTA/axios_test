import type { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

type Request<T> = {
  isLoading: boolean;
  isError: boolean;
  data: T | null;
};

const defaultRequest = {
  isLoading: false,
  isError: false,
  data: null,
};

export const useRequest = <T extends object>(
  req: () => Promise<AxiosResponse<any, any>>
) => {
  const [request, setRequest] = useState<Request<T>>(defaultRequest);
  useEffect(() => {
    setRequest({ isError: false, isLoading: true, data: null });
    req()
      .then((response) =>
        setRequest({ isError: false, isLoading: false, data: response.data })
      )
      .catch(() => setRequest({ isError: true, isLoading: false, data: null }));
  }, []);
  return request;
};
