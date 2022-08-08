import React from 'react';
import Tabs from '../../Tabs';
import ProfileBodyTabHeader from './ProfileBodyTabHeader';
import ProfileBodyAccount from './account/ProfileBodyAccount';
import ProfileBodyHistory from './history/ProfileBodyHistory';
import $ from '../../../style.js';


function ProfileBody(props) {
    return (
        <Tabs
            initialIndex={0}
            headersContainerStyle={[{height: 75}, $.priBg, $.priBR, $.flexR, $.px3]}
            activeHeaderStyle={{borderBottomWidth: 2, borderBottomColor: '#FAC32D'}}
            headers={[
                <ProfileBodyTabHeader title="Compte" />,
                <ProfileBodyTabHeader title="Historique" />
            ]}
        >
            <ProfileBodyAccount />
            <ProfileBodyHistory />
        </Tabs>
    );
}

export default ProfileBody;
