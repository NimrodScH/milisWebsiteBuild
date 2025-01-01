function RootHeadline(props: { firstH1: string; secondH1: string }) {
  return (
    <h1 className="home-text10 Heading1">
      <span>
        {props.firstH1}
        <br></br>
      </span>
      <span className="home-text12 Heading2">{props.secondH1}</span>
      <span></span>
    </h1>
  );
}

export default RootHeadline;
