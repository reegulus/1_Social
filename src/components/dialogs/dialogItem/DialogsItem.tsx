import React from "react";
import style from "./DialogsItem.module.css";
import {NavLink} from "react-router-dom";

type DialogsItemPropsType = {
    id: number
    name: string
}

export function DialogsItem(props: DialogsItemPropsType) {
    return (
        <div className={`${style.dialog} ${style.active}`}>
            <NavLink to={'/dialogs/' + props.id }>{props.name}</NavLink>
        </div>
    )
}