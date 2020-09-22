import React from 'react';

import { Field, Form, Formik, FormikProps } from 'formik';
let states = ["Alaska",
    "Alabama",
    "Arkansas",
    "American Samoa",
    "Arizona",
    "California",
    "Colorado",
    "Connecticut",
    "District of Columbia",
    "Delaware",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Iowa",
    "Idaho",
    "Illinois",
    "Indiana",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Massachusetts",
    "Maryland",
    "Maine",
    "Michigan",
    "Minnesota",
    "Missouri",
    "Mississippi",
    "Montana",
    "North Carolina",
    " North Dakota",
    "Nebraska",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "Nevada",
    "New York",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Virginia",
    "Virgin Islands",
    "Vermont",
    "Washington",
    "Wisconsin",
    "West Virginia",
    "Wyoming"]
function Volunteer(props) {


    return (<div>



        <Formik

            initialValues={{ state: 'Alaska', }}

            onSubmit={(values, actions) => {

                setTimeout(() => {

                    alert(JSON.stringify(values, null, 2));

                    actions.setSubmitting(false);

                }, 1000);

            }}


        >

            {() => (

                <>


                    <label >
                        Select your state
            <Field as="select" name="state">




                            {states.map((e, index) => {
                                return <option key={index} value={e}>{e}</option>
                            })}

                        </Field>
                    </label>

                </>








            )}

        </Formik>

    </div>
    )

};

export default Volunteer