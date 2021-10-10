function App(props) {
    return (
        <div className="two col-4">
        <img src="./images/icon-work.svg" />
        <div className="info">
        Work
        5hrs
        {/* <!-- daily --> */}
        Previous - 7hrs
        {/* <!-- daily --> */}
        32hrs
        {/* <!-- weekly --> */}
        Previous - 36hrs
        {/* <!-- weekly --> */}
        103hrs
        {/* <!-- monthly --> */}
        Previous - 128hrs
        {/* <!-- monthly --> */}
</div>
      </div>
    );
}


ReactDOM.render(<App />, document.getElementById('root'));