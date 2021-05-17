import React from 'react';
import { withRouter } from 'react-router-dom';


class Path extends React.Component{
    constructor(props){
        super(props)

        this.state = {
            done_path: [],
            current_page: this.props.location.pathname
        }

    }

    changePage = (path) =>{
        let all_path = this.state.current_page
        let true_path;

        path = path.toLowerCase()

        // if path === 'Home' redirect to home page
        if(path === 'Home'){
            this.props.history.push('/am')
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


    path = () =>{
        let all_pats = this.state.current_page.split('/')
        let true_paths = []

        all_pats.splice(0, 1)

        all_pats.unshift('home')

        if(all_pats[1] === 'filter'){
            all_pats.splice(1, 1)
        }

        for (let i = 0; i < all_pats.length; i++) {
            let path = all_pats[i]  // Слово.
            let new_path = path[0].toUpperCase() + path.slice(1);   // Слово с заглавной первой буквой. 

            new_path = new_path.replace(/\-/g, ' ')    // Заменяются все символы '-' на ' '
            true_paths.push(new_path)
        }

        this.setState({
            done_path: true_paths
        })
    }


    componentWillReceiveProps(){
        setTimeout(()=>{
            this.setState({
                current_page: this.props.location.pathname
            })
            this.path()
        })

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