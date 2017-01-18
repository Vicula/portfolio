const React = require('react');
const $ = require('jquery');


const SkillsView = React.createClass({

  hoveringFun: function(hexagon){
    console.log(hexagon)

    if(hexagon.target.className === "center"){
      let crntDiv = hexagon.target
      let crntClass = crntDiv.children[0].children[0].children[0]
      console.log(crntClass.className)

      let daClass = crntClass.className
      let showClass = " showingHex"
      // crntClass =+ " showingHex"
      crntClass.className = daClass + showClass
      // console.log("it ran")

    } else if(hexagon.target.className === "desc"){
      let daDiv = hexagon.target
      let daClass = daDiv.parentElement
    }
  },

  componentDidMount: function(){
      let self = this;
      // console.log(self.refs.hex1)

      self.refs.hex1.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex2.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex3.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex4.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex5.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex6.addEventListener("mouseover", self.hoveringFun)

      self.refs.hex21.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex22.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex23.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex24.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex25.addEventListener("mouseover", self.hoveringFun)

      self.refs.hex31.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex32.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex33.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex34.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex35.addEventListener("mouseover", self.hoveringFun)
      self.refs.hex36.addEventListener("mouseover", self.hoveringFun)

  },


  render: function(){


    // let self = this;
    // console.log(self)
    //
    //
    // self.refs.hex1.onHover(self.hoveringFun)

    // let testTest = function(dom){
    //
    //
    //   if(dom.target.className === "desc"){
    //
    //   }
    // }

    return(

      <div className="skillsBox">
          <div className="hexRowEven">
            <div className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexA">
                    <span className="fa fa-database hexIcon" aria-hidden="true"></span>
                    <div ref="hex1" className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
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
                    <div ref="hex2" className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex3" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexC">
                    <span className="fa fa-file-code-o hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex4" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexD">
                    <span className="fa fa-desktop hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex5" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexE">
                    <span className="fa fa-commenting hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex6" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexF">
                    <span className="fa fa-folder-open hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hexRowOdd">
            <div ref="hex21" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexG">
                    <span className="fa fa-object-group hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex22" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexD">
                    <span className="fa fa-share-alt hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex23" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexI">
                    <span className="fa fa-sitemap hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex24" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexB">
                    <span className="fa fa-tablet hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2>Advanced Databasing</h2>
                      <p>I'm really good at it</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex25" className="center">
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
            <div ref="hex31" className="center">
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
            <div ref="hex32" className="center">
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
            <div ref="hex33" className="center">
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
            <div ref="hex34" className="center">
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
            <div ref="hex35" className="center">
              <div className="hexagon">
                <div className="hex1">
                  <div className="hex2 hexD">
                    <span className="fa fa-stack-overflow hexIcon" aria-hidden="true"></span>
                    <div className="desc">
                      <h2></h2>
                      <p></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div ref="hex36" className="center">
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
