import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import {InputAdornment, TextField} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  margin: {
    margin: theme.spacing(1),
  },
}));

const SearchBar = (props) => {
  const classes = useStyles();

  return (
    <TextField className={classes.margin} InputProps={{startAdornment: (
      <InputAdornment position="start">
        <SearchIcon />
      </InputAdornment>
    )}} placeholder="Username" variant="outlined" value={props.searchTerm} onChange={(e) => props.setSearchTerm(e.target.value)}/>
  );
};

export default SearchBar;