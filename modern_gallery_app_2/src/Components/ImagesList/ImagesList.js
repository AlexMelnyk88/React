import React,{Component} from 'react';
import { GridList, GridListTile  } from '@material-ui/core/';
import Zoom from 'react-thumbnail-zoom';
class ImagesList extends Component{
  
  render(){
        return (
          <GridList cols={5} >
              {this.props.images.map(image => (
            <GridListTile key={image.id} title={image.tags}>
              <Zoom>
                <img src={image.webformatURL} alt={image.photo}  />
              </Zoom>
            </GridListTile>
            ))}
        </GridList>
        )
    }
}
export default ImagesList;