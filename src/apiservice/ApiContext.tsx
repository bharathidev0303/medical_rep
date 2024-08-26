// src/contexts/ApiContext.tsx
import React, { createContext, useContext, useState, ReactNode } from 'react';
import { getData, postData, modifyData, removeData } from './ApiService';

export interface getReq {
  baseURL?: string,
  endpoint: string,
  qaury?: any,
  header?: any
}

export interface postReq {
  baseURL?: string,
  endpoint: string,
  data: any,
  qaury?: any,
  header?: any
}





interface ApiContextType {
  fetchData: (data: getReq) => Promise<any>;
  sendData: (data: postReq) => Promise<any>;
  updateData: (ata: postReq) => Promise<any>;
  deleteData: (ata: postReq) => Promise<any>;
  loading: boolean;
  error: Error | null;
}

const defaultContextValue: ApiContextType = {
  fetchData: async () => Promise.reject('Function not implemented'),
  sendData: async () => Promise.reject('Function not implemented'),
  updateData: async () => Promise.reject('Function not implemented'),
  deleteData: async () => Promise.reject('Function not implemented'),
  loading: false,
  error: null,
};

const ApiContext = createContext<ApiContextType>(defaultContextValue);

interface ApiProviderProps {
  children: any;
}

export const ApiProvider: React.FC<ApiProviderProps> = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<Error | null>(null);

  const fetchData = async (req: getReq) => {
    setLoading(true);
    setError(null);
    try {
      const data = await getData(req);
      return data;
    } catch (err) {
      setError(err as Error);
      // throw err;
    } finally {
      setLoading(false);
    }
  };

  const sendData = async (req: postReq) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await postData(req);
      return responseData;
    } catch (err) {
      setError(err as Error);
      // throw err;
    } finally {
      setLoading(false);
    }
  };
  const updateData = async (req: postReq) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await modifyData(req);
      return responseData;
    } catch (err) {
      setError(err as Error);
      // throw err;
    } finally {
      setLoading(false);
    }
  };
  const deleteData = async (req: postReq) => {
    setLoading(true);
    setError(null);
    try {
      const responseData = await removeData(req);
      return responseData;
    } catch (err) {
      setError(err as Error);
      // throw err;
    } finally {
      setLoading(false);
    }
  };

  return (
    <ApiContext.Provider value={{ fetchData, sendData, updateData, deleteData, loading, error }}>
      {children}
    </ApiContext.Provider>
  );
};

export const useApi = () => useContext(ApiContext);
