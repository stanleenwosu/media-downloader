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
            streams: [],
            isDataAvailable: false,
            showSpinner: false
        };

        this.getMediaUrl = event => {
            this.setState({ url: event.target.value })
        }

        this.getMediaDetails = async () => {
            let url = this.state.url
            this.setState({ showSpinner: true })
            console.log(url)
            this.getDownloadUrl(url)
        }
    }


    getDownloadUrl(url) {
        fetch(`https://getvideo.p.rapidapi.com/?url=${url}`, {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "getvideo.p.rapidapi.com",
                "x-rapidapi-key": process.env.RAPID_API_KEY,
                "content-type": "application/json"
            }
        })
            .then(response => {
                response.json()
                    .then(data => {
                        console.log(data)
                        this.setState({
                            thumbnail: data.thumbnail,
                            streams: data.streams,
                            isDataAvailable: true
                        })
                    })
            })
            .catch(err => {
                console.log(err);
            });

    }

    checkIFDataIsAvailable() {
        if (this.state.isDataAvailable && this.state.showSpinner) {
            return (
                <div>
                    <MediaThumbnail source={this.state.thumbnail} />
                    <VideoList streams={this.state.streams} />
                </div>
            )
        }
        else if (this.state.showSpinner === true) {
            return (
                <div>
                    <img width="100px" height="100px" src="spinner.gif" alt="spinner"></img>
                    <p style={{ color: 'black' }}>Fetching Data</p>
                </div>
            )
        }
    }

    render() {
        return (
            <div>
                <div className="input-url" ><input type="text" placeholder="Enter Media URL" onChange={this.getMediaUrl} /></div>
                <div className="get-media">
                    <button id="get-media-btn" onClick={this.getMediaDetails}>Get Media</button>
                    {
                        this.checkIFDataIsAvailable()
                    }
                </div>
            </div>
        )
    }
}

export default GetMedia