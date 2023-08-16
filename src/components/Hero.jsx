import React from "react";
import './css/hero.css'
import {Button} from "@material-ui/core";

export function Hero() {
    return (
        <div className={'hero'}>
            <div className={'hero_info'}>
                <h1>
                    Get out and stretch your imagination
                </h1>
                <h5>
                    Plan a different kind of getaway
                    to uncover the hidden gems
                    near you.
                </h5>
                <Button variant={'outlined'}>
                    Explore Nearby
                </Button>
            </div>

        </div>
    )
}

export default Hero