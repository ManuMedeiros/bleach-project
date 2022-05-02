import React from "react";
import * as S from "./styles"
import Image from 'next/image'

import logo from '../../assets/logoBleach.jpg'

const Logo = () => {
    return (
        <div>
            <Image src={logo} alt='logo'/>
        </div>
    )
}

export default Logo;