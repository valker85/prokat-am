import React from 'react';
import { withRouter } from 'react-router-dom';


class Path extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            done_path: []
        }

        this.current_page = this.props.location.pathname
    }


    path = () =>{
        let pathname = this.current_page
        let new_pathname = ['Home'];

        let pos = pathname.indexOf('/', 0)
        let all_positions = [0]

        // GET '/' positions
        for (let i = 0; i < pathname.length; i++) {
            if(pos === -1 || pos === 0){
            } else{
                if(all_positions.indexOf(pos) === -1){
                    all_positions.push(pos)
                }
            }
            pos = pathname.indexOf('/', pos+1)
        }

        // push path in new_pathname
        for (let i = 0; i < all_positions.length; i++) {
            let path = pathname.slice(all_positions[i], all_positions[i+1]).slice(1)
            let bukva = path[0].toUpperCase()

            path = path.replace(path[0], bukva)
            
            new_pathname.push( path )
        }

        this.setState({
            done_path: new_pathname
        })
    }




    changePage = (path) =>{
        let all_path = this.current_page
        let true_path;

        path = path.toLowerCase()

        // if path === 'Home' redirect to home page
        if(path === 'Home'){
            this.props.history.push('/')
        }

        // find path start and end
        let start = all_path.indexOf(path, 0)
        let end;

        all_path.indexOf('/', start) === -1 
        ? end = all_path.length 
        : end = all_path.indexOf('/', start)

        // get true path
        true_path = all_path.slice(0, end)

        // redirect
        this.props.history.push(true_path)
    }




    componentDidMount(){
        this.path()
    }

    render(){
        return(
            <div className='path'>
                <div className='container160'>
                    <ul>
                        {
                            this.state.done_path.map((path, idx)=>{
                                return(
                                    <li key={idx} onClick={this.changePage.bind(null, path)}>{path}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }
}

export default withRouter(Path)