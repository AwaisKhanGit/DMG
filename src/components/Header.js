import React, {useEffect,useMemo,useState} from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import {Link} from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles';



  const useStyles = makeStyles(theme=>({
   
  }))




  export const Header = (props) => {
    
    const classes = useStyles()
    const [value, setValue] = useState(0)

    const handleChange = (e,value)=>{
        setValue(value)
      }

    const  ElevationScroll = (props) => {
        const { children } = props;
    
        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }
    



  const routes = useMemo(()=>{
    return (
      [
        { name: "Sub grade", link: "/subgrade", activeIndex: 0 },
        { name: "Sub Base", link: "/subbase", activeIndex: 1 }, 
        { name: " Base Course", link: "/basecourse", activeIndex: 2 },
        { name: "Asphalt Concrete", link: "/asphaltconcrete", activeIndex: 3 },
        { name: "Concrete Works", link: "/concreteworks", activeIndex: 4 },
        { name: "Steel Testing", link: "/steelworking", activeIndex: 5 },
        { name: "Bricks", link: "/bricks", activeIndex: 6 },
        { name: "Inspection/Quality of Road", link: "/inspectionandquality", activeIndex: 7 }
        ]
    )
  },[])

      useEffect(()=>{
      [...routes].forEach(route => {
      switch (window.location.pathname) {
      case `${route.link}`:
      if (value !== route.activeIndex){
       setValue(route.activeIndex);
      }
      break; 

      default: 
      break;
      }
      });
      }, [routes,value]);



    const tabs = (
      <React.Fragment>
        <Tabs value={props.value} onChange={handleChange} 
        indicatorColor="primary"
        >
            {routes.map((route,index)=>(

              <Tab  key = {index} className = {classes.tab} label={route.name} component = {Link} to={route.link}/>

            ))}
        </Tabs> 
      </React.Fragment>
    )


      return (
        <React.Fragment>
        <ElevationScroll>
            <AppBar position="fixed" className={classes.appbar}>
                <Toolbar disableGutters  variant="dense" style={{minHeight:0,height:"45px"}}>
                    {tabs}
                </Toolbar>
            </AppBar>
      </ElevationScroll>
      </React.Fragment>
      )
    } 
          


export default Header