
//
const REACT_APP_ENV = window._env_?.REACT_APP_ENV ?? process.env.REACT_APP_ENV;

/**
 * 
 * @returns 
 */
function App() {

  function showWindowObject() {
    console.log(window);
  }

  function showWindowEnv() {
    console.log(window._env_);
  }

  return (
    <div className="container">
      <div className="row">
        <div className="one-half column">
          <h4>{REACT_APP_ENV}</h4>
          <p>You are running this application in <b>{REACT_APP_ENV}</b> mode.</p>
          <hr />
          <button type="button" onClick={showWindowEnv}>showWindowEnv</button>
          <button type="button" onClick={showWindowObject}>showWindowObject</button>
        </div>
      </div>
    </div>
  );
}
export default App;
