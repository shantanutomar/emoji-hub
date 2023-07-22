import React, {useMemo} from 'react';
import {Grid} from "@mui/material";
import styled from '@emotion/styled'
import {TEmoji} from "../api/EmojiAPI";
import EmojiCard from "./EmojiCard";

type TEmojisListProps = {
    emojis: TEmoji[]
}

const StyledEmojisGrid = styled(Grid)`
    padding: 20px;
`
const EmojisList = (props: TEmojisListProps) => {
    const {emojis} = props

    const renderEmojis = useMemo(() => {
        return emojis.map((emoji) => {
            return (
                <Grid item sm={12} md={6} lg={4} key={`${emoji.name}-${emoji.htmlCode[0]}`}>
                    <EmojiCard emoji={emoji}/>
                </Grid>
            )
        })
    }, [emojis])

    return (
        <StyledEmojisGrid container rowSpacing={4} columnSpacing={4}>
            {renderEmojis}
        </StyledEmojisGrid>
    );
}

export default EmojisList;
