import getRandom from '../helpers/getRandom'
import renderStartingPage from '../helpers/renderPage'

import React, {Component} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {browserHistory} from 'react'
import clsx from 'clsx';
import countClicks from '../helpers/countClicks'
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelActions from '@material-ui/core/ExpansionPanelActions';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import { createHashHistory } from 'history'



// import GetStarted from './GetStarted'
// import countClicks from '../helpers/countClicks'
// import Profile from './Profile'

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(40),
    borderBottom: `2px solid ${theme.palette.divider}`,

  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(40),
    borderBottom: `2px solid ${theme.palette.divider}`,

    // color: theme.palette.text.secondary,
  },
  icon: {
    verticalAlign: 'bottom',
    height: 40,
    width: 40,
  },
  details: {
    alignItems: 'center',
  },
  column: {
    flexBasis: '33.33%',
  },
  helper: {
    borderLeft: `2px solid ${theme.palette.divider}`,
    borderRight: `2px solid ${theme.palette.divider}`,
    padding: theme.spacing(1, 2),
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline',
    },
  },
}));

const SideBar = function(props, {history}) {
// export default function SideBar() {
// console.log(props.history.location.pathname.slice(6).replace('_', ' '))
  const classes = useStyles()
const handleTravel =(e, slug) => {
  // console.log(props)
  e.preventDefault()
  // document.getElementById('origin').innerHTML = props.location.pathname.slice(6).replace('_', ' ')

  renderStartingPage()
  document.getElementById('origin').innerHTML = encodeURIComponent(props.location.pathname)

  slug=e.target.href
  // this.forceUpdate()
  e.persist()
  // history.push(document.getElementById('origin').innerText)

}
const handleClick =async(e, slug) => {
  // console.log(props.history.location.pathname.slice(6).replace('_', ' '))
  e.preventDefault()
  renderStartingPage()

  // document.getElementById('origin').innerHTML = props.location.pathname.slice(6).replace('_', ' ')
  console.log(encodeURIComponent(props.location.pathname))
  // document.getElementById('origin').innerHTML = encodeURIComponent(props.location.pathname)


  // e.persist()
  // slug=e.target.href
  // document.getElementById('origin').innerHTML = encodeURIComponent(slug)
  // countClicks(lang, slug)
  // history.push(document.getElementById('origin').innerText)
  // console.log(props)

}
  return (
    <div className={classes.root}>
      <ExpansionPanel defaultExpanded>
        <ExpansionPanelSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1c-content"
          id="panel1c-header"
        >
          <div className={classes.column}>
            <Typography className={classes.heading}>Starting Page</Typography>
          </div>
          <div className={classes.column}>
            <Typography className={classes.secondaryHeading}>Destination</Typography>
          </div>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails className={classes.details}>
          <div className={classes.column} >
          <div id="origin" >{props.start}</div>
          </div>
          <div className={classes.column}>
            <span id="end" />
          </div>
          <div className={clsx(classes.column, classes.helper)}>
            <Typography variant="caption">
              Start Your Kevin Bacon
              <br />
              <a href="#secondary-heading-and-columns" className={classes.link} onClick={getRandom}>
                Generate
              </a>
            </Typography>
          </div>
        </ExpansionPanelDetails>
        <Divider />
        <ExpansionPanelActions>
          <Button size="small" >Cancel</Button>
          <Button size="small" color="primary" onClick={handleClick}>
            Start
          </Button>

        </ExpansionPanelActions>
      </ExpansionPanel>
      <div id="wiki" onClick={handleTravel}>

      </div>

      {/* <GetStarted /> */}
    </div>
  )}


export default SideBar