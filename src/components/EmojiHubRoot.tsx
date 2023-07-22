import React, {useCallback, useEffect} from 'react';
import {Box, CircularProgress, Grid, Typography} from "@mui/material";
import styled from '@emotion/styled'
import {EmojiAPI, TEmoji} from "../api/EmojiAPI";
import EmojisList from "./EmojisList";

const StyledBox = styled(Box)`
  display: flex;
  justify-content: center;
  padding: 21px;
  box-shadow: 0 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12);
`
const StyledCircularProgress = styled(CircularProgress)`
  margin-left: 50%;
  margin-top: 15%;
  height: 50px;
  width: 50px;
`

const EmojiHubRoot = () => {

    const [emojis, setEmojis] = React.useState<TEmoji[]>([])
    const [loading, setLoading] = React.useState<boolean>(false)

    const getAllEmojis = useCallback(async () => {
        return await EmojiAPI.getAllEmojis()
    }, [])

    useEffect(() => {
        setLoading(true)
        getAllEmojis().then((response) => {
            setEmojis(response)
            setLoading(false)
        }).catch((error) => {
            console.log(error)
            setLoading(false)
        })
    }, [getAllEmojis])

    console.log(emojis)

    return (
        <Grid>
            <StyledBox>
                <Typography variant="h3">
                    EMOJI HUB
                </Typography>
            </StyledBox>
            {!loading && emojis.length > 0 && <EmojisList emojis={emojis} />}
            {loading && <StyledCircularProgress />}
        </Grid>
    );
}

export default EmojiHubRoot;
