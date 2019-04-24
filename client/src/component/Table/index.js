import React from 'react';
import { Table, Tag } from 'antd';

const dataSource = {
  iterator: [
    {
      key: '1',
      property: 'paginateArr',
      description: 'returns the currentIndex of the array passed in props to children. When the animation is completed, the currentIndex is updated and returned. Continuously cycles through the indices of the array provided. Useful for Pagination.',
      type: 'array',
      component: ['ProgressIterator'],
      default: '(Optional)'
    },
    {
      key: '2',
      property: 'seconds',
      description: 'speed of the animation from start to completion',
      type: 'number',
      component: ['ProgressIterator'],
      default: '(Optional)'
    }
  ],
  animation: [
    {
      key: '1',
      property: 'percent',
      description: 'passed as a prop from ProgressIterator component',
      type: 'number',
      component: ['Revolve', 'Basic', 'Hazard'],
      default: 'Required'
    },
    {
      key: '2',
      property: 'diameter',
      description: `diameter of the outer circle to be created. Inner circle's diameter is proportional to the diameter set here.`,
      type: 'number',
      component: ['Hazard', 'Basic', 'Revolve'],
      default: '30'
    },
    {
      key: '3',
      property: 'strokeWidth',
      description: 'width of the stroke that revolves around each circle. Helps determine radius.',
      type: 'number',
      component: ['Basic', 'Revolve', 'Hazard'],
      default: '2'
    },
    {
      key: '4',
      property: 'color',
      description: 'color of the stroke',
      type: 'string',
      component: ['Revolve', 'Hazard', 'Basic'],
      default: '#05F7EC',
    },
    {
      key: '5',
      property: 'outlineColor',
      description: 'color of stationary circle',
      type: 'string',
      component: ['Revolve', 'Basic', 'Hazard'],
      default: 'color prop'
    },
    {
      key: '6',
      property: 'showOutline',
      description: 'pass prop to set to true. Stationary circle will be made visible.',
      type: 'boolean',
      component: ['Hazard', 'Basic', 'Revolve'],
      default: 'false'
    },
    {
      key: '7',
      property: 'sync',
      description: 'pass prop to set to true. Aligns the start of the animation with the top of the page.',
      type: 'boolean',
      component: ['Revolve', 'Hazard'],
      default: 'false'
    },
    {
      key: '8',
      property: 'genesis',
      description: 'pass prop to set to true, a special variation of the animation.',
      type: 'boolean',
      component: ['Revolve'],
      default: 'false'
    },
    {
      key: '9',
      property: 'flash',
      description: 'pass prop to set to true, whether or not the inner circle will appear filled when animation is at 90% and 94% completed.',
      type: 'boolean',
      component: ['Revolve'],
      default: 'false'
    },
    {
      key: '10',
      property: 'lg',
      description: 'pass prop to set to true, diameter is set to 40.',
      type: 'string',
      component: ['Hazard', 'Revolve'],
      default: '(Optional)'
    },
    {
      key: '11',
      property: 'strokeOpacity',
      description: 'used for setting the opacity of the animation.',
      type: 'Float (0 - 1)',
      component: ['Basic'],
      default: '0.7'
    }
  ]
}

const columns = [
  {
    title: 'Property',
    dataIndex: 'property',
    key: 'property',
    render: property => <span style={{color: 'blue', fontSize: '16px', fontWeight: 'bold'}}>{property}</span>,
  }, {
    title: 'Description',
    dataIndex: 'description',
    key: 'description',
    render: description => <span style={{fontWeight: 'bold'}}>{description}</span>,
  }, {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
    render: type => <span style={{color: 'red'}}>{type}</span>,
  },
  {
    title: 'Component',
    dataIndex: 'component',
    key: 'component',
    render: components => (
      <span>
        {components.map(component => {
          let color;
          if (component === 'ProgressIterator') color = 'green';
          if (component === 'Revolve') color = 'geekblue';
          if (component === 'Hazard') color = 'gold';
          if (component === 'Basic') color = 'volcano';
          return <Tag color={color} key={component}>{component}</Tag>;
        })}
      </span>
    )
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
    if (table === 'revolve' || table === 'hazard' || table === 'genesis' || table === 'basic') return dataSource.animation;
    return dataSource.iterator;
  })()}
  columns={columns}
  pagination={false}
  />
};

export default apiTable;