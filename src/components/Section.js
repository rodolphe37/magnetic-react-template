import React from 'react';
import { Route, Link, BrowserRouter as Router } from "react-router-dom";
import ExplodingModal from './explodingModal/ExplodingModal';
import './explodingModal/explodingModal.scss'

const Section = () => {
  return (
    <section className="main clearfix">
    <Router>
      <div className="work">
        <a>
          <img src={require("../assets/img/work1.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart"><Link to="/inner" className="selected">culpa qui officia deserunt mollit</Link></div>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work2.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart">culpa qui officia deserunt mollit</div>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work3.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart">culpa qui officia deserunt mollit</div>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work4.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart">culpa qui officia deserunt mollit</div>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work5.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
            <Link to="/inner">
              <div className="modal_restart">
                <div className="button_restart">culpa qui officia deserunt mollit</div>
              </div>
            </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work6.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart">culpa qui officia deserunt mollit</div>
                </div>
              </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work2.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
              <Link to="/inner">
                <div className="modal_restart">
                  <div className="button_restart">culpa qui officia deserunt mollit</div>
                </div>
            </Link>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work3.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
            <ul>
            <Link to="/inner">
              <div className="modal_restart">
                <div className="button_restart">culpa qui officia deserunt mollit</div>
              </div>
          </Link>
            </ul>
            </div>
          </div>
        </a>
      </div>
      <div className="work">
        <a>
          <img src={require("../assets/img/work1.jpg")} className="media" alt="" />
          <div className="caption">
            <div className="work_title">
            <ul>
            <Link to="/inner">
              <div className="modal_restart">
                <div className="button_restart">culpa qui officia deserunt mollit</div>
              </div>
          </Link>
            </ul>
            </div>
          </div>
        </a>
      </div>
      <Route path="/inner" component={ExplodingModal} />
      </Router>
    </section>

  )
}
export default Section;

