import React from 'react';
import '../css/SearchPage.css';
import TuneIcon from '@material-ui/icons/Tune';
import ChannelRow from '../Components/ChannelRow';
import VideoRow from '../Components/VideoRow';

function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneIcon />
                <h2>Filter</h2>
            </div>
            <hr />

            <ChannelRow
                image="https://scontent.fktm13-1.fna.fbcdn.net/v/t1.0-9/s960x960/89096996_1440883022749555_8710547182161231872_o.jpg?_nc_cat=102&_nc_sid=13bebb&_nc_ohc=jztfepo1T-kAX_tsxf2&_nc_ht=scontent.fktm13-1.fna&_nc_tp=7&oh=75e137baa2bfb4fb3800f2ddbafa71ad&oe=5F5BE562"
                channel="Sajan Kc"
                verified
                subs="1M"
                noOfVideos="500"
                description="You are awesome. you can find for interesting videos here. subscribe to the channel"
            />

            <hr />

            <VideoRow
                views="5.5M"
                subs="550k"
                description="Do you want to become a react developer. Follow me.."
                timestamp="59 seconds ago"
                channel="Sajan Kc"
                title="Become a React Developer in 2020"
                image="https://scontent.fktm13-1.fna.fbcdn.net/v/t1.0-9/s960x960/89448577_1440885039416020_6162216800521027584_o.jpg?_nc_cat=108&_nc_sid=13bebb&_nc_ohc=AXD84yWUJ0cAX9vws2w&_nc_ht=scontent.fktm13-1.fna&_nc_tp=7&oh=16fdace3e9cc73fb1c99d4b9cb028603&oe=5F5D86D9"
            />

            <VideoRow
                views="5.5M"
                subs="550k"
                description="Do you want to become a react developer. Follow me.."
                timestamp="59 seconds ago"
                channel="Sajan Kc"
                title="Hy hy hy hyyyyyy"
                image="https://scontent.fktm13-1.fna.fbcdn.net/v/t1.0-9/s960x960/90963880_1456823887822135_8246143393625800704_o.jpg?_nc_cat=100&_nc_sid=13bebb&_nc_ohc=gisuett0ZHUAX8sZ7kS&_nc_ht=scontent.fktm13-1.fna&_nc_tp=7&oh=27c35465e4dc60baa6bb902758c6da95&oe=5F5EE96E"
            />

            <VideoRow
                views="5.5M"
                subs="550k"
                description="Do you want to become a react developer. Follow me.."
                timestamp="59 seconds ago"
                channel="Sajan Kc"
                title="Whats up"
                image="https://scontent.fktm13-1.fna.fbcdn.net/v/t1.0-9/90528261_1452698928234631_2098410932223868928_n.jpg?_nc_cat=104&_nc_sid=dd9801&_nc_ohc=wKGwqOaWhikAX8CA4jg&_nc_ht=scontent.fktm13-1.fna&oh=ba175757b4fc2bd1f5fe19f99ccc2df6&oe=5F5B9232"
            />

            <VideoRow
                views="5.5M"
                subs="550k"
                description="Do you want to become a react developer. Follow me.."
                timestamp="59 seconds ago"
                channel="Sajan Kc"
                title="Hello world"
                image="https://scontent.fktm13-1.fna.fbcdn.net/v/t1.0-9/89404951_1440885029416021_3028223965433692160_n.jpg?_nc_cat=108&_nc_sid=13bebb&_nc_ohc=SZyOIwwa7dgAX92RimD&_nc_ht=scontent.fktm13-1.fna&oh=203ef002d6b7fb0071cd5eafcb6fcee1&oe=5F5C7924"
            />

        </div>
    )
}

export default SearchPage;