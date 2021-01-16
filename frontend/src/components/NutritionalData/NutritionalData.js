import React from 'react';
import axios from 'axios';
import {Card,CardBody,CardTitle,CardText} from 'reactstrap'

class NutritionalData extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: props.title,
            ingr: props.ingr
        };
    }

    componentDidMount() {
        console.log(this.state.title, this.state.ingr);

        const body = {
            title : this.state.title,
            ingr: this.state.ingr
        }

        axios.post('/nutritionalinfo', body).then((response) => {
            console.log(response.data);
            this.setState({
                nutritiondata : response.data
            });
        })
    }

    render() {
        return (
            <div class = "container">
                <h3 className='display-4'>Nutritional Information:</h3>
                {this.state.nutritiondata.map((info, index) => (
                    <div key={index}>
                    <Card>
                      <CardBody>
                        <CardText>
                            Uri: {info.uri}
                            Yield: {info.yield}
                            Calories: {info.calories}
                            DietLabel: {info.dietlabels}
                            HealthLabel: {info.healthLabels}
                            Cautions: {info.cautions}
                            TotalNutrients: {info.totalNutrients}
                        </CardText>
                      </CardBody>
                    </Card>
                    <br></br>
                  </div>
                  
                ))}
            </div>
        )
    }
}

export default NutritionalData;