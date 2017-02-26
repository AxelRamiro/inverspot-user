import React, { Component } from 'react'

class CardProfile extends Component {
  render() {
    return (
      <div className="col-lg-3 col-md-3 hidden-sm hidden-xs">
        <div className="panel panel-default">
          <div className="panel-body">
            <div className="media">
              <div className="media-body">
                <hr/>
                <h3><strong>Ubicación</strong></h3>
                <p>{this.props.user.state}</p>
                <h3><strong>Genero</strong></h3>
                <p>Unknown</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CardProfile;
