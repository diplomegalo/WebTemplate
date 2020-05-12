import React from "react";
import Form from "react-bootstrap/esm/Form";
import Button from "react-bootstrap/esm/Button";
import Col from "react-bootstrap/esm/Col";
import DatePicker from "react-datepicker";

interface IVegetable {
    name?: string;
    season: "Winter" | "Fall" | "Summer" | "Spring";
    startDate: Date;
    endDate: Date;
}

const Vegetable = () =>
{
    const dateFormat = "dd/MM/yyyy";

    const [vegetable, setVegetable] = React.useState<IVegetable>({
        endDate: new Date(),
        name: "",
        season: "Fall",
        startDate: new Date(),
    });

    const handleDate = (date: Date | null, name: "startDate" | "endDate") =>
    {
        setVegetable((prevState: IVegetable) => ({ ...prevState, [name]: date }));
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    {
        e.persist();
        // eslint-disable-next-line max-len
        setVegetable((prevState: IVegetable) => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    return (
        <>
            <h2>Ajouter un nouveau légume</h2>
            <Form>
                <Form.Group>
                    <Form.Label>Nom :</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Ex : Tomate"
                        name="name"
                        value={vegetable.name}
                        onChange={handleChange}
                    />
                </Form.Group>
                <Form.Row>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date de début :</Form.Label>
                            <DatePicker
                                className="form-control"
                                dateFormat={dateFormat}
                                name="startDate"
                                selected={vegetable.startDate}
                                onChange={(date) => handleDate(date, "startDate")}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Date de fin : </Form.Label>
                            <DatePicker
                                className="form-control"
                                dateFormat={dateFormat}
                                name="endDate"
                                selected={vegetable.endDate}
                                onChange={(date) => handleDate(date, "endDate")}
                            />
                        </Form.Group>
                    </Col>
                    <Col>
                        <Form.Group>
                            <Form.Label>Saison :</Form.Label>
                            <Form.Control as="select" custom>
                                <option>Eté</option>
                                <option>Automne</option>
                                <option>Hiver</option>
                                <option>Printemps</option>
                            </Form.Control>
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
