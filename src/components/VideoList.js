import React from 'react';

class VideoList extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            downloadUrl: ''
        }

        this.getDownloadLink = event => {
            console.log('We are here')
            console.log(event)
            this.setState({
                downloadUrl: event.target.value
            })
        }
    }
    render() {
        return (
            <div className="Video-List">
                <div>
                    <span><b>Quality</b></span>
                    <select onChange={this.getDownloadLink}>
                        <option defaultValue="quality">Choose Media Quality</option>
                        {
                            this.props.streams.map(video => <option key={video.fmt_id} value={video.url}>{video.format}</option>)
                        }
                    </select>
                </div>
                <span>
                    <a className="download-btn" href={this.state.downloadUrl}><i class="fa fa-download"></i>  Download</a>
                    <button disabled={true} >Save to Cloud</button>
                </span>
            </div>
        )
    }
}
export default VideoList;