import { useRef } from "react";

import { connect } from "react-redux";
import { setTitle } from "../store/actions/title";

const TitleComp = ({
  title: {title},
  setTitle
}) => {
  const inputRef = useRef()

  return (
      <div>
          <h1>{ title }</h1>
          <h3>Set title section</h3>
          <input ref={inputRef}></input>
          <button onClick={() => setTitle(inputRef.current.value)}>Change title</button>
      </div>
  );
}

const mapStateToProps = (state) => ({
  title: state.title
})

const mapDispatchToProps = (dispatch) => ({
  setTitle: (payload) => dispatch(setTitle(payload))
})

export default connect(mapStateToProps, mapDispatchToProps)(TitleComp)