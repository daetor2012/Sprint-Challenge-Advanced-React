import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

function Cards(props) {
    return(
        <div>
            <Card>
                <CardBody>
                    <CardTitle>Name: {props.name}</CardTitle>
                    <CardSubtitle>Searches: {props.searches}</CardSubtitle>
                    <CardText>Country of origins: {props.country}</CardText>
                </CardBody>
            </Card>
        </div>
    )
}

export default Cards;