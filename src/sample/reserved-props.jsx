const ButtonWithChildren = (props) => (
  <button>
    {props.children}
  </button>
);

function SampleReservedProps() {
  return (
    <div>
      <ButtonWithChildren>
        <span>Le texte du bouton !</span>
      </ButtonWithChildren>
    </div>
  );
}

export default SampleReservedProps;
