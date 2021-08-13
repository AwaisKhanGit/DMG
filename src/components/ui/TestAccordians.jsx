import React,{useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Checkbox from '@material-ui/core/Checkbox';
import {DropzoneDialog} from 'material-ui-dropzone'

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: '33.33%',
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
  }));
  

const TestAccordians = () => {

    const classes = useStyles();
    const [expanded, setExpanded] = useState(false);
    const [passChecked, setPassChecked] = useState(true);
    const [failChecked, setFailChecked] = useState(false);
    const [open, setopen] = useState(false)
    // eslint-disable-next-line 
    const [files, setfiles] = useState([])


    const handleClose = ()=>{
        setopen(false)
    }

    const handleSave = (files) =>{
        setfiles(files)
        setopen(false)
    }

    const handleOpen = () => {
        setopen(true)
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
          <Typography className={classes.secondaryHeading}>Core cutter method or sand replacement method for relative compaction</Typography>
        </AccordionSummary>
        <AccordionDetails>
            <Typography variant = "body1">
                Pass <span>
                <Checkbox
                checked={passChecked}
                onChange={handlePassBoxChange}
                inputProps={{ 'aria-label': 'primary checkbox' }}
                />
                </span>
            </Typography>
            <Typography variant = "body1">
                Fail <span>
                <Checkbox
                checked={failChecked}
                onChange={handleFailBoxChange}
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
                </span>
            </Typography>
            <Button onClick={handleOpen} variant="outlined" style={{marginRight:"1rem",marginLeft:"2rem"}}>
                  Add Image
            </Button>

            <Button variant="outlined">
                  Submit
            </Button>

            <DropzoneDialog
                open={open}
                onSave={handleSave}
                acceptedFiles={['image/jpeg', 'image/png', 'image/bmp']}
                showPreviews={true}
                maxFileSize={5000000}
                onClose={handleClose}
            />
        </AccordionDetails>
      </Accordion>
    )
}

export default TestAccordians
