import React from 'react'
import MediaThumbnail from './MediaThumbnail'
import VideoList from './VideoList'
import '../App.css';


class GetMedia extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            url: '',
            thumbnail: '',
            streams: []
        };

        this.getMediaUrl = event => {
            this.setState({ url: event.target.value })
        }

        this.getMediaDetails = async () => {
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
                <div className="input-url" ><input type="text" placeholder="Enter Media URL" onChange={this.getMediaUrl} /></div>
                <div className="get-media">
                    <button id="get-media-btn" onClick={this.getMediaDetails}>Get Media</button>
                    <MediaThumbnail source={this.state.thumbnail} />
                    <VideoList streams={this.state.streams} />
                </div>
            </div>
        )
    }
}

export default GetMedia