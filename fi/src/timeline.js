import React from 'react'
import Timeline from 'react-native-timeline-flatlist'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
  } from 'react-native'

export default class Timelinee extends React.Component {
    /*
    static propTypes = {
        id: PropTypes.string.isRequired,
        mood: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        clearVotes: PropTypes.number.isRequired,
        cloudsVotes: PropTypes.number.isRequired,
        drizzleVotes: PropTypes.number.isRequired,
        rainVotes: PropTypes.number.isRequired,
        thunderVotes: PropTypes.number.isRequired,
        snowVotes: PropTypes.number.isRequired,
        windyVotes: PropTypes.number.isRequired,
        tooltipOpen: PropTypes.bool.isRequired,
        dispatch: PropTypes.func.isRequired
    };
*/
    constructor(props) {
        super(props);
        this.data = [
            {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
            {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
            {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
            {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
            {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
          ]
        //this.handleTooltipToggle = this.handleTooltipToggle.bind(this);
        //this.handleVote = this.handleVote.bind(this);
    }

    render() {
        return(
            <Timeline style={styles.Timeline}
              //..other props
              circleSize={20}
              circleColor='rgb(45,156,219)'
              lineColor='rgb(45,156,219)'
              timeContainerStyle={{minWidth:52, marginTop: -5}}
              timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
              descriptionStyle={{color:'gray'}}
              options={{
                style:{paddingTop:5}
              }}
              data={this.data}
              innerCircle={'dot'}
            />
        )
        
    }
/*
    handleTooltipToggle() {
        this.props.dispatch(toggleTooltip(this.props.id));
    }

    handleVote(vote) {
        const {dispatch, id} = this.props;
        dispatch(createVote(id, vote)).then(() => {
            dispatch(setToast('Voted.'));
        });
        dispatch(setTooltipToggle(id, false));
    }*/
}

/*
 * When styling a large number of components, use StyleSheet.
 * StyleSheet makes it possible for a component to refer to a style object by ID
 * instead of creating a new style object every time.
 */

const styles = StyleSheet.create({
    Timeline: {
        margin: 40,
        justifyContent:"center",
    
      },

    /*
    listItem: {
        flexDirection: 'column',
        alignItems: 'stretch',
        marginLeft: 0
    },
    post: {
        flexDirection: 'row',
        alignItems: 'flex-start'
    },
    mood: {
        width: 48,
        marginLeft: 12,
        marginRight: 8,
        top: 12,
        alignItems: 'center'
    },
    moodIcon: {
        color: appColors.text,
        fontSize: 32
    },
    wrap: {
        flex: 1
    },
    ts: {
        color: appColors.textLight
    },
    text: {
        fontSize: 17,
        fontFamily: (Platform.OS === 'ios') ? 'System' : 'Roboto',
        color: appColors.text,
        marginTop: 4,
        marginBottom: 4
    },
    vote: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    voteResult: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 4
    },
    voteResultIcon: {
        fontSize: 17,
        color: appColors.textLight,
        marginRight: 2
    },
    voteResultText: {
        fontSize: 17,
        color: appColors.textLight
    },
    votePlus: {
        fontSize: 24,
        top: 2,
        color: appColors.textLight
    },
    tooltip: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: appColors.mask
    },
    tooltipIcon: {
        fontSize: 24,
        color: appColors.primaryText,
        marginHorizontal: 12
    }*/
});
/*
export default connect((state, ownProps) => ({
    tooltipOpen: state.postItem.tooltipOpen[ownProps.id] ? true : false
}))(PostItem);
*/