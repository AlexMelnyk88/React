import React,{Component} from 'react';
import axios from 'axios';
import SearchBar from './SearchBar/SearchBar.js';
import ImageList from './ImageList.js';
import NotFound from './NotFound/NotFound.js';

class MainApp extends Component{
    
    state={ images: [], total: true };
    
 onSearchSubmit = async (items) => { 
  const response = await axios.get("https://api.unsplash.com/search/photos", {
        params:{query: items},
        headers:{
        Authorization: 'Client-ID 3222dhy64ewr425610b6662321dfddbf1773ad8fwk152d878jhj266'
       }
          
  });
     
     this.setState({ images: response.data.results, total: response.data.total });
    
}

 CheckResponce=()=>{
     if(this.state.images.length > 0){
         return <ImageList images={this.state.images}/>;
     }else if(this.state.total === 0) return <NotFound />;
 
 }
    render(){
         return(
             <React.Fragment> 
                 <SearchBar runSubmit={this.onSearchSubmit}/>
                 {this.CheckResponce()}
             </React.Fragment>  
         );
        }
    }
export default MainApp;