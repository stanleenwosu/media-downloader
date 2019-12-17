import React from 'react'
import MediaFile from './MediaFile'
import VideoList from './VideoList'
import '../App.css';


class GetFile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            thumbnail: 'https://via.placeholder.com/300',
            streams: []
        };

        this.getUrl = event => {
            this.setState({ url: event.target.value })
        }

        this.getFile = async () => {
            let url = this.state.url
            console.log(url)
            this.getDownloadUrl(url)
        }
    }


    getDownloadUrl(url) {
        fetch(`https://getvideo.p.rapidapi.com/?url=${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "getvideo.p.rapidapi.com",
                "x-rapidapi-key": "f6203620e3msh3f3fa75e3687e56p147403jsn0426e9607de2",
                "content-type": "application/json"
            }
        })
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data)
                        this.setState({
                            thumbnail: data.thumbnail,
                            streams: data.streams
                        })
                    })
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div>
                <input className="input-url" type="text" onChange={this.getUrl} />
                <div className="Get-file">
                    <button onClick={this.getFile}>Get Media</button>
                    <VideoList streams={this.state.streams} />
                    <MediaFile source={this.state.thumbnail} />
                </div>
            </div>
        )
    }
}

export default GetFile