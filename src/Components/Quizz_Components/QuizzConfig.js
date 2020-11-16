import React, { useState } from "react";
import { Form } from "react-bootstrap";
import Quizz from "../Quizz";

export default function QuizzConfig() {
  const [start, setStart] = useState(false);
  const [value, setValue] = useState(3);

  return (
    <div>
      {start ? (
        <div>
          {" "}
          {/* <h3>Vous pouvez ici configurez votre quizz</h3> */}
          <Quizz categorie={"Le coran"} />{" "}
        </div>
      ) : (
        <>
          <div className="container">
            <div style={{ height: 500 }} className="row ">
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <h6 >
                  Pour commencer le Quizz merci de configurer les options
                  suivantes : la difficulté, le nombre de question (En cour de
                  développement ...)
                </h6>
              </div>
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-center">
                <Form>
                  <Form.Group controlId="formNasicRange">
                    <Form.Label>
                      Nombre de série (10 questions par série)
                    </Form.Label>
                    <Form.Control
                      onChange={(e) => setValue(e.target.value)}
                      type="range"
                      min="0"
                      max="10"
                      step="1"
                      value={value}
                      style={{ color: "purple" }}
                    />
                    <p>Questions : {value * 10}</p>
                  </Form.Group>

                  <Form.Label
                    className="my-1 mr-2"
                    htmlFor="inlineFormCustomSelectPref"
                  >
                    Difficulté
                  </Form.Label>
                  <Form.Control
                    as="select"
                    className="my-1 mr-sm-2"
                    id="inlineFormCustomSelectPref"
                    custom
                  >
                    <option value="0">Facile</option>
                    <option value="1">Moyen</option>
                    <option value="2">Intermédiaire</option>
                    <option value="3">Difficile</option>
                    <option value="3">Expert</option>
                  </Form.Control>

                  <p style={{marginTop: 25}} className="text-center">Choix catégorie :</p>

                  {["checkbox"].map((type) => (
                    <div key={`inline-${type}`} className="mb-3">
                      <Form.Check
                        inline
                        label="Toutes"
                        type={type}
                        id={`inline-${type}-1`}
                      />
                      <Form.Check
                        inline
                        label="coran"
                        type={type}
                        id={`inline-${type}-2`}
                      />

                      <Form.Check
                        inline
                        label="ramadan"
                        type={type}
                        id={`inline-${type}-3`}
                      />
                      <Form.Check
                        inline
                        label="prière"
                        type={type}
                        id={`inline-${type}-4`}
                      />

                    </div>
                  ))}

                </Form>
              </div>
              <div className="col-12 col-md-12 d-flex justify-content-center align-items-start">
                <button
                  onClick={() => setStart(true)}
                  className="btn btn-primary"
                >
                  Lancer mon Quizz
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
