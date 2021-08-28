import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardHeader from '@material-ui/core/CardHeader';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { red } from '@material-ui/core/colors';
import CardActions from '@material-ui/core/CardActions';
import { Link } from "react-router-dom";
import FavoriteIcon from '@material-ui/icons/Favorite';
import Badge from '@material-ui/core/Badge';
import CommentIcon from '@material-ui/icons/Comment';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: 160,
    },
    avatar: {
        backgroundColor: red[500],
    },
}));

export default function Articles() {
    const classes = useStyles();
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            const response  = await fetch('https://dev.to/api/articles?username=omarmorales');
            const articlesData = await response.json();
            setArticles(articlesData);
        }
        fetchArticles();
    }, []);

    

    return (
        <React.Fragment>
            <Container className={classes.root}>
                My Articles
                <Grid container spacing={3}>
                    {
                        articles.map(article => 
                            <Grid key={article.id} item xs={12} sm={6} md={4}>
                                <Card>
                                    <CardHeader
                                        avatar={
                                            <Avatar aria-label="recipe" src={article.user.profile_image} />
                                        }
                                        action={
                                            <IconButton aria-label="settings">
                                                <MoreVertIcon />
                                            </IconButton>
                                        }
                                        title={article.title}
                                        subheader={article.readable_publish_date}
                                    />
                                    <CardActionArea
                                        component={Link}
                                        to={{ pathname: article.url }}
                                        target="_blank"
                                    >
                                        <CardMedia
                                            className={classes.media}
                                            image={article.social_image}
                                        />
                                    </CardActionArea>
                                    <CardActions disableSpacing>
                                        <IconButton aria-label="reactions" disabled>
                                            <Badge badgeContent={article.public_reactions_count} color="error">
                                                <FavoriteIcon />
                                            </Badge>
                                        </IconButton>
                                        <IconButton aria-label="reactions" disabled>
                                            <Badge badgeContent={article.comments_count} color="error">
                                                <CommentIcon />
                                            </Badge>
                                        </IconButton>
                                    </CardActions>
                                </Card>
                            </Grid>
                        )
                    }
                </Grid>
            </Container>
        </React.Fragment>
    )
}
