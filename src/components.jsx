import SampleState from './sample/state';
import SampleProps from './sample/props';
import SampleClassVsFunc from './sample/class-vs-func';
import SampleHooks from './sample/hooks';

const components = [
  {
    hash: 'sample/state',
    render: () => <SampleState />,
  },
  {
    hash: 'sample/props',
    render: () => <SampleProps />,
  },
  {
    hash: 'sample/class-vs-func',
    render: () => <SampleClassVsFunc />,
  },
  {
    hash: 'sample/hooks',
    render: () => <SampleHooks />,
  },
];

export default components;
