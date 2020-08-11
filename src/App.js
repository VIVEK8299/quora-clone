import React from 'react';
import './App.css';

function App() {
  var style = {
    fontSize:12
  }
  var circle = {
    borderRadius:50
  }
  return (
    <div className="container mt-2">
      <div className="row" >
        <div className="col-md-8 mr-1 ml-5">
          <div className="d-flex flex-row">
            <div className="col-md-2 pl-0">
              <img style = {circle} src="/images/n.jpg" className="" width="100px" height="100px" ></img>
            </div>
            <div className="align-self-center">
              <h4 >Name of user</h4>
              <p>Nickname</p>
            </div>
          </div>
          {/* description */}
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <div>
            <button type="button" className="btn btn-outline-primary">Follow</button>
            <button type="button" className="btn btn-outline-primary">Notify Me</button>
            <button type="button" className="btn btn-outline-primary " data-toggle="modal" data-target="#myModal">Ask Question</button>
            <img className="float-right" src="/images/more.png" width="20px" height="20px"></img>
          </div>
          <div id="myModal" className="modal fade" role="dialog">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <button type="button" className="close" data-dismiss="modal">&times;</button>
                  <h4 className="modal-title">  </h4>
                </div>
                <div className="modal-body">
                  <p>Some text in the modal.</p>
                </div>
                <div className="modal-footer">
                  <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                </div>
              </div>
            </div>
          </div>
          <hr/>
          <div class="btn-group" role="group" aria-label="Button group with nested dropdown">
            <button type="button" class="btn btn-secondary">Profile</button>
            <button type="button" class="btn btn-secondary">Answers</button>
            <button type="button" class="btn btn-secondary">Questions</button>
            <button type="button" class="btn btn-secondary">Shares</button>
            <button type="button" class="btn btn-secondary">Posts</button>
            <button type="button" class="btn btn-secondary">Followers</button>
            <button type="button" class="btn btn-secondary">Following</button>

            <div class="btn-group" role="group">
              <button id="btnGroupDrop1" type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                More
              </button>
              <div class="dropdown-menu" aria-labelledby="btnGroupDrop1">
                <a class="dropdown-item" href="#">Edits</a>
                <a class="dropdown-item" href="#">Activity</a>
              </div>
            </div>
          </div>
          <hr/>

          <div className="d-flex flex-row">
            <div className="col-md-1 pl-0">
              <img style = {circle} src="/images/n.jpg" className="" width="50px" height="50px" ></img>
            </div>
            <div className="align-self-center">
              <h6>Name of user</h6>
              <p style = {style}>Nickname</p>
            </div>
          </div>

          <p>hello</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>
          <p>Full Desc, links ETC.</p>

          <div className="d-flex flex-row">
            <img style = {circle} src="/images/upload.png" className="mr-4" width="20px" height="20px" ></img>
            <img style = {circle} src="/images/refresh.png" className="mr-4" width="20px" height="20px" ></img>
            <img style = {circle} src="/images/com.png" className="" width="20px" height="20px" ></img>
          </div>

        </div>
        {/* sidenav */}
        <div className="col-md-3">

          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex">
                <div className="mr-auto"><p>Credential</p></div>
                <div><a href="#">More</a></div>
              </div>
            </li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex">
                <div className="mr-auto"><p>Spaces</p></div>
              </div>
            </li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
          </ul>
          <ul className="list-group">
            <li className="list-group-item">
              <div className="d-flex">
                <div className="mr-auto"><p>Knows About</p></div>
              </div>
            </li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
            <li className="list-group-item">Some Details or links</li>
          </ul>
        </div>
      </div>

    </div>
  );
}

export default App;