import React,{Component} from 'react';

class ImgComponent extends Component{
     constructor(){
         super();
      this.imageRef = React.createRef();
      this.state={ span: 0 }
  }
    
componentDidMount(){
 this.imageRef.current.addEventListener('load', this.ElementsLoading)
   
}    
    ElementsLoading=()=>{
    const height = Math.ceil(this.imageRef.current.clientHeight/10);
    this.setState({ span: height})
        
    }    
    
    render(){
        const { description, urls } = this.props.images;
        return(
                <div style={{ gridRowEnd: `span ${this.state.span}`}}>
                    <img src={urls.regular} alt={description} ref={this.imageRef}/>
                </div>
        );
    }
    
} 
export default ImgComponent;