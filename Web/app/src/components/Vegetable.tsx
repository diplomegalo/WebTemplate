import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import DatePicker from "react-datepicker";
import { Link, useParams } from "react-router-dom";

interface IVegetable {
    name: string;
    season: "Winter" | "Fall" | "Summer" | "Spring";
    startDate: Date;
    endDate: Date;
}

interface IVegetableRoute
{
    slug: string;
}

const Vegetable = () =>
{
    const dateFormat = "dd/MM/yyyy";
    const { slug } = useParams<IVegetableRoute>();

    const [vegetable, setVegetable] = React.useState<IVegetable>({
        endDate: new Date(),
        name: slug ?? "",
        season: "Fall",
        startDate: new Date(),
    });

    const handleDate = (date: Date | null, typeDate: "startDate" | "endDate") =>
    {
        setVegetable((prevState: IVegetable) => ({ ...prevState, [typeDate]: date }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        e.persist();
        // eslint-disable-next-line max-len
        setVegetable((prevState: IVegetable) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <h2>{vegetable.name === "" ? "Ajouter un nouveau légume" : vegetable.name }</h2>
            <div>
                <p>
                    <Link to="/vegetable/concombre">Concombre</Link>
                </p>
                <p>
                    <Link to="/vegetable/tomate">Tomate</Link>
                </p>
            </div>
            <Form>
                <Form.Group>
                    <Form.Label>
                        Nom :
                        <Form.Control
                            type="text"
                            placeholder="Ex : Tomate"
                            name="name"
                            value={vegetable.name}
                            onChange={handleChange}
                        />
                    </Form.Label>
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Date de début :
                                <DatePicker
                                    className="form-control"
                                    dateFormat={dateFormat}
                                    name="startDate"
                                    selected={vegetable.startDate}
                                    onChange={(date) => handleDate(date, "startDate")}
                                />
                            </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Date de fin :
                                <DatePicker
                                    className="form-control"
                                    dateFormat={dateFormat}
                                    name="endDate"
                                    selected={vegetable.endDate}
                                    onChange={(date) => handleDate(date, "endDate")}
                                />
                            </Form.Label>
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>
                                Saison :
                                <Form.Control as="select" custom>
                                    <option>Eté</option>
                                    <option>Automne</option>
                                    <option>Hiver</option>
                                    <option>Printemps</option>
                                </Form.Control>
                            </Form.Label>
                        </Form.Group>
                    </Col>
                </Form.Row>
                <Button variant="link">Annuler</Button>
                <Button variant="primary">Ajouter</Button>
            </Form>
        </>
    );
};

export default Vegetable;
