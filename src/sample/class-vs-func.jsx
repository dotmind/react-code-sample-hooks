import { Component } from 'react';

class SampleClass extends Component {
  render() {
    return <p>Class component</p>;
  }
}

function SampleFunc() {
  return <p>Function component</p>;
}

function SampleClassVsFunc() {
  return (
    <div>
      <SampleClass />
      <SampleFunc />
    </div>
  );
}

export default SampleClassVsFunc;
