require('../../sass/groupList.scss');
import React from 'react';
import Immutable from 'immutable';
import Unicode from '../temp/unicode.js';

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        // console.log(props);
    }

    componentWillMount() {
        
    }

    shouldComponentUpdate(nextProps) {
        let
        isList = Immutable.is(this.props.data, nextProps.data);
        if( isList ) {
            return false;
        }
        return true;
    }

    render() {
        let List = this.props.data;
        List = List.map( (v, i) => {
            let name = Unicode.toHex(v.name),
                dec = Unicode.toHex(v.description),
                cname = Unicode.toHex(v.cname),
                summary = Unicode.toHex(v.summary),
                icon = 'url('+ v.icon +')',
                users = v.users,
                usersName = [],
                isMember = v.isMember === 0 ? ['', '+ 加入'] : ['active', '已加入'];
            summary = summary || cname;
            users = users.splice(0, 5);
            for(let i = 0, l = users.length; i < l; i++) {
                usersName.push(Unicode.toHex(users[i].nickname));
            }
            usersName = usersName.join('、');
            return (
                <div key={v.tid} data-tid={v.tid} className="groupList-unit">
                    <div className="groupList-head">
                        <div className="groupList-img" style={{backgroundImage: icon}}></div>
                        <div className="groupList-msg">
                            <div className="groupList-mainInfo">
                                <div className="groupList-name">{name}</div>
                                <span className="groupList-tag">{summary}</span>
                            </div>
                            <div className="groupList-info">
                                {dec}
                            </div>
                        </div>
                    </div>
                    <div className="groupList-px">
                        <div className="groupList-radius"></div>
                    </div>
                    <div className="groupList-body">
                        <div className="groupList-num">{users.length}个成员</div>
                        <div className="groupList-member">
                            {usersName}
                        </div>
                        <div className={'groupList-join ' + isMember[0]}>{isMember[1]}</div>
                    </div>
                </div>
            )
        });

        return (
            <div id="groupList">
                {List}
            </div>
        );
    }
}