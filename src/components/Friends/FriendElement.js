import React from 'react'
import {connect} from 'react-redux'
import {changeSelectedFiend} from '../../AC'


class FriendElement extends React.Component {

	    render(){
				const {element} = this.props


	        return (
              <div className='friendElement'>
                  <div>
                    <img className='friendAvatar' src={element.img} onClick={this.handleChangeFriend} />
                    <div className='friendPeronalData'>
                      <div className='friendName' onClick={this.handleChangeFriend} >
                        {element.firstName} {element.lastName}
                      </div>
                      <div className='friendStatus'>
                        {element.status}
                      </div>
											{element.tag  ? this.getFriendTeg(element.tag) : null }
                      <div className='sendMessages'>
                        Повідомлення
                      </div>
                    </div>
                  </div>
                  <div className='more'>
                    <img src='https://repl.it/public/images/loading_dots.gif' />
                  </div>
                </div>
          )


	    }

			handleChangeFriend = () => {
					const {element, changeSelectedFiend} = this.props
					changeSelectedFiend(element)

			}


			getFriendTeg = (tag) => {
				let classTag = ''
				let title = ''
				if (tag.length === 1) {
					switch (tag[0]) {
						case 'familyTag': classTag = tag[0]
															title = 'Родичі'
							break;
						case 'bestFriendTag':classTag = tag[0]
															title = 'Найкращий друг'
							break;

					}

				}else {
							return <div className='friendTag'><div className={tag[0]} >{tag[0] === 'familyTag' ? 'Родичі' : 'Найкращий друг'}</div><div className={tag[1]} >{classTag === 'familyTag' ? 'Родичі' : 'Найкращий друг'}</div></div>
				}

				return <div className='friendTag'><div className={classTag} >{classTag === 'familyTag' ? 'Родичі' : 'Найкращий друг'}</div></div>
			}



}


export default connect(null, {changeSelectedFiend})(FriendElement)
