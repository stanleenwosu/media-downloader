import React from 'react';

class VideoList extends React.Component {
    render() {
        return (
            <div>
                <select>
                    {
                        this.props.streams.map(video => <option key={video.fmt_id} value={video.url}>{video.format}</option>)
                    }
                </select>
            </div>
        )
    }
}
export default VideoList;