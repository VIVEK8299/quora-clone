import React from 'react';
import './App.css';

function App() {
  return (
    <div className="container mt-2">
      <div class="row bg-secondary">
        <div className="col-md-8 mr-1 ml-5">
          <div className="d-flex flex-row">
            <div className="col-md-2 ">
              <img src="/images/n.jpg" className="float-left rounded" width="100px" height="100px" >
              </img>
            </div>
            <div className="align-self-center">
              <h4 >Name of user</h4>
              <p>Nickname</p>
            </div>
            {/* description */}
          </div>
            <p>Full Desc, links ETC.</p>
            <p>Full Desc, links ETC.</p>
            <p>Full Desc, links ETC.</p>
            <p>Full Desc, links ETC.</p>
            <p>Full Desc, links ETC.</p>
            <div>
              <button type="button" class="btn btn-outline-primary" onClick = "suggestion()">Follow</button>
              <script>function suggestion() 
                {
                  <ul class="list-group">
                    <li class="list-group-item">Someone and description</li>
                    <li class="list-group-item">Someone and description</li>
                    <li class="list-group-item">Someone and description</li>
                    <li class="list-group-item">Someone and description</li>
                    <li class="list-group-item">Someone and description</li>
                  </ul>
                }
              </script>
              <button type="button" class="btn btn-outline-primary">Notify Me</button>
              <button type="button" class="btn btn-outline-primary" onClick = "askquestion()"><a href = "#">Ask Question</a></button>
              <button type="button" onClick="something()"></button>
            </div>
        </div>
        {/* sidenav */}
        <div className="col-md-3">
          
          <ul class="list-group">
            <li class="list-group-item">
              <div className="d-flex">
                <div className="mr-auto"><p>Credential</p></div>
                <div><a href="#">More</a></div>
              </div>
            </li>
            <li class="list-group-item">Some Details or links</li>
            <li class="list-group-item">Some Details or links</li>
            <li class="list-group-item">Some Details or links</li>
            <li class="list-group-item">Some Details or links</li>
            <li class="list-group-item">Some Details or links</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;