require('../../sass/groupList.scss');
import React from 'react';

import Unicode from '../temp/unicode.js';

export default class GroupList extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    componentWillMount() {

    }

    render() {
        let List = this.props.data;
        List = List.map( (v, i) => {
            let name = Unicode.toHex(v.name),
                dec = Unicode.toHex(v.description),
                cname = Unicode.toHex(v.cname),
                summary = Unicode.toHex(v.summary),
                users = v.users,
                isMember = v.isMember === 0 ? ['', '+ 加入'] : ['active', '已加入'];
            summary = summary || cname;
            // console.log(name);
            // console.log(dec);
            // console.log(cname);
            // console.log(summary);

            return (
                <div key={v.tid} data-tid={v.tid} className="groupList-unit">
                    <div className="groupList-head">
                        <div className="groupList-img"><img src={v.icon} /></div>
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
                            <span>圆圆、</span>
                            <span>吹吹、</span>
                            <span>小鱼儿、</span>
                            <span>杜拉拉、</span>
                            <span>鱼刺、</span>
                            <span>神奇宝贝、</span>
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

// <div className="groupList-unit">
//     <div className="groupList-head">
//         <div className="groupList-img"><img src="../img/headImg@1x.png" /></div>
//         <div className="groupList-msg">
//             <div className="groupList-mainInfo">
//                 <div className="groupList-name">谁动了我的奶酪</div>
//                 <span className="groupList-tag">我司官方</span>
//             </div>
//             <div className="groupList-info">
//                 发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫
//             </div>
//         </div>
//     </div>
//     <div className="groupList-px">
//         <div className="groupList-radius"></div>
//     </div>
//     <div className="groupList-body">
//         <div className="groupList-num">1280个成员</div>
//         <div className="groupList-member">
//             <span>圆圆、</span>
//             <span>吹吹、</span>
//             <span>小鱼儿、</span>
//             <span>杜拉拉、</span>
//             <span>鱼刺、</span>
//             <span>神奇宝贝、</span>
//         </div>
//         <div className="groupList-join">+ 加入</div>
//     </div>
// </div>
//
// <div className="groupList-unit">
//     <div className="groupList-head">
//         <div className="groupList-img"><img src="../img/headImg@1x.png" /></div>
//         <div className="groupList-msg">
//             <div className="groupList-mainInfo">
//                 <div className="groupList-name">谁动了我的奶酪</div>
//                 <span className="groupList-tag">我司官方</span>
//             </div>
//             <div className="groupList-info">
//                 发数据库繁华落尽第三方好好发挥拉斯科啊绝色赌妃来看哈三菱电机反悔拉克丝大姐夫
//             </div>
//         </div>
//     </div>
//     <div className="groupList-px">
//         <div className="groupList-radius"></div>
//     </div>
//     <div className="groupList-body">
//         <div className="groupList-num">1280个成员</div>
//         <div className="groupList-member">
//             <span>圆圆、</span>
//             <span>吹吹、</span>
//             <span>小鱼儿、</span>
//             <span>杜拉拉、</span>
//             <span>鱼刺、</span>
//             <span>神奇宝贝、</span>
//         </div>
//         <div className="groupList-join">+ 加入</div>
//     </div>
// </div>
