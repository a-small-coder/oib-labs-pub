import React from 'react';
import { Card, Checkbox, FormControlLabel, FormGroup } from '@material-ui/core'

function SettingsCard(props) {
    
    const checkboxState = props.checked
    const settingsList = props.settingsList
    const settingsElements = settingsList.map((el, i) => (
        <FormControlLabel key={el.id}
            control={<Checkbox
                id={`${i}`}
                checked={checkboxState[i]}
                onChange={props.handleChange}
                inputProps={{ 'aria-label': 'controlled' }}
            />}
            label={el.label} />
    ))

    return (
        <Card sx={{p: 4, m: 2, maxWidth: "320px", flex: "1 1 240px"}}>
            <FormGroup>
                {settingsElements}
            </FormGroup>
        </Card>
    );
}

export default SettingsCard;