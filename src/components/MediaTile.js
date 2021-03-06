import React from "react";
import { Card, CardText, CardHeader } from 'material-ui/Card';

class MediaTile extends React.Component {
  handleClick = () => {
    this.props.onClick(this.props.media);
  }
  render () {
    return (
      <Card className="representativeTile"
             onClick={this.handleClick}>
        <CardHeader
          title={this.props.media.name}
          avatar={this.props.media.img} />
        <CardText>
          {this.props.media.desc}
        </CardText>
      </Card>
    );
  }
}

export default MediaTile;
