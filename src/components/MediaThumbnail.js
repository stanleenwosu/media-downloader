import React from 'react'

class MediaThumbnail extends React.Component {

    render() {
        return (
            <div className="Media-file">
                <img alt='video thumbnail' src={this.props.source} width='500px' height='300px'></img>
            </div>
        )
    }
}


export default MediaThumbnail
