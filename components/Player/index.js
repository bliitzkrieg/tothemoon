function Player({ playing = false, children }) {
  return playing ? <React.Fragment>{ children }</React.Fragment> : null;
}

export default Player
