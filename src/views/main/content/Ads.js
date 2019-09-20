import React, { Component } from 'react';
import Ads1 from "./images/ads-1.webp";
import Ads2 from "./images/ads-2.webp";
import './ads.css';
import Slider from "react-slick";
import "../../../../node_modules/slick-carousel/slick/slick.css";
import "../../../../node_modules/slick-carousel/slick/slick-theme.css";


class Ads extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 300,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000
          };
        return (
            <div className='main-ads container'>
                <div className='row title'>
                    <div className='col-xl-3'></div>
                    <div className='col-xl-6'>
                        <h2>Chào mừng đến với Zalo Pc</h2>
                        <p>Khám phá những tiện ích hỗ trợ làm việc và trò chuyện cùng ngưới thân, bạn bè được tối ưu hóa cho máy tính của bạn!</p>
                    </div>
                    <div className='col-xl-3'></div>
                </div>
                <div className='row'>
                    <div className='col-xl-3'></div>
                    <Slider {...settings} className='col-xl-6'>
                        <div className='ads-width'>
                            <img className='ads' src={Ads1} alt='Ads 1'></img>
                        </div>
                        <div className='ads-width'>
                            <img className='ads' src={Ads1} alt='Ads 1'></img>
                        </div>
                        <div className='ads-width'>
                            <img className='ads' src={Ads1} alt='Ads 1'></img>
                        </div>
                    </Slider>
                    <div className='col-xl-3'></div>
                </div>
            </div>
        );
    }
}

export default Ads;