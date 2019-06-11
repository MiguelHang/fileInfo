import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import CheckmarkCircle from 'react-ionicons/lib/IosCheckmarkCircle'
import CloseCircle from 'react-ionicons/lib/IosCloseCircle'
import CircularProgress from '@material-ui/core/CircularProgress';
import fileInfoServices from './fileInfoServices'
  
  class File extends Component {
      
    constructor() {
        super();
        this.state = {
            file: {}
        }
    }
    
    componentDidMount(){
        fileInfoServices.getInfo(this.props.id).then( data => {
            console.log(data)
            if(data.code == 200){
                this.setState({file: data.blueprint})
            }else{
                this.setState({file: {
                        name:'Código no encontrado',
                        updated:'',
                        commentary:'',
                        creation_time:''
                    }
                })
            }
        })
    }

    render(){
        return(
            <Card style={{minWidth: 275, textAlign: 'center'}}>
                { this.state.file.name ?
                    <CardContent>
                    {this.state.file.updated ? <CheckmarkCircle fontSize="40%" color="green" /> : <CloseCircle fontSize="40%" color="red" />}
                    <Typography variant="h5" component="h2">
                        {this.state.file.name}
                    </Typography>
                    <Typography color="textSecondary">
                        Comentario
                    </Typography>
                    <Typography variant="body2" component="p">
                        {this.state.file.commentary}
                    </Typography>
                    <Typography color="textSecondary">
                        Creación
                    </Typography>
                    <Typography component="p">
                        {new Date(this.state.file.creation_time).toLocaleDateString()}
                    </Typography>
                </CardContent>
                :
                <CircularProgress style={{margin: '8px', width: '100px', height: '100px'}} color="secondary"/>
                }
                
            </Card>
        )
    }
    
} 

export default File;