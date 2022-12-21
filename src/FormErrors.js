function Errortext ({ formErrors }) {
    return(
        <div>
            {formErrors.name && <p style={{ color: "red"}}>{formErrors.name}</p>}
            {formErrors.surname && (
                <p style = {{ color: "red" }}>{formErrors.surname}</p>
            )}
            {formErrors.email && <p style={{ color: "red" }}>{formErrors.age}</p>}
            {formErrors.age && <p style = {{ color: "red" }}>{formErrors.age}</p>}
            {formErrors.gender && <p style = {{ color: "red" }}>{formErrors.gender}</p> }
        </div>
    )
}

export default Errortext