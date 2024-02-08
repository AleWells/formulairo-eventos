import { useState } from "react";
import { TextField, Typography, FormGroup, MenuItem, FormControlLabel, Checkbox } from "@mui/material";
import styles from './ItemForm.module.css';

export default function ItemForm({ item, onChange }) {
  const { label, type, options } = item;
  const [selectedValue, setSelectedValue] = useState("");
  const [checkedOptions, setCheckedOptions] = useState({});

  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);
    onChange(label, event.target.value); // Llamar al onChange pasado por props para actualizar el estado del formulario
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckedOptions((prevOptions) => ({
      ...prevOptions,
      [name]: checked,
    }));
    onChange(label, { ...checkedOptions, [name]: checked }); // Llamar al onChange pasado por props para actualizar el estado del formulario
  };

  const getItem = () => {
    switch (type) {
      case "email":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <TextField
              id={label}
              type="email"
              name={label}
              variant="outlined"
              className={styles["text-field"]}
              onChange={(event) => onChange(label, event.target.value)} // Llamar al onChange pasado por props para actualizar el estado del formulario
            />
          </div>
        );
      case "text":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <TextField
              id={label}
              type="text"
              name={label}
              variant="outlined"
              className={styles.textfield}
              onChange={(event) => onChange(label, event.target.value)} // Llamar al onChange pasado por props para actualizar el estado del formulario
            />
          </div>
        );
      case "select":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <FormGroup>
              <TextField
                id={label}
                select
                value={selectedValue}
                name={label}
                variant="outlined"
                className={styles.selectfield}
                onChange={handleSelectChange}
              >
                {options.map((value) => (
                  <MenuItem key={value} value={value}>
                    {value}
                  </MenuItem>
                ))}
              </TextField>
            </FormGroup>
          </div>
        );
      case "check":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label}>{label}</label>
            <FormGroup>
              {options.map((option) => (
                <FormControlLabel
                  name={option}
                  key={option}
                  control={<Checkbox checked={checkedOptions[option] || false} onChange={handleCheckboxChange} />}
                  label={option}
                />
              ))}
            </FormGroup>
          </div>
        );
      case "title":
        return (
          <Typography variant="h6" component="h5" className={styles.title}>
            {label}
          </Typography>
        );
      case "fecha":
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <TextField
              id={label}
              type="date"
              name={label}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              className={styles.datefield}
              onChange={(event) => onChange(label, event.target.value)} // Llamar al onChange pasado por props para actualizar el estado del formulario
            />
          </div>
        );
      case 'number':
        return (
          <div className={styles.itemformcontainer}>
            <label className={styles.label} htmlFor={label}>{label}</label>
            <TextField
              id={label}
              type='number'
              name={label}
              variant="outlined"
              InputLabelProps={{
                shrink: true,
              }}
              className={styles.datefield}
              onChange={(event) => onChange(label, event.target.value)} // Llamar al onChange pasado por props para actualizar el estado del formulario
            />
          </div>
        );
      default:
        return <p>No se encontró el tipo</p>;
    }
  };

  return getItem();
}
