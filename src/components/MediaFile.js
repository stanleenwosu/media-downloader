import React from 'react'

class MediaFile extends React.Component {

    render() {
        return (
            <div className="Media-file">
                <img alt='video thumbnail' src={this.props.source} width='500px' height='300px'></img>
                <span>
                    <button>Download</button>
                    <button>Save to Cloud</button>
                </span>
            </div>
        )
    }
}


export default MediaFile
