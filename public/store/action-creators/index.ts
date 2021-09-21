import * as PlayerActionsCreators from './player'
import * as TrackActionsCreators from './tracks'

export default {
  ...PlayerActionsCreators,
  ...TrackActionsCreators
}