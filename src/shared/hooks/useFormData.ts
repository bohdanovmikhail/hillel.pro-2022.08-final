import { useState } from 'react';

export type FormDataSet<Data extends {}, Key extends keyof Data = keyof Data> = (key: Key, value: Data[Key]) => void;
export type FormDataSetter<Data extends {}, Key extends keyof Data> = (value: Data[Key]) => void;
export type FormDataSetterCreator<Data extends {}> = <Key extends keyof Data>(key: Key) => FormDataSetter<Data, Key>;

export function useFormData<Data extends {}>(defaultData: Data): [Data, FormDataSetterCreator<Data>, FormDataSet<Data>] {
  const [data, setData] = useState<Data>(defaultData);

  return [
    data,
    (key) => (value) => setData({ ...data, [key]: value }),
    (key, value) => setData({ ...data, [key]: value }),
  ];
}
