import React from 'react';
import { Table } from 'antd';

const dataSource = {
  iterator: [
    {
      key: '1',
      property: 'paginateArr',
      description: 'returns the currentIndex of the array passed in props to children. When the animation is completed, the currentIndex is updated and returned. Automatically cycles through the array provided given the time frame.',
      type: 'array',
      default: '(Optional)'
    },
    {
      key: '2',
      property: 'seconds',
      description: 'speed of the animation from start to completion',
      type: 'number',
      default: '(Optional)'
    }
  ],
  revolve: [
    {
      key: '1',
      property: 'percent',
      description: 'passed as a prop from ProgressIterator component',
      type: 'number',
      default: 'Required'
    },
    {
      key: '2',
      property: 'diameter',
      description: `diameter of the outer circle to be created. Inner circle's diameter is proportional to the diameter set here.`,
      type: 'number',
      default: '30'
    },
    {
      key: '3',
      property: 'strokeWidth',
      description: 'width of the stroke that revolves around each circle. Helps determine radius.',
      type: 'number',
      default: '2'
    },
    {
      key: '4',
      property: 'color',
      description: 'color of the stroke',
      type: 'string',
      default: '#05F7EC',
    },
    {
      key: '5',
      property: 'outlineColor',
      description: 'color of stationary circle',
      type: 'string',
      default: 'Color Props'
    },
    {
      key: '6',
      property: 'showOutline',
      description: 'pass prop to set to true. Stationary circle will be made visible.',
      type: 'boolean',
      default: 'false'
    },
    {
      key: '7',
      property: 'sync',
      description: 'pass prop to set to true. Aligns the start of the animation with the top of the page.',
      type: 'boolean',
      default: 'false'
    },
    {
      key: '8',
      property: 'genesis',
      description: 'pass prop to set to true, a special variation of the animation.',
      type: 'boolean',
      default: 'false'
    },
    {
      key: '9',
      property: 'flash',
      description: 'pass prop to set to true, whether or not the inner circle will appear filled when animation is at 90% and 94% completed.',
      type: 'boolean',
      default: 'false'
    },
    {
      key: '10',
      property: 'lg',
      description: 'pass prop to set to true, diameter is set to 40.',
      type: 'string',
      default: '(Optional)'
    }
  ]
}

const columns = [
  {
    title: 'Property',
    dataIndex: 'property',
    key: 'property'
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description'
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type'
  },
  {
    title: 'Default',
    dataIndex: 'default',
    key: 'default'
  }
];

const apiTable = ({ table }) => {
  return <Table
  dataSource={(() => {
    if (table === 'revolve') return dataSource.revolve;
    return dataSource.iterator;
  })()}
  columns={columns}
  pagination={false}
  />
};

export default apiTable;