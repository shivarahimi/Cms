import { API } from './../api/api';
import { useMutation } from 'react-query';

const getStatement = async (value: any) => {
  return await API.post("/api/Statement/GetStatement", value);
};

export const GetStatement = () => {
  return useMutation(getStatement);
};
