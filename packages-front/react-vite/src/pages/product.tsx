import { useEffect, useState } from 'react';
import { Table } from 'antd';
import type { TableProps } from 'antd';
import request from '../request';

interface DataType {
  name: string;
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
];

export default function Product() {
  const [data, setData] = useState([]);

  useEffect(() => {
    request('/v1/product').then((res) => {
      setData(res.data);
    });
  }, []);

  return <Table columns={columns} dataSource={data} rowKey="id" />;
}
