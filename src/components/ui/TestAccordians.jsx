import React,{useState} from 'react'
import { makeStyles,withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import {DropzoneDialog} from 'material-ui-dropzone'
import SaveIcon from '@material-ui/icons/Save';
import ImageIcon from '@material-ui/icons/Image';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(18),
      fontWeight:"bold",
      margin:"auto"
    }
  }));

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      '&$checked': {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);
  

const TestAccordians = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [passChecked, setPassChecked] = useState(true);
    const [failChecked, setFailChecked] = useState(false);
    const [open, setopen] = useState(false)
    const [files, setfiles] = useState([])



    const handleSave = (files) =>{
        setfiles(files)
        setopen(false)
    }





    const handlePassBoxChange = (event) => {
        setPassChecked(event.target.checked);
        setFailChecked(!event.target.checked);
      };

    const handleFailBoxChange = (event) => {
        setFailChecked(event.target.checked);
        setPassChecked(!event.target.checked);
    };
    

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
    };
    return (
        <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>Core cutter method or sand replacement method for relative compaction</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant = "body1">
                Pass <span>
                <GreenCheckbox checked={passChecked} onChange={handlePassBoxChange} name="checkedG" />
                </span>
            </Typography>
            <Typography variant = "body1">
                Fail <span>
                <Checkbox
                checked={failChecked}
                onChange={handleFailBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                </span>
            </Typography>
            <Button variant="contained" color="secondary" onClick={()=>setopen(true)} style={{marginRight:"1rem",marginLeft:"2rem"}}
            startIcon={<ImageIcon />} >
                  Add Image {files ? `(${files.length} added)` : null}
            </Button>

            <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
                  Save and Upload
            </Button>

            <DropzoneDialog
                open={open}
                onSave={handleSave}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5242880}
                onClose={()=>setopen(false)}
                showFileNamesInPreview={true}
            />
        </AccordionDetails>
      </Accordion>
    )
}

export default TestAccordians
