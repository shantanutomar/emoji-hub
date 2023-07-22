import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import {CardActionArea} from '@mui/material';
import {TEmoji} from "../api/EmojiAPI";
import Emoji from "./Emoji";
import styled from "@emotion/styled";

type TEmojiCardProps = {
    emoji: TEmoji
}
const StyledCardActionArea = styled(CardActionArea)`
    display: flex;
    justify-content: flex-start;
`

const StyledEmojiCard = styled(Card)`
    padding: 16px;
`

const EmojiCard = (props: TEmojiCardProps) => {
    const {emoji} = props

    return (
        <StyledEmojiCard>
            <StyledCardActionArea>
                <Emoji emoji={emoji} />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="div">
                        {emoji.name.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                         CATEGORY: {emoji.category.toUpperCase()}
                    </Typography>
                    <Typography variant="subtitle2" color="text.secondary">
                        GROUP: {emoji.group.toUpperCase()}
                    </Typography>
                </CardContent>
            </StyledCardActionArea>
        </StyledEmojiCard>
    );
}

export default EmojiCard;