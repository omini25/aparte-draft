import React, {useState} from "react";
import './css/Header.css'
import {Search} from "@mui/icons-material";
import {ExpandMore, Public} from "@material-ui/icons";
import {Avatar} from "@mui/material";
import {Button} from "@material-ui/core";
import {Picker} from "./Picker";
export function Header() {
    const [showPicker, setShowPicker] = useState(false);
    return (
        <div className={'header'}>
            <img className={'header_icon'}
                 src={'https://getaparte.ng/assets/images/logo.png'}
                 alt={'Aparte-Logo'}
            />

            <div className={'header_search'}>

                <div className={'date_picker'}>
                    {showPicker && <Picker />}

                    <Button onClick={() => setShowPicker(!showPicker)} className='date_picker' variant='outlined'>
                        {showPicker ? "Hide" : "Search Dates"}
                    </Button>
                </div>

                <input type={'text'}/>
                <Search />
            </div>

            <div className={'header_right'}>
                <p>List on Aparte</p>
                <Public />
                <ExpandMore />
                <Avatar />
            </div>

        </div>
    )
}