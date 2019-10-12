import React from 'react';
import CameraPhoto from '../lib'
import './styles.css';

class PhotoCapture extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.cameraPhoto = null;
  }

  componentDidMount() {
    // We need to instantiate CameraPhoto inside componentDidMount because we
    // need the refs.video to get the videoElement.
    this.cameraPhoto = new CameraPhoto(this.refs.video, this.refs.clickImg);

  }

  startCamera(idealFacingMode, idealResolution) {
    this.cameraPhoto.startCamera(idealFacingMode, idealResolution)
      .then(() => {
        console.log('camera is started !');
      })
      .catch((error) => {
        console.error('Camera not started!', error);
      });
  }

  getDataUri(sizeFactor) {
    return this.cameraPhoto.getDataUri(sizeFactor);
  }

  stopCamera() {
    this.cameraPhoto.stopCamera()
      .then(() => {
        console.log('Camera stoped!');
      })
      .catch((error) => {
        console.log('No camera to stop!:', error);
      });
  }

  takePhoto() {
    let imgElement = document.getElementById('imgId');
    this.cameraPhoto.takePhoto(imgElement)
  }


  render() {
    return (
      <div>
        <div>
          <button onClick={() => {
            let facingMode = 'ENVIRONMENT';
            let idealResolution = { width: 300, height: 300 };
            this.startCamera(facingMode, idealResolution);
          }}> Start</button>
          <span>    </span>
          <button onClick={() => {
            this.takePhoto();
          }}> Click </button>
          <span>    </span>
          <button onClick={() => {
            this.stopCamera();
          }}> Stop </button>
        </div>
        <div>
          <video
            ref="video"
            autoPlay="true"
          />
        </div>
        <div>
          <img id="imgId" alt="" src="" ref="clickImg" />
        </div>
      </div>
    );
  }
}

export default PhotoCapture;
