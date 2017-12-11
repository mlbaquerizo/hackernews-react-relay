import React, { Component } from 'react'
import {
	createFragmentContainer,
	graphql
} from 'react-relay'
import { GC_USER_ID } from '../constants'
import { timeDifferenceForDate } from '../utils'

class Link extends Component {
	render() {
		const userId = localStorage.getItem(GC_USER_ID)
		return (
			<div className='flex mt2 items-start'>
				<div className='flex items-center'>
					<span className='gray'>{this.props.index + 1}.</span>
					{userId && <div className='ml1 gray f11' onClick={() => this._voteForLink()}>▲</div>}
				</div>
				<div className='ml1'>

					<div>{this.props.link.description} ({this.props.link.url})</div>
					<div className='f6 lh-copy gray'>{this.props.link.votes.count} votes | by {this.props.postedBy ? this.props.link.postedBy.name : 'Unknown'} {timeDifferenceForDate(this.props.link.createdAt)}</div>
				</div>
			</div>
		)
	}

	_voteForLink = async () => {

	}
}

export default createFragmentContainer(Link, graphql`
	fragment Link_link on Link {
		id
		description
		url
		createdAt
		postedBy {
			id
			name
		}
		votes {
			count
		}
	}
`)