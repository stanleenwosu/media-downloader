import React from 'react';

class VideoList extends React.Component {
    render() {
        return (
            <div className="Video-List">
                <div>
                    <span><b>Quality</b></span>
                    <select>
                        <option defaultValue="quality">Choose Media Quality</option>
                        {
                            this.props.streams.map(video => <option key={video.fmt_id} value={video.url}>{video.format}</option>)
                        }
                    </select>
                </div>
                <span>
                    <button>Download</button>
                    <button>Save to Cloud</button>
                </span>
            </div>
        )
    }
}
export default VideoList;