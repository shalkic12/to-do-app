import * as React from 'react';
import Box from '@mui/material/Box';
import {useState} from "react";

interface ContainerTodo{
    containertodo:string;

}

export default function BoxBasic(props:ContainerTodo) {
    const[item,newItem]=useState(props.containertodo)

    return (
        <Box component="section" sx={{ p: 2, border: '1px dashed grey' }}>
            {props.containertodo}
            {props.containertodo}
            {props.containertodo}
        </Box>
    );
}
