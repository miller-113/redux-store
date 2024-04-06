import { connect } from "react-redux";
import { increaseCounter } from '../store/actions/counter'

const Counter = ({
    counter: {counter},
    increaseCounter,
}) => {
    return (
        <div>
            <h3>Counter Section</h3>
            <button onClick={increaseCounter}>increase</button>
            <div>Counter : { counter }</div>
        </div>
    );
}

const mapStateProps = (state) => ({
    counter: state.counter
})


const mapDispatchToProps = (dispatch) => ({
    increaseCounter: (payload) => dispatch(increaseCounter(payload))
})

export default connect(mapStateProps, mapDispatchToProps)(Counter);