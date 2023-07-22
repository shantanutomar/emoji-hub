import React from 'react';
import {TEmoji} from "../api/EmojiAPI";
import styled from "@emotion/styled";
import {Box} from "@mui/material";

type TEmojiProps = {
    emoji: TEmoji
}

const StyledEmoji = styled(Box)`
    font-size: 100px;
`
const Emoji = (props: TEmojiProps) => {

    const {emoji} = props
    return (
        <Box>
        <StyledEmoji
            role="img"
            aria-label={emoji.name ? emoji.name : ""}
            aria-hidden={props.emoji ? "false" : "true"}
            dangerouslySetInnerHTML={{__html: emoji.htmlCode[0]}}
        ></StyledEmoji>
        </Box>
    )
};
export default Emoji;