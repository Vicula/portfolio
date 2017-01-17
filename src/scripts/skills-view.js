const React = require('react');
const $ = require('jquery');


const SkillsView = React.createClass({


  render: function(){

    let testfun = function(){
      let test = $(this)
      console.log(test)
    }


    return(

      <div className="skillsBox">
          <div className="hexRowEven">
            <div onMouseOver={testfun}className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexA">
                    <span className="fa fa-database hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexB">
                    <span className="fa fa-rss hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexC">
                    <span className="fa fa-file-code-o hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexD">
                    <span className="fa fa-desktop hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexE">
                    <span className="fa fa-commenting hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexF">
                    <span className="fa fa-folder-open hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hexRowOdd">
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexG">
                    <span className="fa fa-object-group hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexD">
                    <span className="fa fa-share-alt hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexI">
                    <span className="fa fa-sitemap hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexB">
                    <span className="fa fa-tablet hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexG">
                    <span className="fa fa-th hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hexRowEven">
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexC">
                    <span className="fa fa-html5 hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexA">
                    <span className="fa fa-github-alt hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexE">
                    <span className="fa fa-css3 hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexF">
                    <span className="fa fa-coffee hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexB">
                    <span className="fa fa-stack-overflow hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexI">
                    <span className="fa fa-codepen hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

    )

  }
})



module.exports = SkillsView
